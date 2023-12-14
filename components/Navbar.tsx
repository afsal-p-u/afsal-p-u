import { navbarItems } from "@/utils/data";
import Link from "next/link";
import { AiOutlineMenu } from 'react-icons/ai'
import { useRouter } from "next/router";
import React, { useState } from "react";

const Navbar = () => {
  const { pathname } =  useRouter();
  const [showSmMenu, setShowSmMenu] = useState(false)

  return (
    <div className="bg-black text-white">
      <div className="py-3 container px-5 sm:px-0 mx-auto flex items-center justify-between sticky max-sm:fixed top-0 z-50">
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

        <div className="block sm:hidden relative">
          <AiOutlineMenu className="text-xl cursor-pointer" onClick={() => setShowSmMenu(item => !item)} />

          {showSmMenu && (
            <>
            <div className="absolute top-10 right-0 flex flex-col gap-2 bg-blue-700 rounded p-5">
              {navbarItems.map((item, i) => (
                <Link href={`${item?.path}`} className="text-sm max-sm:text-xs">{item.name}</Link>
              ))}
            </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
