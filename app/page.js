"use client";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { DarkModeProvider } from "./DarkModeContext";
import Form from "./components/sub_components/Form";
import About from "./components/sub_components/About";
import Tech_Stacks from "./components/sub_components/Tech_Stacks";
import Jobs from "./components/sub_components/Jobs";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [select, setSelect] = useState("home");
  console.log(select);
  const navChange1 = () => {
    setSelect("home");
  };
  const navChange2 = () => {
    setSelect("about");
  };
  const navChange3 = () => {
    setSelect("portfolio");
  };
  const navChange4 = () => {
    setSelect("contact");
  };
  // const navChange5 = () => {
  //   setSelect("");
  // };

  console.log(isLoading);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY === 0) {
        e.preventDefault;
        alert("you don reach top o");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    // const fetchData = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    // };
    // fetchData;
  }, []);
  return (
    <main className={`dark:bg-bgdark dark:text-white text-lg`}>
      <DarkModeProvider>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex flex-col ">
            {select === "home" ? (
              <div className="relative overflow-hidden">
                <div className="min-h-screen flex flex-col">
                  <div className=" sticky top-0 z-[1000] ">
                    <Header
                      select={select}
                      navChange1={navChange1}
                      navChange2={navChange2}
                      navChange3={navChange3}
                      navChange4={navChange4}
                      // navChange5={navChange5}
                    />
                  </div>
                    <Hero />
                </div>
                <div className="overflow-auto overflow-x-hidden  max-w-[100vw]">
                  <Content />
                  <Footer />
                </div>
                <div className="justify-end sticky bottom-0 max-w-[100vw] "></div>

                {/* <p>text</p> */}
              </div>
            ) : select === "about" ? (
              <div className="flex flex-col min-h-screen">
                <Header
                  select={select}
                  navChange1={navChange1}
                  navChange2={navChange2}
                  navChange3={navChange3}
                  navChange4={navChange4}
                  // navChange5={navChange5}
                />
                <div className="flex-1 flex justify-center items-center">
                  <About />
                </div>
                <Footer />
              </div>
            ) : select === "portfolio" ? (
              <div className=" flex flex-col  min-h-screen">
                <Header
                  select={select}
                  navChange1={navChange1}
                  navChange2={navChange2}
                  navChange3={navChange3}
                  navChange4={navChange4}
                  // navChange5={navChange5}
                />

                <div className="overscroll-auto flex-1 m-auto flex items-center">
                  <Tech_Stacks />
                </div>

                <div className="justify-end sticky bottom-0 w-[100vw]">
                  <Footer />
                </div>

                {/* <Content /> */}
              </div>
            ) : (
              <div className="flex flex-col min-h-screen">
                <Header
                  select={select}
                  navChange1={navChange1}
                  navChange2={navChange2}
                  navChange3={navChange3}
                  navChange4={navChange4}
                  // navChange5={navChange5}
                />
                <div className="flex-1 flex items-center justify-center">
                  <Form />
                </div>
              </div>
            )}
          </div>
        )}
        {/* <Header/> */}
      </DarkModeProvider>
    </main>
  );
}
