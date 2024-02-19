import React from "react";

// import logo
import Logo from "../assets/img/logo.svg";

// import data
import { footer } from "../data";

const Footer = () => {
  return (
    <footer className=" section bg-primary text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14">
          <a className="mb-6 lg:mb-0" href="#">
            {/* <img src={Logo} alt="infinia" /> */}
            <h1 className="title text-4xl">Infinia</h1>
          </a>
          {/* social */}
          <div className="flex gap-x-4">
  {footer.social.map((item, index) => {
    return (
      <div className="w-12 h-12 text-2xl bg-gray-700 rounded-full flex justify-center items-center transition-transform transform hover:-translate-y-1 hover:bg-accent" key={index}>
        <a href={item.href}>{item.icon}</a>
      </div>
    );
  })}
</div>

        </div>
      


         {/* copyright text */}
         <div className="text-center">
          <p className="mb-2">&copy; infinia 2024 - All rights reserved.</p>
          <p>Designed and Developed by © Royals WebTech 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
