import Image from "next/image";
import React from "react";
import Link from "next/link";

type Props = {
  src: string;
  alt: string;
  title: string;
  tech: string;
  description: string;
  link?: string;
};

const ProjectCard = ({ src, alt, tech, title, description, link }: Props) => {
  return (
    <section className="first:md:mt-5 first:mt-0 md:mt-5 mt-5 flex md:flex-row flex-col items-center font-mori">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={440}
        className={"mt-10 md:mr-10 mr-0"}
      />
      <div className="space-y-4 flex flex-col md:items-start items-center">
        <h4
          className={`mt-10 text-center font-bold md:text-left xs:text-[32px] md:text-[42px] text-[18px]`}
        >
          {title}{" "}
        </h4>
        <p
          className={`md:mt-5 sm:text-left text-center leading-[1.5] ss:text-[18px] text-[16px]`}
        >
          {description}{" "}
        </p>
        <span className="text-[#8c3aff] space-y-4 flex flex-col md:items-start items-center">
          {tech}
        </span>
        {link && (
          <Link href={link} className="font-semibold text-[16px]">
            View Project
          </Link>
        )}
      </div>
    </section>
  );
};

export default ProjectCard;
