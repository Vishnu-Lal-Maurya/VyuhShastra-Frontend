import { useState } from "react";
import companyLogo from "../assets/images/logo2.png";
import { login } from '../API/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendData = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ email, password }); // Using the `login` function

      // Backend sends "access_token" on successful login
      const { access_token } = response.data;

      // Store the token in local storage
      localStorage.setItem("accessToken", access_token);

      // Show success toast
      toast.success("Login successful! Redirecting...");

      // Redirect to the dashboard after a delay
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (err) {
      // Handle error responses
      if (err.response && err.response.data && err.response.data.error) {
        toast.error(err.response.data.error); // Display backend-provided error
      } else {
        toast.error("An error occurred. Please try again later."); // Generic error
      }
    }
  };

  return (
    <div className="flex lg:flex-row flex-col justify-center">
      <ToastContainer /> {/* Add ToastContainer for toast messages */}
      <div className="w-2/5 p-10 flex items-center">
        <img
          src={companyLogo}
          alt="MythoQuantum Explorers Logo"
          className="w-48 h-48 mr-3"
        />
        <div>
          <h1 className="text-4xl font-bold">MythoQuantum</h1>
          <h2 className="text-3xl mt-5">Explorers</h2>
        </div>
      </div>

      <div className="mt-10 lg:ml-16 p-10 rounded-lg shadow-lg flex flex-col items-center justify-center flex-grow bg-white">
        <h1 className="text-3xl font-bold text-center mb-10">Sign In</h1>

        <form className="w-full max-w-md mx-auto" onSubmit={sendData}>
          <div className="relative mb-8">
            <input
              type="email"
              name="companyEmail"
              id="companyEmail"
              className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 py-2"
              placeholder="Company Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              htmlFor="companyEmail"
              className="absolute left-0 -top-5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-blue-500"
            >
              Company Email Address
            </label>
          </div>

          <div className="relative mb-8">
            <input
              type="password"
              name="companyPassword"
              id="companyPassword"
              className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 py-2"
              placeholder="Company Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label
              htmlFor="companyPassword"
              className="absolute left-0 -top-5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-blue-500"
            >
              Company Password
            </label>
          </div>

          <div className="flex items-center justify-center mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-center"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Don't have an account?
            <a
              href="/signup"
              className="text-blue-500 hover:text-blue-700 font-bold"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
