import React, { useState } from "react";
import { Images, JsonData } from "../../constant";

const checkPriceRange = (price, range) => {
  const numericPrice = parseFloat(price);

  const [min, max] = range.split("-").map(Number);

  return numericPrice >= min && numericPrice <= max;
};

export const Shop = () => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleColorChange = (e) => {
    const value = e.target.value;
    setSelectedColors((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setSelectedPrices((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const filteredProducts = JsonData.filter((item) => {
    const matchesSearch =
      search.toLowerCase() === "" ||
      item.Product.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.type1);
    const matchesColor =
      selectedColors.length === 0 || selectedColors.includes(item.color);
    const matchesPrice =
      selectedPrices.length === 0 ||
      selectedPrices.some((priceRange) =>
        checkPriceRange(item.price, priceRange)
      );

    return matchesSearch && matchesCategory && matchesColor && matchesPrice;
  });

  return (
    <div className="">
      <div className="relative">
        <img src={Images.carousel3} alt="" />
        <h1 className="absolute text-6xl text-white font-bold top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
          Products
        </h1>
      </div>
      <div className=" w-[100%] flex justify-center pt-[100px] gap-10">
        <div className=" w-[250px]  flex flex-col gap-20 p-4">
          <div className="flex flex-col justify-center items-center">
            <div className="text-2xl font-medium mb-4">Categories</div>
            <div>
              <label className="container">
                <input
                  type="checkbox"
                  value="sell"
                  checked={selectedCategories.includes("sell")}
                  onChange={handleCategoryChange}
                />
                <span className="checkmark"></span>
                <span className="ml-2 text-lg">Sell</span>
              </label>
              <label className="container block mt-2">
                <input
                  type="checkbox"
                  value="sold"
                  checked={selectedCategories.includes("sold")}
                  onChange={handleCategoryChange}
                />
                <span className="checkmark"></span>
                <span className="ml-2 text-lg">Sold</span>
              </label>
              <label className="container block mt-2">
                <input
                  type="checkbox"
                  value="new"
                  checked={selectedCategories.includes("new")}
                  onChange={handleCategoryChange}
                />
                <span className="checkmark"></span>
                <span className="ml-2 text-lg">New</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-2xl font-medium mb-4">Color</div>
            <div>
              <label className="container">
                <input
                  type="checkbox"
                  value="black"
                  checked={selectedColors.includes("black")}
                  onChange={handleColorChange}
                />
                <span className="checkmark"></span>
                <span className="ml-2 text-lg">Black</span>
              </label>
              <label className="container block mt-2">
                <input
                  type="checkbox"
                  value="white"
                  checked={selectedColors.includes("white")}
                  onChange={handleColorChange}
                />
                <span className="checkmark"></span>
                <span className="ml-2 text-lg">White</span>
              </label>
              <label className="container block mt-2">
                <input
                  type="checkbox"
                  value="blue"
                  checked={selectedColors.includes("blue")}
                  onChange={handleColorChange}
                />
                <span className="checkmark"></span>
                <span className="ml-2 text-lg">Blue</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-2xl font-medium mb-4">Price</div>
            <div>
              <label className="container">
                <input
                  type="checkbox"
                  value="0-5"
                  checked={selectedPrices.includes("0-5")}
                  onChange={handlePriceChange}
                />
                <span className="checkmark"></span>
                <span className="ml-2 text-lg">$0 - $5</span>
              </label>
              <label className="container block mt-2">
                <input
                  type="checkbox"
                  value="5-10"
                  checked={selectedPrices.includes("5-10")}
                  onChange={handlePriceChange}
                />
                <span className="checkmark"></span>
                <span className="ml-2 text-lg">$5 - $10</span>
              </label>
              <label className="container block mt-2">
                <input
                  type="checkbox"
                  value="10-20"
                  checked={selectedPrices.includes("10-20")}
                  onChange={handlePriceChange}
                />
                <span className="checkmark"></span>
                <span className="ml-2 text-lg">$10 - $20</span>
              </label>
            </div>
          </div>
        </div>

        <div className=" w-[70vw]  pb-52 flex justify-center items-center gap-10 flex-col">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="h-[50px] w-[500px] border-black border-solid border-[1px] rounded-[30px] outline-none pl-3"
            placeholder="Search"
            type="search"
          />
          <div className="flex flex-wrap gap-4">
            {filteredProducts.map((e) => (
              <div
                key={e.id}
                className="flex flex-col items-center relative cartparent"
              >
                <img
                  className="h-[400px] w-[300px] hover:brightness-50 hover:duration-300 "
                  src={e.image}
                  alt=""
                />
                <div className="absolute bottom-[120px] addcart bg-black font-thin text-xl text-white px-10 py-2 rounded-[30px] cursor-pointer hover:bg-red-500 hover:duration-300 ">
                  add to cart
                </div>
                <div className="h-[100px] w-[300px] flex-col  flex  text-black">
                  <div className="py-3">{e.Product}</div>
                  <div>
                    {e.price}{" "}
                    <div className="opacity-0">
                      {e.type1} {e.color}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
