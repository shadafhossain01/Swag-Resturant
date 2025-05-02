import logo from"../assets/logo.png"
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar=()=>{
    const cartItem=useSelector((state)=>state.cart.Item)

return(
    <div className="header">
    <div className="container">
    <div className="navbar">
    <Link to="/"> <img src={logo}/> </Link>
    <ul className="navbar-menu">
    <li> <Link to="/"> Home </Link></li>
    <li> <Link to="/about"> About </Link></li>
    <li> <Link to="/contact"> Contact </Link></li>
    <li className="cartList"> <Link to="/cart"> <IoMdCart/> <span className="cartNumber">{cartItem.length}</span> </Link> </li>
    <button>Login <FaUser/> </button>
    </ul>
    </div>
    </div>
    </div>
)
}

export default Navbar;