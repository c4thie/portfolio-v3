"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import NavIcon from "./NavIcon";
import { animateInMenu, animateOutMenu } from "@/constants/animations";

const Navbar = () => {
  const [showMobileMenu, toggleMobileMenu] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

  const scrollTo = (id: string) => {
    toggleMobileMenu(false);
    // if (showMobileMenu) animateOutMenu();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    toggleMobileMenu(true);
    animateInMenu();
  };

  const closeMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    toggleMobileMenu(false);
    // const circle = document.getElementById("circle");
    // if (circle) circle.classList.remove("expand");
    animateOutMenu();
  };

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link, i) => (
            <li
              key={link.key}
              className={`group relative text-[#282828] cursor-pointer text-[16px] ${
                i === NavLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <Link href={link.href}>{link.text}</Link>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#6469ef] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:text-[#6469ef] group-hover:scale-x-100" />
            </li>
          ))}
        </ul>
      </div>
      <div className="xl:hidden flexCenter gap-4">
        {/* <span className="u-ib u-anim delay-9"> */}
        <NavIcon
          isOpen={showMobileMenu}
          open={openMenu}
          scrolledDown={scrolledDown}
          close={closeMenu}
        />
        {/* </button> */}
        {/* </span> */}
      </div>
    </nav>
  );
};

export default Navbar;
