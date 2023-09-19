import React from "react";
// import styled from "styled-components";
// import { Button } from "next";

interface OpenState {
  isOpen: boolean;
  scrolledDown: boolean;
}

interface CloseIconProps extends OpenState {
  open(e: React.MouseEvent<HTMLElement>): void;
  close(e: React.MouseEvent<HTMLElement>): void;
}

// const MenuContainerStyle: React.CSSProperties = {
//   position: "absolute",
//   right: "24px",
//   zIndex: 12,
//   cursor: "pointer",
//   width: "33px",
//   height: "21px",
// };

// const HamburgerLineStyle: React.CSSProperties = {
//   position: "absolute",
//   margin: "auto",
//   top: "0px",
//   height: "3px",
//   width: "33px",
//   transition: "all 400ms ease-out",
// };

// const Line1Style: React.CSSProperties = {
//   ...HamburgerLineStyle,
//   top: "0",
// };

// const Line2Style: React.CSSProperties = {
//   ...HamburgerLineStyle,
//   top: "9px",
// };

// const Line3Style: React.CSSProperties = {
//   ...HamburgerLineStyle,
//   top: "18px",
// };
const NavIcon: React.FC<CloseIconProps> = ({
  isOpen,
  scrolledDown,
  open,
  close,
}) => {
  return (
    <button
      onClick={(e) => {
        isOpen ? close(e) : open(e);
      }}
      className="w-[33px] h-[21px] absolute right-[24px] top-8"
    >
      <div
        className={`MenuIcon-line x ${
          isOpen ? "rotate30 translate" : ""
        } hamburger-line top-0`}
        style={{
          backgroundColor: isOpen || scrolledDown ? "#cfa827" : "#000",
        }}
      ></div>
      <div
        className={`MenuIcon-line y ${
          isOpen ? "collapse" : ""
        } hamburger-line top-[9px]`}
        style={{
          backgroundColor: isOpen || scrolledDown ? "#cfa827" : "#000",
        }}
      ></div>
      <div
        className={`MenuIcon-line z ${
          isOpen ? "rotate150 translate" : ""
        } hamburger-line top-[18px]`}
        style={{
          backgroundColor: isOpen || scrolledDown ? "#cfa827" : "#000",
        }}
      ></div>
    </button>
  );
};

export default React.memo(NavIcon);
