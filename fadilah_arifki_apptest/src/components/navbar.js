import { Link } from "react-router-dom"
import Profile from "./icons/profile"

export default function NavBar() {
    return (
        <div className="flex flex-row justify-between bg-orange-700 px-20 py-4">
            <div className="flex flex-row justify-between items-center text-white text-xl font-bold uppercase">
                <Link className="mx-2 hover:text-gray-300" to="/">Home</Link>
                <Link className="mx-2 hover:text-gray-300" to="/contacts">Technical Test</Link>
            </div>
            <div><Profile /></div>
        </div>
    )
}