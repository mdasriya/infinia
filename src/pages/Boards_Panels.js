import React from 'react'
import RelatedProducts from './RelatedProducts'
import { Link } from 'react-router-dom';

const features = [
  { name: "Size", description: "8' X 4'" },
  { name: "Laminated", description: "Pre Laminated" },
  { name: "Board Material", description: "Popular" },
  { name: "Surface Finish", description: "Matte" },
  { name: "Color", description: "Brown" },
  { name: "Thickness", description: "9 - 17 mm" },
 
];

const Boards_Panels = () => {
  return (
    <>
 <div className="relative">
   <div
        className="absolute top-0 left-0 w-full h-100 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://img.freepik.com/free-vector/door-realistic-composition-with-front-view-modern-room-interior-with-armchair-frames-closed-door-vector-illustration_1284-74376.jpg?w=740&t=st=1708160206~exp=1708160806~hmac=0a5fae92a496cddbcb7d6565b2eb37c81e1190c7813988b837e29735fd07159f")',
        }}
      ></div>
 <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Pre-Laminated Particle Board
          </h2>
          <p className="mt-4 text-gray-500">
          Being one of the renowned organizations in the industry, we are highly engaged in providinga premium quality range of Pre-Laminated Particle Board.
          </p>

          {/* <p className="mt-4 text-gray-500">
            WPC Door frames (Chaukhat) Size:3x2 ,4x2 , 4x2.5, 5x2.5 Colour :Teak
            wood and Ivory Lenght: 6 ft , 6.5ft , 7ft, 8ft, 10ft and 11 ft
          </p> */}

          <div className="mt-3 flex gap-4">
            <a
              href="https://pdf.indiamart.com/impdf/22072361897/101519832/pre-laminated-particle-board.pdf#ITEM_DOC#"
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
            to="https://www.infiniaindia.in/search.html?ss=Boards+&+Panels"
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
        <div className="grid grid-cols-2  grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/12/OZ/DZ/CD/101519832/pre-laminated-particle-board-500x500.jpeg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/8/GU/FN/NW/101519832/suede-finish-particle-board-500x500.jpeg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/3/294440140/SE/CJ/PB/101519832/bagasse-particle-board-500x500.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/8/JC/JY/FA/101519832/matt-finish-particle-board-500x500.jpeg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
    </div>
    <RelatedProducts />
    </>
  )
}

export default Boards_Panels

