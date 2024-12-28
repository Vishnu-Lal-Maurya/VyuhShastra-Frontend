import AllWorkspace from "./components/Workspace/AllWorkspace.jsx";
import About from "./components/About.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/Homepage/HomePage.jsx";
import LogIn from "./components/login.jsx";
import NavBar from "./components/NavBar.jsx";
import SignUp from "./components/signup.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateWorkspace from "./components/Workspace/CreateWorkspace.jsx";
import WorkspaceDetails from "./components/Workspace/WorkspaceDetails.jsx";
import Datagrid from "./components/Workspace/Datagrid.jsx";


const App = () => {
  return (
    <Router>
      <div
        className="flex flex-col bg-gradient-to-r from-purple-50 via-gray-50 to-purple-50 justify-between"
        style={{ minHeight: "100vh" }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/workspaces"  element={<AllWorkspace/>} />
          <Route path="/workspace/create" element={<CreateWorkspace/>} />
          <Route path="/workspace/:workspaceId" element={<WorkspaceDetails/>} />
          <Route path="/workspace/:workspaceId/file/:fileId/datagrid" element={<Datagrid/>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
