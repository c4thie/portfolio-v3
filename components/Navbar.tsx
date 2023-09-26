"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import NavIcon from "./NavIcon";
// import { animateInMenu, animateOutMenu } from "@/constants/animations";

const Navbar = () => {
  const [showMobileMenu, toggleMobileMenu] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    toggleMobileMenu(true);
    // animateInMenu();
  };

  const closeMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    toggleMobileMenu(false);
    // const circle = document.getElementById("circle");
    // if (circle) circle.classList.remove("expand");
    // animateOutMenu();
  };

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
        </Link>
        <ul className="lg:flex lg:flexEnd hidden gap-7">
          {NavLinks.map((link, i) => (
            <li
              key={link.key}
              className={`group relative ${
                i === NavLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <Link
                className="text-[#282828] text-[16px] font-mori font-semibold cursor-pointer"
                href={link.href}
              >
                {link.text}
              </Link>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#cfa827] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:text-[#cfa827] group-hover:scale-x-100" />
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden flexCenter gap-4 z-20 fixed top-1 right-1 p-3">
        <NavIcon
          isOpen={showMobileMenu}
          open={openMenu}
          scrolledDown={scrolledDown}
          close={closeMenu}
        />
      </div>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col ${
          showMobileMenu ? "w-[15rem]" : "w-0"
        }`}
      >
        <div className="flex-1 flexCenter items-start flex-col gap-6 p-8">
          {NavLinks.map((link, i) => (
            <li key={link.key} className="group relative mr-0 list-none">
              <Link
                className="text-[#282828] text-[16px] font-mori font-semibold cursor-pointer transition-colors hover:text-[#cfa827]"
                href={link.href}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
