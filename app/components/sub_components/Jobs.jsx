import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { useDarkMode } from "@/app/DarkModeContext";

const Jobs = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const Job = ({ name, text, color_num }) => {
    return (
      <div>
        <div
          className={`  flex flex-col  rounded-lg  group overflow-hidden hover:opacity-80 relative shadow-lg`}
        >
          <div
            className={`font-semibold px-3 py-6 text-center  ${
              color_num === 1 && "text-[#3c4acc] "
            } ${color_num === 2 && "text-[#2ea85d] "} ${
              color_num === 3 && "text-[#191958] "
            }
          `}
          >
            {name}
          </div>
          <div className=" w-full group-hover:invisible px-2 bg-gray-100 transition ease-in-out py-2 flex-1 flex items-center group-hover:blur-sm text-neutral-600 dark:text-neutral-200 text-[14px] dark:bg-[#333333]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quia vero ex aliquam quasi nulla?
          </div>
          <div className="absolute top-1/2 right-1/2 translate-x-[50%] group group-hover:flex hidden ">
            <img
              className="mr-1 w-5"
              src={
                darkMode
                  ? "/images/icons/link copy.svg"
                  : "/images/icons/link.svg"
              }
              alt=""
            />
            <img
              className="w-5 ml-1"
              src={
                darkMode
                  ? "/images/icons/arrow right up copy.svg"
                  : "/images/icons/arrow right up.svg"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid  md:grid-cols-3 gap-4 max-md:w-[90%] max-md:m-auto">
      <Job name="Fintekk" color_num={1} />
      <Job name="Ice-Vista" color_num={2} />
      <Job name="Fintekk" color_num={3} />
    </div>
  );
};

export default Jobs;
