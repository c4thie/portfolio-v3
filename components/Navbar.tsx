import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";

const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="xl:hidden flexCenter gap-4">
        <span className="u-ib u-anim delay-9">
          <button className="c-header_nav_burger" data-header="burger">
            <svg className="c-header_nav_close">
              <Image src="/menu.svg" alt="Menu" width={50} height={50} />
            </svg>
          </button>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
