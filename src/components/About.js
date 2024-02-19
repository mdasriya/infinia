import React from "react";

import pdf from "../assets/corporates.pdf"; // Import the PDF file


function About() {
  return (
    <>
      <div className="lg:">
        <div
          className="absolute top-0 left-0 w-full h-100 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-vector/door-realistic-composition-with-front-view-modern-room-interior-with-armchair-frames-closed-door-vector-illustration_1284-74376.jpg?w=740&t=st=1708160206~exp=1708160806~hmac=0a5fae92a496cddbcb7d6565b2eb37c81e1190c7813988b837e29735fd07159f")',
          }}
        ></div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <span className="text-3xl font-bold tracking-tight sm:text-4xl border-b-4 text-red-500">
                About
              </span>
              <p className="mt-4 text-gray-500">
                Established in the year 2019 we “Infinia Industries Private
                Limited.” is a Manufacturer of the wide spectrum Particle
                Boards, Chipboard Sheets, Wooden Plywoods etc. We are
                manufacturing these products using premium grade raw material
                that is procured from the authentic vendors of the market. We
                offer these products at reasonable rates and deliver these
                within the promised time-frame. We have hired an adroit team of
                employees, which keeps themselves abreast with advanced
                manufacturing techniques and designs. Further, we also have a
                quality control unit, wherein, we check our entire range on
                defined parameters like design, quality and finish. All units
                and equipped with all the essential tools, machine, and
                technology in order to manufacture a high-quality range of
                products Under the valuable guidance of our mentor, Mr.
                Satyendra, we are growing with a notable rate in the market. He
                has spent long years in the industry to have rich industrial
                experience enabling us to understand the varied requirements of
                our clients.
              </p>
              <span className="text-3xl font-bold tracking-tight text-red-500 mt-3 sm:text-4xl border-b-4">
                Our Teams
              </span>
              <p className="mt-4 text-gray-500">
              Our teams of highly skilled and experienced professionals help us in the attainment of a number of the firm’s targets, predefined. The team, for reasons of better and highly effective management of operations, has been parted into several highly operational units. These units, in the most effective and efficient manner, boosts the firm’s production capacity. The division of these professionals is done as per their area of expertise. Further, regular training sessions are provided, for maximum employee satisfaction.
              </p>
              <span className="text-3xl font-bold tracking-tight text-red-500 sm:text-4xl border-b-4 mt-4">
              Why Us?
              </span>
              <p className="mt-4 text-gray-500">
              Since our development in this industry, we have directed all our hard work in accomplishing a top-notch stature by delivering a supreme variety of products to our customers. Our company is widely acclaimed due to the following reasons:
              </p>
              <ul className="list-disc mt-2 ml-10 cursor-pointer text-gray-400 ">
  <li className="hover:text-black">Client-centric approach</li>
  <li className="hover:text-black">Moral business ethics</li>
  <li className="hover:text-black">International quality standards</li>
  <li className="hover:text-black">Economical prices</li>
</ul>
              <div className="mt-3 flex gap-4">
                <a 
                  href={pdf} // Set the PDF file URL as the href
                  download // Add the download attribute to trigger download
                  target="_blank"
                  className="flex items-center gap-2 subtitle  hover:cursor-pointer text-green-700 hover:text-accent"
                >
                  <img
                    width="50"
                    height="50"
                    className="mr-5"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/267px-PDF_file_icon.svg.png"
                    alt="pdf"
                  />
                  Corporate Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
