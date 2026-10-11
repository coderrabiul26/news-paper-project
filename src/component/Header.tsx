import Image from "next/image";
import React from "react";
import Navlinks from "./Navlinks";
import Marquee from "./Marquee";
import Userinfo from "./Userinfo";
import Link from "next/link";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <header className="" >
      <div className="relative py-4 container mx-auto">
        <div className="flex gap-3 justify-center">
          <Image
            src={"/logo.webp"}
            width={35}
            height={35}
            alt="header_logo"
            className="object-contain w-auto"
          ></Image>
          <div>
            <Link href={'/'}><h1 className="text-red-500 text-2xl font-bold">দৈনিক আমাদের খবর</h1></Link>
            <p className="text-sm -mt-1">{date}</p>
          </div>
        </div>
        <Userinfo></Userinfo>
      </div>
      <Navlinks></Navlinks>
      <Marquee></Marquee>
    </header>
    
  );
};

export default Header;
