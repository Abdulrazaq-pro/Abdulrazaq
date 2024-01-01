"use client";

import Header from "./Header";
import { useDarkMode } from "../DarkModeContext";
import { useEffect, useState } from "react";
import Image from "next/image";
//https://github.com/Abdulrazaq-pro
const Hero = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  // const [darkMode, setDarkMode] = useState(localStorage.getItem("darky"));

  return (
    <div className="z-[900]  flex flex-col border-b-orange-500">
      <div className=" min-h-screen md:grid md:grid-cols-2 flex flex-col flex-1 items-center justify-center md:px-7 ">
        <div className="mx-auto px-7 space-y-2 min-md:space-y-8 max-w-md ">
          <div
            className={`h-[3px] w-[30%] from-transparent bg-gradient-to-r via-[#838383] to-transparent`}
          ></div>
          <p className="md:text-4xl text-2xl">
            <span className="bg-gradient-to-r text-lg from-primary  to-slate-800 bg-clip-text text-transparent ">
              &lt;Hello/&gt;,I&lsquo;m Kenny
            </span>
            <br /> Nice to meet you
          </p>
          <p className="font-semibold text-neutral-700 dark:text-neutral-400">
            Front End developer
          </p>
          <p className="max-md:text-sm text-neutral-600">
            Front-End Maestro. Seamless user experience crafted with innovative
            code and design finesse. Each project is a masterpiec, where
            Abdulrazaq&lsquo;s expertise redefines digital excellence. <br />
            Welcome to the realm where innovation meets creativity! &#x1F680;
          </p>
          <div className="flex socials gap-2">
            <img
              src={
                darkMode
                  ? "images/icons/Gmail copy.svg"
                  : "/images/icons/Gmail.svg"
              }
              alt=""
            />
            <img
              src={`${
                darkMode
                  ? "/images/icons/Github copy.svg"
                  : "/images/icons/Github.svg"
              }`}
              alt=""
            />
            <img
              src={`${
                darkMode
                  ? "/images/icons/Twitter copy.svg"
                  : "/images/icons/Twitter.svg"
              }`}
              alt=""
            />
            <img
              src={`${
                darkMode
                  ? "/images/icons/WhatsApp copy.svg"
                  : "/images/icons/WhatsApp.svg"
              }`}
              alt=""
            />
            <img
              src={`${
                darkMode
                  ? "/images/icons/Linkedin copy.svg"
                  : "/images/icons/Linkedin.svg"
              }`}
              alt="ttdtc"
            />
          </div>
          <button className="px-4  rounded-3xl border-third border-[1.7px] text-sm mb-52">
            Hire me
          </button>
          <div className="w-8 h-8 py-1 px-1 rounded-full shadow-md shadow-primary animate_bouncer transition ease-in-out translate-y-3  ">
            <Image
              // className="w-2"
              width={30}
              height={40}
              src={`/images/icons/${
                darkMode ? "wave_arrow down copy.svg" : "wave_arrow down.svg"
              }`}
              alt=""
            />
          </div>
        </div>
        <div className="relative ">
          <div className="md:absolute h-full flex items-center max-md:m-auto w-[55%] md:w-[100%] lg:w-[75%]">
            <img className="object-cover " src="/images/1000.png" alt="" />
          </div>
          <p className="text-center text-xs animate-beamer">
            click the arrow to continue
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
