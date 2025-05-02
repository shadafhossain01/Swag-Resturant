import { Route, Routes } from "react-router-dom"
import General from "./pages/General"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Resturant from "./pages/Resturant"
import Cart from "./pages/Cart"

function App() {
  return (
    <>
    <Routes>
         <Route element={<General/>} >
         <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resturant/:id" element={<Resturant/>} />
        <Route path="/cart" element={<Cart/>}/>
         </Route>
    </Routes>
    </>
  )
}

export default App
