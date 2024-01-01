"use client";
import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [send, setSend] = useState("Send");
  const [isLoading, setIsLoading] = useState(false);
  const [recipientMail, setRecipientMail] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientMessage, setRecipientMessage] = useState("");

  emailjs.init("A6GMWFdl2S0dvCpO2");

  const emailParams = {
    to_email: recipientMail,
    from_name: "Abdulazaq",
    to_name: recipientName,
  };
  const emailParamsMe = {
    to_email: "abdulrazmail@gmail.com",
    from_name: recipientMail,
    to_name: "Abdulrazaq",
  };
  const handleClick = (e) => {
    e.preventDefault();
    sendEmail;
    sendEmailToMe;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true);
    console.log("setloading" + isLoading);

    emailjs.send("service_af8aclr", "template_01wt9vm", emailParams).then(
      function (response) {
        console.log("Email sent successfully", response);
        setSend("sent");
      },
      function (error) {
        setSend("An error occured");
        console.log("Email failed to send", error);
      }
    );
    emailjs.send("service_af8aclr", "template_01wt9vm", emailParamsMe).then(
      function (response) {
        console.log("Email sent successfully", response);
      },
      function (error) {
        setSend("An error occured");
        console.log("Email failed to send", error);
      }
    );
  };

  return (
    <div className="">
      <div className="w-[80%] m-auto ">
        <p className="primary text-lg to-secondary bg-gradient-to-tr from-primary bg-clip-text text-transparent font-semibold">
          Send me a message !
        </p>
        <p className="text-sm text-neutral-600 mb-4">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
        <form className="space-y-3" action="">
          <div className="rounded-sm">
            <label htmlFor="name">Your name</label>
            <input
              onChange={(e) => {
                setRecipientName(e.target.value);
              }}
              className="text-sm dark:text-neutral-300 dark:bg-bgdark rounded"
              placeholder="write your name"
              type="text"
              id="name"
              value={recipientName}
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              onChange={(e) => {
                setRecipientMail(e.target.value);
              }}
              className=" text-sm dark:text-neutral-300 dark:bg-bgdark rounded "
              placeholder="email?"
              type="email"
              id="email"
              value={recipientMail}
            />
          </div>
          <div>
            <label htmlFor="message">Your Message</label>
            <textarea
              onChange={(e) => {
                setRecipientMessage(e.target.value);
              }}
              className="dark:text-neutral-300 dark:bg-bgdark rounded"
              type="text"
              id="message"
              value={recipientMessage}
            />
          </div>
          <button
            type="submit"
            onClick={sendEmail}
            className="flex gap-1 justify-center items-center py-1 px-3 bg-gradient-to-tr from-secondary to-primary opacity-90 rounded-md text-white"
          >
            <div>{send}</div>
            <div>
              <img
                className="w-[16px]"
                src="/images/icons/Telegram copy.svg"
                alt=""
              />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
