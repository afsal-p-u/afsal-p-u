import { navbarItems } from "@/utils/data";
import Link from "next/link";
import { AiOutlineMenu } from 'react-icons/ai'
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const { pathname } =  useRouter();

  return (
    <div className="bg-black">
      <div className="text-white py-3 container px-5 sm:px-0 mx-auto flex items-center justify-between sticky top-0">
        <h1 className="text-2xl font-semibold sm:text-3xl">
          <span className="text-blue-700">A</span>fsal
          <span className="text-blue-700">.</span>
        </h1>

        <div className="hidden sm:block">
          <ul className="flex gap-5">
            {navbarItems.map((item, i) => (
              <li key={i}>
                <Link className="font-semibold" href={`${item?.path}`}>
                  {item.name}
                </Link>
                {item.path === pathname && (
                  <div className="w-full h-[3px] bg-blue-700 slide-underline"></div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="block sm:hidden">
          <AiOutlineMenu className="text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
