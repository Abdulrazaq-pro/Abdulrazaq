import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-bgdark">
      <p>pls wait...</p>
      <div className="w-[30%] h-2 relative border-[1px] border-neutral-300 overflow-hidden bg-gray-100 rounded-xl ">
        <div
          className={`w-full animate-barrun2 ease-in-out h-2 bg-primary top-0 absolute`}
        ></div>
      </div>
      <div></div>
    </div>
  );
};

export default Loader;
