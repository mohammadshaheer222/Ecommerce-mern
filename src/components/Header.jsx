import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

import logo from "/src/assets/logo.svg";
import logout from "/src/assets/logout.svg";
import { ShopContext } from "../Context/ShopContext";
import Cart from "./Cart";


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); 

  const { getTotalCartItem } = useContext(ShopContext);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleCart = () => {
    setCartOpen(true)
    // document.body.style.overflow = cartOpen ? "auto" : "hidden";
  };

  const closeCart = () => {
    setCartOpen(false)
  }

  return (
    <>
      <div className={`bg-gray-200 px-4 sm:px-8 py-5 w-full flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50 `}>
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl">
          <img src={logo} alt="logo" width={60} />{" "}
        </Link>

        {/* Navbar desktop */}
        <Navbar
          containerStyles={
            "hidden md:flex gap-x-8 font-semibold text-lg tracking-wider"
          }
        />
        
        {/* Navbar mobile */}
        <Navbar
          openMenu={openMenu}
          containerStyles={
            openMenu
              ? "md:hidden font-semibold w-[50%] h-full tracking-wider bg-gray-200 flex flex-col items-center justify-center  gap-y-14  shadow-inner fixed top-20  right-0 transition-all duration-300 z-20"
              : "md:hidden font-semibold w-[50%] h-full tracking-wider bg-gray-200 flex flex-col items-center justify-center  gap-y-14 shadow-xl fixed top-20 -right-[100%] transition-all duration-300 z-20 "
          }
        />

        {/* Buttons */}
        <div className="flex items-center justify-center gap-x-2 sm:gap-x-4">
          {/* Cart button */}
          <div className="relative flex scale-90 hover:scale-100 transition-all duration-300">
            <span className="flex-1 w-8 h-8 mt-2 cursor-pointer ">
              <FiShoppingCart onClick={toggleCart} size={24} />
            </span>
            <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
              {getTotalCartItem()}
            </span>
          </div>

          <NavLink
            to="/logout"
            className="hidden bg-blue-500 text-white font-semibold text-sm px-4 py-1 rounded-full hover:bg-blue-700 active:bg-blue-600"
          >
            {" "}
            <img width={19} src={logout} alt="" />
            Logout
          </NavLink>

          <NavLink to="/login">
            <AiOutlineUser size={24} />
          </NavLink>

          <div>
            {!openMenu ? (
              <IoMenu
                onClick={toggleMenu}
                size={30}
                className="md:hidden cursor-pointer"
              />
            ) : (
              <IoClose
                onClick={toggleMenu}
                size={30}
                className="md:hidden cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
      
      <Cart cartOpen={cartOpen} closeCart={closeCart}/>
    </>
  );
};

export default Header;
