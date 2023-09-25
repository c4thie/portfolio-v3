import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <p className="text-start text-sm mt-5 max-w-xs font-semibold">
            Thanks for stopping by!
          </p>
          <p className="text-start text-sm max-w-md font-semibold">
            Curious about anything? Ask me a question on{" "}
            <Link
              href="https://curiouscat.live/itscuriouscat"
              className="font-bold text-[#cfa827]"
            >
              Curious Cat
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
