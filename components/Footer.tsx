import React from "react";
import Image from "next/image";
import Link from "next/link";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          {/* <Image
            src="/logo-purple.svg"
            height={38}
            width={115}
            alt="Flexibble"
          /> */}
          <p className="text-start text-sm mt-5 max-w-xs font-semibold">
            Thanks for stopping by!
          </p>
          <p className="text-start text-sm max-w-sm font-semibold">
            Curious about anything? Ask me a question on
            <Link
              href="https://curiouscat.live/itscuriouscat"
              className="font-bold"
            >
              Curious Cat
            </Link>
            !
          </p>
          {/* <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
        </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
