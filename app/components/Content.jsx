"use client";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
// import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import Form from "./sub_components/Form";
import Jobs from "./sub_components/Jobs";
import Tech_Stacks from "./sub_components/Tech_Stacks";
import Testimonials from "./sub_components/Testimonials";
import { useDarkMode } from "../DarkModeContext";
const Content = () => {
  // const { darkMode,setDarkMode }=useDarkMode();
  // const { darkMode,setDarkMode }=useState(localStorage.getItem('darky'));

  // const Form = () => {
  //   return (
  //     <></>
  //   );
  // };
  return (
    <div>
      <div className="space-y-10">
        {/* <Jobs /> */}
        <Jobs />
        <Form />
        <div className="bg-neutral-100 dark:bg-neutral-600 py-8 ">
          <Tech_Stacks />
        </div>
        <div className="testimonials max-w-vw shadow-lg">
          <Testimonials />
          <div className="h-[30px] mt-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
