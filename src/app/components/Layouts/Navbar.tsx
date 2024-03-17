"use client";
import React from "react";
import { Twitter, Linkedin, Instagram, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import links from "@/utils/data/links.json";

function Navbar() {
  return (
    <div className="w-[95%] z-10  mMax:w-[80%] lMax:w-[70%] mt-4 mx-auto h-[60px]  flex xsm:flex-col md:flex-row justify-between items-center  ">
      <div className="xsm:w-full md:w-[50%] h-full ">
        <h1 className=" w-full font-mont xsm:text-center md:text-left xsm:text-[20px] md:text-[30px] text-[30px] text-textPrimary font-bold items-center">
          CreativeCut
        </h1>
      </div>
      <div className="flex xsm:mt-2 md:mt-0 xsm:justify-center xsm:w-full md:w-[30%]  text-white h-full md:justify-end">
        <Link href={links.instagram} className="mr-4 cursor-pointer">
          <Instagram />
        </Link>
        <Link href={links.twitter} className="mr-4 cursor-pointer">
          <Twitter />
        </Link>
        <Link href={links.linkedin} className="mr-4 cursor-pointer">
          <Linkedin className="cursor-pointer" />
        </Link>
        <Link href={"mailto:" + links.gmail} className="mr-4 cursor-pointer">
          <Mail className="cursor-pointer" />
        </Link>
        <Link href={links.youtube} className=" cursor-pointer">
          <Youtube className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
