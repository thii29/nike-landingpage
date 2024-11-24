import React, { useState } from "react";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constant";

const NavMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="hidden max-lg:block cursor-pointer"
        onClick={()=>setOpen(true)}
      >
        <img src={hamburger} alt="Hamburger" width={25} height={25} />
      </div>
      {open ? (
        <div className="w-[60%] h-screen bg-primary fixed right-0 top-0 z-20 lg:hidden">
          <div className="relative w-full h-full">
            <button onClick={() => setOpen(false)} className="absolute right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mx-4 my-4 hover:text-slate-gray cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="absolute mt-24 right-0 mx-4">
              <ul className="flex flex-col items-end gap-12 ">
                {navLinks.map((item) => (
                  <li
                    key={item.label}
                    onClick={() => {
                      setTimeout(()=>setOpen(false), 300);
                    }}
                  >
                    <a
                      href={item.href}
                      className="font-montserrat leading-normal text-xl text-gray-700 hover:text-slate-400 cursor-pointer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/"
                    className="font-montserrat leading-normal text-xl font-medium"
                  >
                    Sign up/ Explore now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavMobile;
