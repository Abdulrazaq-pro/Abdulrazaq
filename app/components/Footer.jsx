import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="bg-zinc-800 py-6 px-3 text-neutral-400 space-y-4 text-[10px] "
      id="footer"
    >
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4  ">
        <div>
          <p className="text-sm text-[#cfcfcf]">Abdulrazaq&lsquo; <br />Portfolio</p>
        </div>
        <div className="space-y-1">
          <p>Down-Line</p>
          <ul className="space-y-1">
            <li>
              <Link href="/">My Work</Link>
            </li>
            <li>
              <Link href="/">My Shelf</Link>
            </li>
            <li>
              <Link href="/">My Resume</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-1">
          <p> Major Tech Skills</p>
          <ul className="space-y-1">
            <li>
              <Link href="/">Html/css/javascript</Link>
            </li>
            <li>
              <Link href="/">Reactjs/Nextjs</Link>
            </li>
            <li>
              <Link href="/">Tailwind/Bootstrap</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-1">
            <p>Contact Me</p>
          <ul className="space-y-1">
            <li>
              <Link href="/">
                <img src="" alt="" />
                <p>Twitter</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <img src="" alt="" />
                <p>Github</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <img src="" alt="" />
                <p>Instagram</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-neutral-600 w-[75%] h-[1px] m-auto"></div>
      <div>@kenny 2023 copyright</div>
    </div>
  );
};

export default Footer;
