import { useState } from "react"


const LogIn = ({value,endpoint}) =>{
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    function sendData(e){
        e.preventDefault();
        console.log('username',username);
        console.log('password',password);
    }
    return (
        <>
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-lg font-bold mb-4 text-center">{value}</h2>
        <form onSubmit={sendData}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="username"
              name="username"
              required
              onChange={(e)=>{setUsername(e.target.value)}}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e)=>{setPassword(e.target.value)}}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
          >
            Login
          </button>
        </form>
      </div>
    </div>
        </>
    )
}

export default LogIn