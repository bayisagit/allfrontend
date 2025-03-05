import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="bg-blue-700 flex mb-10 justify-evenly text-white">
            <Link to = "/">Home</Link>
            <Link to = "/contact">Contact</Link>
            <Link to = "/about">About Us</Link>        
        </nav>
    );
}
export default Navbar