import { Link } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";

const features = [
  { name: "Minimum Order Quantity", description: "1000 feet" },
  { name: "Color", description: "Red" },
  { name: "Eco Friendly", description: "Yes" },
  { name: "Resistance Durability", description: "Heat Resistant" },
  { name: "Shape", description: "Rectangular" },
  { name: "Usage/Application", description: "9 in x 4 in x 3 in" },
  { name: "Type", description: "Indoor, Outdoor" },
];

function Bricks() {
  return (
    <>
      <div className="relative">
        <div
          className="absolute top-0 left-0 w-full h-100 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-vector/door-realistic-composition-with-front-view-modern-room-interior-with-armchair-frames-closed-door-vector-illustration_1284-74376.jpg?w=740&t=st=1708160206~exp=1708160806~hmac=0a5fae92a496cddbcb7d6565b2eb37c81e1190c7813988b837e29735fd07159f")',
          }}
        ></div>
        <div className="bg-white">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Hollow Clay Bricks
              </h2>
              <p className="mt-4 text-gray-500">
                Approx. 14.5 / Piece
                </p>
              <p className="mt-4 text-gray-500">
                terracotta hollow clay bricks Dimensions:9"*4"*3" Weight:2.2kg
                Hollow bricks are durable and have high compressive strength.
                These bricks can be used to build both load-bearing as well as
                non-load-bearing walls
              </p>

              {/* <p className="mt-4 text-gray-500">
            WPC Door frames (Chaukhat) Size:3x2 ,4x2 , 4x2.5, 5x2.5 Colour :Teak
            wood and Ivory Lenght: 6 ft , 6.5ft , 7ft, 8ft, 10ft and 11 ft
          </p> */}

              <div className="mt-3 flex gap-4">
                <a
                  href="https://pdf.indiamart.com/impdf/25889646562/101519832/hollow-clay-bricks.pdf#ITEM_DOC#"
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
                to="https://www.infiniaindia.in/search.html?ss=Construction+Blocks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-500 mb-2 hover:bg-green-600 text-white font-bold px-10 py-2 rounded">
                  Buy Now
                </button>
              </Link>

              <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="border-t border-gray-200 pt-4"
                  >
                    <dt className="font-medium text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-2  grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2022/12/NN/LX/UL/101519832/facing-clay-brick-250x250.jpeg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2023/7/322498121/VX/MU/PX/101519832/hollow-clay-bricks-250x250.png"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="rounded-lg bg-gray-100"
              />
             
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
    </>
  );
}

export default Bricks;
