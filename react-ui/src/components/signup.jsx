import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import companyLogo from "../assets/images/logo2.png";
import { signup } from "../API/auth"; // Adjust the path as necessary

const SignUp = () => {
  const [formData, setFormData] = useState({
    companyFullName: "",
    companyEmail: "",
    companyPassword: "",
    companyWebsite: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(formData);
      toast.success("Account created successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setFormData({
        companyFullName: "",
        companyEmail: "",
        companyPassword: "",
        companyWebsite: "",
      });
    } catch (err) {
      const errorMessage =
        err.response && err.response.data && err.response.data.error
          ? err.response.data.error
          : "An error occurred. Please try again.";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="flex lg:flex-row flex-col justify-center">
      <ToastContainer />
      <div className="w-2/5 p-10 flex items-center">
        <img src={companyLogo} alt="MythoQuantum Explorers Logo" className="w-48 h-48 mr-3" />
        <div>
          <h1 className="text-4xl font-bold">MythoQuantum</h1>
          <h2 className="text-3xl mt-5">Explorers</h2>
        </div>
      </div>

      <div className="mt-10 lg:ml-16 p-10 rounded-lg shadow-lg flex flex-col items-center justify-center flex-grow bg-white">
        <h1 className="text-3xl font-bold text-center mb-10">Create Account</h1>

        <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="relative mb-8">
            <input
              type="text"
              name="companyFullName"
              id="companyFullName"
              className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 py-2"
              placeholder="Company Full Name"
              value={formData.companyFullName}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="companyFullName"
              className="absolute left-0 -top-5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-blue-500"
            >
              Company Full Name
            </label>
          </div>

          <div className="relative mb-8">
            <input
              type="email"
              name="companyEmail"
              id="companyEmail"
              className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 py-2"
              placeholder="Company Email Address"
              value={formData.companyEmail}
              onChange={handleChange}
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
              value={formData.companyPassword}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="companyPassword"
              className="absolute left-0 -top-5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-blue-500"
            >
              Company Password
            </label>
          </div>

          <div className="relative mb-8">
            <input
              type="url"
              name="companyWebsite"
              id="companyWebsite"
              className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 py-2"
              placeholder="Company Website"
              value={formData.companyWebsite}
              onChange={handleChange}
            />
            <label
              htmlFor="companyWebsite"
              className="absolute left-0 -top-5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-blue-500"
            >
              Company Website
            </label>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-center"
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm">
            Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-700 font-bold">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
