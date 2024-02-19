import { Link } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";

const features = [
  { name: "Minimum Order Quantity", description: "500 Piece" },
  { name: "Country of Origin", description: "Made in India" },
  { name: "Position", description: "Exterior" },
  { name: "Product Type", description: "Terracotta" },
  { name: "Material", description: "Terracotta" },
  { name: "Color", description: "RED" },
  { name: "Feature", description: "Durable" },
  { name: "Shape", description: "Square" },
  { name: "Size", description: '8"*8"*3' },
  { name: "Usage/Application", description: "Apartment" },
  { name: "Weight", description: "2.5kg" },
];

function Jails() {
  return (
    <>
      <div>
        <div className="bg-white">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Terracotta Decorative Jali
              </h2>
              <p className="mt-4 text-gray-500">
                Terracotta Decorative jali 1)Lily:8"x8"x3" Wt:2.5kg
                2)Geo:8"x8"x3" Wt:2.5kg 3)Jevel:8"x8"x3" Wt:2.5kg
              </p>

              {/* <p className="mt-4 text-gray-500">
            WPC Door frames (Chaukhat) Size:3x2 ,4x2 , 4x2.5, 5x2.5 Colour :Teak
            wood and Ivory Lenght: 6 ft , 6.5ft , 7ft, 8ft, 10ft and 11 ft
          </p> */}

              <div className="mt-3 flex gap-4">
                <a
                  href="https://pdf.indiamart.com/impdf/2849033794291/101519832/document-3a1000009497.pdf#ITEM_DOC#"
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
                to="https://www.infiniaindia.in/search.html?ss=Jalis"
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
                src="https://5.imimg.com/data5/ANDROID/Default/2022/12/XN/WI/BU/101519832/product-jpeg-500x500.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="https://5.imimg.com/data5/SELLER/PDFImage/2023/5/307959281/TO/ZD/HQ/101519832/wpc-door-frame-1000x1000.png"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2020/8/CM/EE/QL/101519832/wpc-door-frame-500x500.jpg"
                alt="Side of walnut card tray with card groove and recessed card area."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="https://5.imimg.com/data5/SELLER/PDFImage/2023/5/307959277/MS/IX/OR/101519832/wpc-door-frame-1000x1000.png"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
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

export default Jails;
