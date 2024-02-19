import React from "react";
import { Link } from "react-router-dom";

const features = [
  { name: "Minimum Order Quantity", description: "1000 Sq ft" },
  { name: "Material", description: "Country of Origin" },
  { name: "Color", description: "grey" },
  { name: "Shape", description: "Rectangular" },
  { name: "Material", description: "Plastic" },
  { name: "Usage/Application", description: "for fly ash brick manufcturer" },
];

const Flyash_Brick_Pallets = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Fly-ash Brick Pallets
          </h2>
          <p className="mt-4 text-gray-500">
            Recycle plastic pallets for brick manufacturer . Waterproof and
            Termiteproof . Many thicknesses are available . Sizes As per
            customers requirement .
          </p>

          <div className="mt-3 flex gap-4">
            <a
              href="https://pdf.indiamart.com/impdf/25686556973/101519832/pallets-for-brick-manufacture.pdf#ITEM_DOC#"
              download
              target="_blank"
              className="flex items-center gap-2 subtitle  hover:cursor-pointer"
            >
              <img
                width="50"
                height="50"
                className="mr-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/267px-PDF_file_icon.svg.png"
                alt="pdf"
              />
              Product Brochure
            </a>
          </div>

          <Link
            to="https://www.infiniaindia.in/search.html?ss=Fly-ash+Brick+Pallets"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-500 mb-2 hover:bg-green-600 text-white font-bold px-10 py-2 rounded">
              Buy Now
            </button>
          </Link>

          <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-1 ssm:grid-cols-1">
          <img
            src="https://5.imimg.com/data5/ANDROID/Default/2023/2/BC/EB/CD/101519832/product-jpeg-500x500.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/4/298082436/YL/XM/MW/101519832/concrete-paver-block-pallet-500x500.jpeg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
         
        </div>
      </div>
    </div>
  );
};

export default Flyash_Brick_Pallets;
