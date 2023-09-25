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
          isOpen ? "rotate45 translate-y--20" : "top-0"
        } hamburger-line`}
        style={{
          backgroundColor: isOpen || scrolledDown ? "#cfa827" : "#000",
        }}
      ></div>
      <div
        className={`MenuIcon-line y ${
          isOpen ? "collapse" : "top-[9px]"
        } hamburger-line`}
        style={{
          backgroundColor: isOpen || scrolledDown ? "#cfa827" : "#000",
        }}
      ></div>
      <div
        className={`MenuIcon-line z ${
          isOpen ? "rotate135 translate-y-20" : "top-[18px]"
        } hamburger-line`}
        style={{
          backgroundColor: isOpen || scrolledDown ? "#cfa827" : "#000",
        }}
      ></div>
    </button>
  );
};

export default React.memo(NavIcon);
