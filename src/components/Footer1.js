// Footer.js
import React from "react";
import { footer } from "../data";
import Logo from "../assets/img/INFINIA_LOGO.png";
const Footer1 = () => {
  return (
    <footer className="bg-white-800  justify-center items-top grid mt-10 text-black py-8 w-100">
      <div className="flex flex-wrap justify-start gap-12 mx-auto mb-5">
        <div className="mr-50 flex justify-start w-[100px] h-[100px]">
        <img  src={Logo} alt="infinia" />
        </div>
        <div className="flex flex-wrap justify-between gap-14 text-center mr-12 ml-10 ">
          <div className="flex justify-start items-start flex-col text-right ">
            <div
              className="text-lg "
              style={{
                borderBottomWidth: "5px",
                width: "120px",
                textAlign: "start",
                color:"#EF9F42"
              }}
            >
              <a
                href="#"
                className="hover:text-gray-400 text-xl font-medium boder-b-4 "
              >
                Call
              </a>
            </div>
            <div className="mt-6 text-blue-800">1800 309 309</div>
            <br />
            <div className="text-xl font-medium">Connect</div>
            <div className="flex gap-x-4">
              {footer.social.map((item, index) => {
                return (
                  <>
                    <div
                      className="w-12 h-12 mt-2 text-2xl bg-white-700 rounded-full flex justify-center items-center transition-transform transform hover:-translate-y-1 hover:bg-accent"
                      key={index}
                    >
                      <a
                        href={item.href}
                        className="text-start justify-start ali "
                      >
                        {item.icon}
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className=" text-start">
            <h5
              href="#"
              className="hover:text-gray-400 text-xl font-medium"
              style={{
                borderBottomWidth: "5px",
                width: "200px",
                textAlign: "start",
              }}
            >
              Email
            </h5>
            <div className="mt-6 text-blue-800">
              <a href="#">info@infinia.com</a>
            </div>
            <br />
            <div className="text-xl font-medium text-start">
              Download our App
            </div>
          </div>
          <div className="text-start">
            <h5
              href="#"
              className="hover:text-gray-400 text-xl font-medium text-start"
              style={{
                borderBottomWidth: "5px",
                width: "200px",
                textAlign: "start",
              }}
            >
              Quick links
            </h5>

            <div className="mt-6 flex flex-col leading-10 text-start text-lg">
              <a href="#">Metallic ceramic Tiles</a>
              <a href="#">Metallic ceramic Tiles</a>
              <a href="#">Metallic ceramic Tiles</a>
              <a href="#">Metallic ceramic Tiles</a>
              <a href="#">Metallic ceramic Tiles</a>
             
            </div>
          </div>
          <div className="text-start">
            <h2
              href="#"
              className="hover:text-gray-400 text-xl font-medium text-start"
              style={{
                borderBottomWidth: "5px",
                width: "200px",
                textAlign: "start",
              }}
            >
              About Us
            </h2>

            <div className="mt-6 flex flex-col leading-10 text-start text-lg">
              <a href="#">Company Information</a>
              <a href="#">Awards & Certification</a>
             
              <a href="#">Metallic ceramic Tiles</a>
              <a href="#">Metallic ceramic Tiles</a>
              <a href="#">Metallic ceramic Tiles</a>
              <a href="#">Metallic ceramic Tiles</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center mt-10 text-xl font-medium">
        <p className="mb-2">&copy; infinia 2024 - All rights reserved.</p>
        <p>Designed and Developed by © Royals WebTech 2024</p>
      </div>
    </footer>
  );
};

export default Footer1;