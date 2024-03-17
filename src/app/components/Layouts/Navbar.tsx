"use client";
import React from "react";
import { Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-[95%] z-10  mMax:w-[80%] lMax:w-[70%] mt-4 mx-auto h-[60px]  flex xsm:flex-col md:flex-row justify-between items-center  ">
      <div className="xsm:w-full md:w-[50%] h-full ">
        <h1 className=" w-full font-mont xsm:text-center md:text-left xsm:text-[20px] md:text-[30px] text-[30px] text-textPrimary font-bold items-center">
          CreativeCut
        </h1>
      </div>
      <div className="flex xsm:justify-center xsm:w-full md:w-[30%]  h-full md:justify-end">
        <Link
          href="https://twitter.com/maheshchambhare"
          className="mr-4 cursor-pointer"
        >
          <Twitter />
        </Link>
        <Link
          href="https://www.linkedin.com/in/maheshchambhare/"
          className=" cursor-pointer"
        >
          <Linkedin className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
