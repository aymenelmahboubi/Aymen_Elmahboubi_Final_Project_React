import logo from "../assets/images/logo.png.webp";

import { PiUserCircleLight } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export const NavBar = ({ openCartModal }) => {
  let navigate = useNavigate();

  return (
    <div className="flex items-center p-6 justify-between bg-white sticky top-0 z-50 shadow">
      <img src={logo} alt="jhhjhg" />
      <ul className="flex justify-center gap-9 items-center">
        <li
          onClick={() => navigate("/")}
          className="hover:text-red-500 cursor-pointer"
        >
          Home
        </li>
        <li onClick={() => navigate("/shop")} className="hover:text-red-500 cursor-pointer">Shop</li>
        <li className="hover:text-red-500 cursor-pointer">sales</li>
        <li className="hover:text-red-500 cursor-pointer">Features</li>
        <li
          onClick={() => navigate("/blog")}
          className="hover:text-red-500 cursor-pointer"
        >
          Blog
        </li>
        <li
          onClick={() => navigate("/about")}
          className="hover:text-red-500 cursor-pointer"
        >
          About
        </li>
        <li
          onClick={() => navigate("/contact")}
          className="hover:text-red-500 cursor-pointer"
        >
          Contact
        </li>
      </ul>
      <div className="flex ps-6 items-center gap-6">
        <span className="text-3xl cursor-pointer">
          <PiUserCircleLight onClick={() => navigate("/account")}/>
        </span>
        <span className="text-3xl cursor-pointer">
          <HiOutlineShoppingBag onClick={openCartModal} />
        </span>
      </div>
    </div>
  );
};