import React from "react";
import { Images } from "../../constant/index";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Blog = () => {
  return (
    <div>
      <div className="flex bg-cover bg-center text-white font-extrabold text-5xl justify-center items-center h-[220px] relative">
        <img 
          src={Images.banner1} 
          alt="News Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10">News</div>
      </div>

      <div className=" flex flex-col md:flex-row mt-[50px]">
        <div className=" w-full md:w-[70%] flex flex-col gap-y-[30px] justify-center items-center">
          <div className="relative h-[700px] w-[75%] overflow-hidden">
            <img 
              src={Images.blog1} 
              alt="Blog Post 1" 
              className="absolute inset-0 w-full h-full object-cover hover:scale-[1.05] hover:duration-300"
            />
          </div>
          <div className="w-[70%] flex flex-col gap-[20px]">
            <h2 className="font-bold text-2xl hover:text-[#e65540] hover:duration-300">
              Black Friday Guide: Best Sales & Discount Codes
            </h2>
            <p className="text-[#888888]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
              turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
            </p>
            <div className="font-serif hover:text-[#e65540] hover:duration-300 flex gap-4 items-center">
              <span>Continue Reading</span>
              <FaLongArrowAltRight className="text-xl" />
            </div>
          </div>
        </div>
        <div className=" w-full md:w-[30%] flex justify-start items-start flex-col">
          <input
            className="outline-none h-[45px] w-[80%]  px-2 border-black border-[1px] border-solide rounded-[30px]"
            type="search"
            placeholder="Search for article..."
          />
          <div className="font-extrabold text-2xl pt-[50px]">
            Featured Products
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex mt-[50px]">
              <img 
                src={Images.item1} 
                alt="Featured Product 1" 
                className="h-[100px] w-[70px] object-cover hover:opacity-[0.7] hover:duration-150"
              />
              <div className="pl-5">
                <div className="font-thin">
                  Boxy7 T-Shirt with <br /> Roll Sleeve
                </div>
                <div className="text-sm text-gray-400">20$</div>
              </div>
            </div>
            <div className="flex ">
              <img 
                src={Images.item2} 
                alt="Featured Product 2" 
                className="h-[100px] w-[70px] object-cover hover:opacity-[0.7] hover:duration-150"
              />
              <div className="pl-5">
                <div className="font-thin">
                  Boxy7 T-Shirt with <br /> Roll Sleeve
                </div>
                <div className="text-sm text-gray-400">20$</div>
              </div>
            </div>
            <div className="flex ">
              <img 
                src={Images.item3} 
                alt="Featured Product 3" 
                className="h-[100px] w-[70px] object-cover hover:opacity-[0.7] hover:duration-150"
              />
              <div className="pl-5">
                <div className="font-thin">
                  Boxy7 T-Shirt with <br /> Roll Sleeve
                </div>
                <div className="text-sm text-gray-400">20$</div>
              </div>
            </div>
            <div className="flex ">
              <img 
                src={Images.item4} 
                alt="Featured Product 4" 
                className="h-[100px] w-[70px] object-cover hover:opacity-[0.7] hover:duration-150"
              />
              <div className="pl-5">
                <div className="font-thin">
                  Boxy7 T-Shirt with <br /> Roll Sleeve
                </div>
                <div className="text-sm text-gray-400">20$</div>
              </div>
            </div>
            <div className="flex ">
              <img 
                src={Images.item5} 
                alt="Featured Product 5" 
                className="h-[100px] w-[70px] object-cover hover:opacity-[0.7] hover:duration-150"
              />
              <div className="pl-5">
                <div className="font-thin">
                  Boxy7 T-Shirt with <br /> Roll Sleeve
                </div>
                <div className="text-sm text-gray-400">20$</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 flex flex-col md:flex-row mt-[50px]">
        <section className=" w-full md:w-[70%] flex flex-col gap-y-[30px] justify-center items-center">
          <div className="relative h-[600px] w-[70%] overflow-hidden">
            <img 
              src={Images.blog2} 
              alt="Blog Post 2" 
              className="absolute inset-0 w-full h-full object-cover hover:scale-[1.05] hover:duration-300"
            />
          </div>
          <div className="w-[70%] flex flex-col gap-[20px]">
            <h2 className="font-bold text-2xl hover:text-[#e65540] hover:duration-300">
              The White Sneakers Nearly Every Fashion Girls Own
            </h2>
            <p className="text-[#888888]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
              turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
            </p>
            <div className="font-serif  hover:text-[#e65540] hover:duration-300 flex gap-4 items-center">
              <span>Continue Reading</span>
              <FaLongArrowAltRight className="text-xl" />
            </div>
          </div>
        </section>
        <div className=" w-full md:w-[30%] flex justify-start items-start flex-col">
          <div className="font-extrabold text-2xl ">Tag Cloud</div>

          <div className="flex pt-10 gap-5 ">
            <div className="border-black border-[1px] border-solid hover:text-red-500 flex justify-center items-center px-2 hover:border-red-500 rounded-[20px]">
              crafts
            </div>
            <div className="border-black border-[1px] border-solid hover:text-red-500 flex justify-center items-center px-2 hover:border-red-500 rounded-[20px]">
              street style
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
