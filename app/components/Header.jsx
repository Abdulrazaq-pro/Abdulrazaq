"use client";

import Link from "next/link";
import { useState } from "react";
import { useDarkMode } from "../DarkModeContext";
import Image from "next/image";

const Header = ({
  select,
  setSelect,
  navChange1,
  navChange2,
  navChange3,
  navChange4,
  navChange5,
}) => {
  // console.log(getComputedStyle(document.body).fontFamily);

  // const [sel, setSel] = useState("home");
  const [nav, setNav] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();
  console.log(darkMode);
  // setSelect(setSel)
  // setDarkMode(false)
  // const [darkMode, setDarkMode] = useState(false);
  // localStorage.setItem("darky", darkMode);
  // document.documentElement.classList.toggle("dark", darkMode);

  // const navChange=()=>{
  // setNav(!nav);
  // };

  return (
      <div className="px-8 py-4 sticky flex justify-between items-center navbar top-0 left-0 bg-blue_3 z-[1000] bg-white dark:bg-bgdark dark:text-bglight shadow-sm ">
        <a
          className="logo bg-gradient-to-r to-primary via-secondary from-third dark:from-[#aeaebb] dark:via-[#4d4d53] dark:to-[#4682b4] text-transparent bg-clip-text font-semibold"
          href="/"
        >
          Ken<span className="">Edits</span>
        </a>
        <div className="flex justify-center items-center gap-3">
          <div
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            <img
              className="w-[30px] h-[30px] px-2 py-2 dark:bg-[#4e4e4e] bg-[#d4d4d4] rounded-lg"
              src={
                darkMode
                  ? "/images/icons/sun-svgrepo-com.svg"
                  : "/images/icons/moon-stars-svgrepo-com.svg"
              }
              alt=""
            />
          </div>
          <div className="hidden md:flex md:text-sm text-neutral-800 dark:text-neutral-200">
            <ul className="flex justify-between gap-3 ">
              {/* <li>
              <p
                onClick={(e) => {
                  setDarkMode(!darkMode);
                }}
              >
                {darkMode ? "light" : "dark"}
              </p>
            </li> */}
              <li
                // name="gyxsx"
                onClick={navChange1}
                className={`relative ${select === "home" && "select"}`}
              >
                {/* {console.log(select)} */}
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={navChange2}
                // console.log('working');

                className={`relative ${select === "about" && "select"}`}
              >
                <Link href="/">About Me</Link>
              </li>
              <li
                // name="gyxsx"
                onClick={navChange3}
                className={`relative ${select === "portfolio" && "select"}`}
              >
                <Link href="/">Portfolio/Resume</Link>
              </li>

              {/* <li
            // name="gyxsx"
            onClick={navChange5}
          >
            <Link href="/">Resume</Link>
          </li> */}
              <li
                // name="gyxsx"
                onClick={navChange4}
                className={`relative ${select === "contact" && "select"}`}
              >
                <Link href="/">Contact Me</Link>
              </li>
            </ul>
          </div>

          <div className="menu md:hidden flex items-center justify-center gap-4">
            <p
              onClick={() => {
                setNav(!nav);
              }}
              onMouseLeave={() => {
                setNav(false);
              }}
            >
              menu
            </p>
          </div>
        </div>
        <div
          className={`fixed w-[90%] left-[50%] top-14   py-7 px-5 text-lg rounded-3xl z-[999] 
        ${nav ? "translate-x-[-50%] " : "translate-x-[80%]"} 
        ease-in-out transition text-[#bbbbbb] bg-gradient-to-tr  from-[#2b2b2b] to-[#464646]`}
        >
          <ul className="m-auto space-y-3 navigation">
            <li
              // name="gyxsx"
              onClick={navChange1}
              className={`relative ${select === "home" && "select2"}`}
            >
              {/* {console.log(select)} */}
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={navChange2}
              // console.log('working');

              className={`relative ${select === "about" && "select2"}`}
            >
              <Link href="/">About Me</Link>
            </li>
            <li
              // name="gyxsx"
              onClick={navChange3}
              className={`relative ${select === "portfolio" && "select2"}`}
            >
              <Link href="/">Portfolio/Resume</Link>
            </li>

            {/* <li
            // name="gyxsx"
            onClick={navChange5}
          >
            <Link href="/">Resume</Link>
          </li> */}
            <li
              // name="gyxsx"
              onClick={navChange4}
              className={`relative ${select === "contact" && "select2"}`}
            >
              <Link href="/">Contact Me</Link>
            </li>
            <li className="flex gap-2 text-[10px]">
              <div
                className="bg-[#d6d6d6] px-4  rounded-md text-neutral-800"
                onClick={() => {
                  setDarkMode(false);
                }}
              >
                <p>light</p>
              </div>
              <div
                className="bg-[#363636] rounded-md text-[#e2e2e2] px-4 "
                onClick={() => {
                  setDarkMode(true);
                }}
              >
                <p>dark</p>
              </div>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Header;
