const Tech_Stacks = () => {
    const Tech_Stack = ({ img, name, progress }) => {
      return (
        <div className="py-8 px-3 rounded-md shadow-md bg-white dark:bg-neutral-800 space-y-2 group">
          <div className="flex items-center gap-1">
            <img className="w-10 max-md:w-6" src={img} alt="" />
            <p className="text-xs text-neutral-800 dark:text-neutral-100">
              {name}
            </p>
          </div>
          <div className={`text-xs text-neutral-600 dark:text-neutral-300`}>
            A language for writing markups
          </div>
          <div className="w-[50%] h-2 relative border-[1px] border-neutral-300 dark:border-neutral-700 overflow-hidden bg-gray-100 dark:bg-neutral-800 rounded-xl ">
            <div
              className={` group-hover:animate-barrun  ease-in-out h-2 bg-primary top-0 absolute`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      );
    };
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-4 ">
        <Tech_Stack
          img="/images/tech/api-svgrepo-com.svg"
          name="Apis"
          progress="60"
        />
        <Tech_Stack
          img="/images/tech/bootstrap-4-logo-svgrepo-com.svg"
          name="Bootstarp"
          progress="70"
        />
        <Tech_Stack
          img="/images/tech/css-svgrepo-com.svg"
          name="Css"
          progress="95"
        />
        <Tech_Stack
          img="/images/tech/firebase-svgrepo-com.svg"
          name="Firebase"
          // progress="8px"
          progress="60"
        />
        <Tech_Stack
          img="/images/tech/html-5-svgrepo-com.svg"
          name="Html"
          progress="90"
        />
        <Tech_Stack
          img="/images/tech/javascript-svgrepo-com.svg"
          name="Javascript"
          progress="70"
        />
        <Tech_Stack
          img="/images/tech/nextjs-svgrepo-com.svg"
          name="nextjs"
          progress="70"
        />
        <Tech_Stack
          img="/images/tech/react-javascript-js-framework-facebook-svgrepo-com.svg"
          name="Reactjs"
          progress="70"
        />
        <Tech_Stack
          img="/images/tech./sass-svgrepo-com.svg"
          name="Sass/Scss"
          progress="90"
        />
        <Tech_Stack
          img="/images/tech/tailwind-svgrepo-com.svg"
          name="tailwind"
          progress="80"
        />
      </div>
    );
  };

  export default Tech_Stacks