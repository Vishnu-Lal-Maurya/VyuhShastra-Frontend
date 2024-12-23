import { Link } from "react-router-dom"
const NavBar = () =>{
    return(
        <>
        <div className="bg-slate-900 w-full">
            <div>
                <nav className="flex justify-between text-white mx-5 py-4">
                    <span className="text-left text-xl font-bold px-4">VyuhShastra</span>
                    <div className="text-right">
                    <Link className="px-4 py-4" to="/">Home</Link>
                    <Link className="px-4 py-4" to="/about">About</Link>
                    <Link className="px-4 py-4" to="/contact">Contact</Link>
                    <Link className="px-4 py-4" to="/login">LogIn</Link>
                    <Link className="px-4 py-4" to="/signup">SignUp</Link>
                    </div>
                </nav>
            </div>
        </div>
        </>
    )
}

export default NavBar