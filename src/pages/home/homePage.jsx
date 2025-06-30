import React from "react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Images } from "../../constant/images";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const HomePage = () => {
  let imgArr = [Images.item2, Images.item3, Images.banner3];

  return (
    <div>
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        navigation={true}
        loop={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={Images.carousel1} alt="" />
            <h1 className="text-center font-bold text-white text-6xl  absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
              Women Collection <br />
              New Arival
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={Images.carousel2} alt="" />
            <h1 className="text-center font-bold text-white text-6xl  absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
              Women Collection <br />
              New Arival
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={Images.carousel3} alt="" />
            <h1 className="text-center font-bold text-white text-6xl  absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
              Women Collection <br />
              New Arival
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center gap-6 bg-white p-16">
        <div>
          <div className="relative overflow-hidden mb-5">
            <img
              className=" duration-300 w-96 hover:scale-110"
              src={Images.banner1}
              alt=""
            />
            <button className=" tracking-widest py-2 px-12 absolute bottom-5 left-2/4 translate-x-[-50%] bg-white text-black">
              Dresses
            </button>
          </div>
          <div className="relative overflow-hidden mb-5">
            <img
              className=" duration-300 w-96 hover:scale-110"
              src={Images.item3}
              alt=""
            />
            <button className=" tracking-widest py-2 px-12 absolute bottom-5 left-2/4 translate-x-[-50%] bg-white text-black">
              watches
            </button>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden mb-5">
            <img
              className=" duration-300 w-96 hover:scale-110"
              src={Images.item3}
              alt=""
            />
            <button className=" tracking-widest py-2 px-12 absolute bottom-5 left-2/4 translate-x-[-50%] bg-white text-black">
              Watches
            </button>
          </div>
          <div className="relative overflow-hidden mb-5">
            <img
              className=" duration-300 w-96 hover:scale-110"
              src={Images.banner2}
              alt=""
            />
            <button className=" tracking-widest py-2 px-12 absolute bottom-5 left-2/4 translate-x-[-50%] bg-white text-black">
              Footerwear
            </button>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden mb-5">
            <img
              className=" duration-300 w-96 hover:scale-110"
              src={Images.banner1}
              alt=""
            />
            <button className=" tracking-widest py-2 px-12 absolute bottom-5 left-2/4 translate-x-[-50%] bg-white text-black">
              Dresses
            </button>
          </div>
          <div className="relative overflow-hidden mb-5">
            <img
              className=" duration-300 w-96 hover:scale-110"
              src={Images.item2}
              alt="  "
            />
            <button className=" tracking-widest py-2 px-12 absolute bottom-5 left-2/4 translate-x-[-50%] bg-white text-black">
              Shoes
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center py-5">FEATURED PRODUCTS</h1>
      {/* <div className="py-5">
        <Swiper
          spaceBetween={0}
          navigation={true}
          loop={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex gap-7 px-32">
              <div className="">
                <img
                  className="relative duration-300 before:absolute before:content-[''] before:top-0 before:left-0 before:w-0 before:h-0 hover:before:w-full hover:before:h-full  hover:before:bg-black/30 w-[700px] pb-4"
                  src={Images.carouselImg2}
                  alt=""
                />
                <p className="cursor-pointer duration-300 hover:text-red-500">
                  Boxy4 T-Shirt with Roll Sleeve{" "}
                </p>
                <span className="cursor-pointer duration-300 hover:text-red-500">
                  $20.00
                </span>
              </div>
              <div>
                <img
                  className="w-[700px] pb-4"
                  src={Images.carouselImg3}
                  alt=""
                />
                <p className="cursor-pointer duration-300 hover:text-red-500">
                  Boxy4 T-Shirt with Roll Sleeve{" "}
                </p>
                <span className="cursor-pointer duration-300 hover:text-red-500">
                  $20.00
                </span>
              </div>
              <div>
                <img
                  className="w-[700px] pb-4"
                  src={Images.carouselImg2}
                  alt=""
                />
                <p className="cursor-pointer duration-300 hover:text-red-500">
                  Boxy4 T-Shirt with Roll Sleeve{" "}
                </p>
                <span className="cursor-pointer duration-300 hover:text-red-500">
                  $20.00
                </span>
              </div>
              <div>
                <img className="w-[700px] pb-4" src={Images.item6} alt="" />
                <p className="cursor-pointer duration-300 hover:text-red-500">
                  Boxy4 T-Shirt with Roll Sleeve{" "}
                </p>
                <span className="cursor-pointer duration-300 hover:text-red-500">
                  $20.00
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-7 px-32">
              <div className="">
                <img
                  className="w-[700px] pb-4"
                  src={Images.carouselImg4}
                  alt=""
                />
                <p className="cursor-pointer duration-300 hover:text-red-500">
                  Boxy4 T-Shirt with Roll Sleeve{" "}
                </p>
                <span className="cursor-pointer duration-300 hover:text-red-500">
                  $20.00
                </span>
              </div>
              <div>
                <img
                  className="w-[700px] pb-4"
                  src={Images.carouselImg5}
                  alt=""
                />
                <p className="cursor-pointer duration-300 hover:text-red-500">
                  Boxy4 T-Shirt with Roll Sleeve{" "}
                </p>
                <span className="cursor-pointer duration-300 hover:text-red-500">
                  $20.00
                </span>
              </div>
              <div>
                <img
                  className="w-[700px] pb-4"
                  src={Images.carouselImg6}
                  alt=""
                />
                <p className="cursor-pointer duration-300 hover:text-red-500">
                  Boxy4 T-Shirt with Roll Sleeve{" "}
                </p>
                <span className="cursor-pointer duration-300 hover:text-red-500">
                  $20.00
                </span>
              </div>
              <div>
                <img
                  className="w-[700px] pb-4"
                  src={Images.carouselImg7}
                  alt=""
                />
                <p className="cursor-pointer duration-300 hover:text-red-500">
                  Boxy4 T-Shirt with Roll Sleeve{" "}
                </p>
                <span className="cursor-pointer duration-300 hover:text-red-500">
                  $20.00
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}

      <div className="p-14 flex justify-center gap-5 bg-[#f2f2f2]">
        <div className="relative overflow-hidden">
          <img
            className="w-[600px] duration-300 hover:scale-110"
            src={Images.banner4}
            alt="  "
          />
          <div className="text-center absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
            <span className="text-3xl text-white font-bold tracking-widest">
              The Beauty
            </span>
            <h1 className="text-5xl text-white font-bold tracking-widest">
              Lookbook
            </h1>
          </div>
        </div>
        <div className="w-[600px] bg-white flex justify-center items-center flex-col">
          <img
            className="w-[350px]"
            src={imgArr[Math.floor(Math.random() * 3)]}
            alt=""
          />
          <p className="text-center pt-4">
            Boxy2 T-Shirt with Roll Sleeve <br />
            $20.00
          </p>
        </div>
      </div>

        <h1 className="text-4xl font-bold text-center pb-5 pt-10">Our Blog</h1>

      <div className="flex justify-center gap-7 py-16">
        <div className="w-[400px]">
          <div className="overflow-hidden">
            <img
              className="w-full duration-300 hover:scale-110"
              src={Images.blog1}
              alt=""
            />
          </div>
          <p className="text-xl font-bold py-3">
            Black Friday Guide: Best Sales & Discount Codes
          </p>
          <span className="text-gray-400">
            by fashe-theme Admin on Dec 28,2017
          </span>
          <p className="w-full pt-3 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
            turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
          </p>
        </div>
        <div className="w-[400px]">
          <div className="overflow-hidden">
            <img
              className="w-full duration-300 hover:scale-110"
              src={Images.blog2}
              alt=""
            />
          </div>
          <p className="text-xl font-bold py-3">
            Black Friday Guide: Best Sales & Discount Codes
          </p>
          <span className="text-gray-400">
            by fashe-theme Admin on Dec 28,2017
          </span>
          <p className="w-full pt-3 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
            turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
          </p>
        </div>
        <div className="w-[400px]">
          <div className="overflow-hidden">
            <img
              className="w-full duration-300 hover:scale-110"
              src={Images.blog3}
              alt=""
            />
          </div>
          <p className="text-xl font-bold py-3">
            Black Friday Guide: Best Sales & Discount Codes
          </p>
          <span className="text-gray-400">
            by fashe-theme Admin on Dec 28,2017
          </span>
          <p className="w-full pt-3 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
            turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
          </p>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center pb-14 pt-10">@ FOLLOW US ON INSTAGRAM</h1>

      <div className="flex justify-around px-14 py-8 gap-10">
        <div className="border-l-gray-300 border-e-2 border-solid pe-14 pt-4 text-center">
          <h1 className="text-xl text-gray-400 pb-3">Free Delivery Worldwide</h1>
          <p className="tracking-wider">Mirum est notare quam littera gothica</p>
        </div>
        <div className="border-l-gray-300 border-e-2 border-solid pe-14 pt-4 text-center">
          <h1 className="text-xl text-gray-400 pb-3">30 Days Return</h1>
          <p className="tracking-wider">Simply return it within 30 days for an exchange.</p>
        </div>
        <div className="text-center">
          <h1 className="text-xl text-gray-400 pb-3">Store Opening</h1>
          <p className="tracking-wider">Shop open from Monday to Sunday</p>
        </div>
      </div>

    
    </div>
  );
};
