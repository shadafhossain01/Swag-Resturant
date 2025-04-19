import logo from"../assets/logo.png"
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

const Navbar=()=>{
return(
    <div className="header">
    <div className="container">
    <div className="navbar">
    <Link to="/"> <img src={logo}/> </Link>
    <ul className="navbar-menu">
    <li> <Link to="/"> Home </Link></li>
    <li> <Link to="/about"> About </Link></li>
    <li> <Link to="/contact"> Contact </Link></li>
    <li> <IoMdCart/> </li>
    <button>Login <FaUser/> </button>
    </ul>
    </div>
    </div>
    </div>
)
}

export default Navbar;