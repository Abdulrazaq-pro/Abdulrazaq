import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDarkMode } from "@/app/DarkModeContext";

const datas = [
  {
    name: "Abdulrahman",
    review: "a nice ",
    post: "sjiuisj",
    id: 1,
  },
  {
    name: "uygsyuws",
    review: "ygey",
    post: "sjiuisj",
    id: 2,
  },
  {
    name: "kjheijgbe",
    review: "ygey",
    post: "sjiuisj",
    id: 3,
  },
];

const Testimonials = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseonHover: true,
  };
  const Testimonial = ({ name, review, post, not }) => {
    return (
      <div className="py-5 px-4  space-y-2 w-[90%] h-[90%]  m-auto lg:w-[80%] shadow-lg rounded-lg shadow-[grey]">
        <p className="italic text-sm">{review}</p>
        <div className="text-end ">
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs">-{post}</p>
        </div>
        {!not && (
          <div className="h-[1px] w-[80%] bg-neutral-600 m-auto mt-3"></div>
        )}
      </div>
    );
  };
  return (
    <div className="testimonials relative px-5 z">
      <Slider {...settings}>
        {datas.map((data) => (
          <div key="data.id" className="">
            {/* <p>tdtfyugusidjhnkls;fsdgfh</p> */}
            <Testimonial
              post={data.post}
              name={data.name}
              review={data.review}
            />
          </div>
        ))}
      </Slider>
      {/* <Testimonial
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus labore vero dolorum velit illum incidunt rem commodi nulla magni? Inventore."
        name="kennyhhhgyhh"
        post="manager"
      />
      <Testimonial
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus labore vero dolorum velit illum incidunt rem commodi nulla magni? Inventore."
        name="kenny"
        post="manager"
      />
      <Testimonial
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus labore vero dolorum velit illum incidunt rem commodi nulla magni? Inventore."
        name="kenny"
        post="manager"
        not="false"
      /> */}
    </div>
  );
};

export default Testimonials;
