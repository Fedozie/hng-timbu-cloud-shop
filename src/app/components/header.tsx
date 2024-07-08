"use client";

import React, { useState } from "react";
import Logo from "@/public/assets/Logo.png";
import CartIcon from "@/public/assets/cartIcon.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="bg-white shadow-md overflow-hidden">
      <div className=" w-full px-10 py-4 flex flex-col gap-10 md:flex-row md:items-center md:justify-between ">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={100} height={100} />
        </div>

        <div className="flex-grow oveerflow-scroll flex flex-col md:flex-row justify-between ">
          <div className=" md:w-[50%] flex justify-between">
            <div className=" md:w-auto border rounded-md p-2 flex-grow flex justify-between items-center">
              <input
                type="text"
                className="bg-transparent outline-none flex-grow"
                placeholder="Search for all accessories"
              />
              <select className="bg-transparent outline-none hidden md:block">
                <option value="categories">All Categories</option>
              </select>
            </div>
            <button className="bg-primary-500 text-white p-2 rounded-r-md">
              Search
            </button>
          </div>

          <div className="flex flex-col mt-2 md:flex-row md:items-center md:gap-4 ">
            <Link href="/">Products</Link>
            <Link href="/">Contact Us</Link>
          </div>

          <div className="relative my-2">
            <Link href="/cart">
              <button className="bg-primary-500 text-white p-2 rounded-md flex justify-between items-center">
                <Image
                  src={CartIcon}
                  alt="cart"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                My Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
