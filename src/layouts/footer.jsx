import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestSquare,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-[#f0f0f0] py-14 px-11">
      <div className="flex justify-around">
        <div className="w-[450px]">
          <h1 className="pb-12 font-bold">GET IN TOUCH</h1>
          <p className="pb-7 font-light">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="flex gap-7">
            <span className="text-2xl">
              <FaFacebookF />
            </span>
            <span className="text-2xl">
              <FaTwitter />
            </span>
            <span className="text-2xl">
              <FaPinterestSquare />
            </span>
            <span className="text-2xl">
              <FaGooglePlusG />
            </span>
            <span className="text-2xl">
              <FaInstagram />
            </span>
          </div>
        </div>
        <div className="">
          <h1 className="pb-12 font-bold">GET IN TOUCH</h1>
          <h1 className="cursor-pointer duration-300 hover:text-red-500 mb-3">
            Men
          </h1>
          <h1 className="cursor-pointer duration-300 hover:text-red-500 mb-3">
            Women
          </h1>
          <h1 className="cursor-pointer duration-300 hover:text-red-500 mb-3">
            Dresses
          </h1>
          <h1 className="cursor-pointer duration-300 hover:text-red-500 mb-3">
            Sunglasses
          </h1>
        </div>
        <div className="">
          <h1 className="pb-12 font-bold">Links</h1>
          <h1 className="cursor-pointer duration-300 hover:text-red-500 mb-3">
            Search
          </h1>
          <h1 className="cursor-pointer duration-300 hover:text-red-500 mb-3">
            About Us
          </h1>
          <h1 className="cursor-pointer duration-300 hover:text-red-500 mb-3">
            Contact Us
          </h1>
          <h1 className="cursor-pointer duration-300 hover:text-red-500 mb-3">
            Returns
          </h1>
        </div>
        <div className="  ">
          <h1 className="pb-12 font-bold">Help</h1>
          <h1 className="cursor-pointer duration-300 hover:text-red-500 mb-3">
            Track Order
          </h1>
          <h1 className="cursor-pointer duration-300 hover:text-red-500 mb-3">
            Returns
          </h1>
          <h1 className="cursor-pointer duration-300 hover:text-red-500 mb-3">
            Shipping
          </h1>
          <h1 className="cursor-pointer duration-300 hover:text-red-500 mb-3">
            FAQ's
          </h1>
        </div>
        <div className=" fd fjfghj rjk fgkf hfj fjker erueit erertben kf  hfh fjhgf krtj ">
          <h1 className="pb-12 font-bold">Help</h1>
          <input
            className="bg-[#f0f0f0] border-b border-black outline-none w-[300px] py-2"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className="block mt-5 py-3 px-10 text-l rounded-3xl bg-black text-white">
            Subscribe
          </button>
        </div>
      </div>
      <p className="text-center pt-10 cursor-pointer text-gray-500">Copyright Hamiide © 2022 <span className="duration-300 hover:text-red-500">Shopify Theme Developed by MassTechnologist</span> All rights reserved.</p>
    </div>
  );
};
