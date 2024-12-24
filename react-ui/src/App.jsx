import About from "./components/About.jsx";
import HomePage from "./components/Homepage/HomePage.jsx";
import LogIn from "./components/login.jsx";
import NavBar from "./components/NavBar.jsx"
import SignUp from "./components/signup.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = ()=>{
return(
<>
	<Router>
	<NavBar/>
		<Routes>
			<Route path="/" element={<HomePage/>}/>
			<Route path='/about' element={<About/>}/>
			<Route path = '/login' element={<LogIn value={"Login"} endpoint={"/login"}/>}/>
			<Route path = '/signup' element={<SignUp value={"SignUp"} endpoint={"/signup"}/>}/>
		</Routes>
	
	</Router>
</>
)
}
export default App;
