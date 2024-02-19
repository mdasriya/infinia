import { Link } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";

const features = [
  { name: "Minimum Order Quantity", description: "250 feet" },
  { name: "Color", description: "Ivory" },
  { name: "Material", description: "wood plastic compit" },
  { name: "Style", description: "Rectangular" },
  { name: "Grade Of Material", description: "premium" },
  { name: "Usage/Application", description: "For Construction & Furnitures" },
  { name: "Type", description: "Indoor, Outdoor" },
];

function SingleProducts() {
  return (
  <>
 <div className="">
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
            Doors & Door Frames
          </h2>
          <p className="mt-4 text-gray-500">
            Manufacturer of a wide range of products which include wpc door
            frame, 4" and 2.5" wpc door frames, wpc door frame solid and wpc
            chaukhat door frame.
          </p>

          {/* <p className="mt-4 text-gray-500">
            WPC Door frames (Chaukhat) Size:3x2 ,4x2 , 4x2.5, 5x2.5 Colour :Teak
            wood and Ivory Lenght: 6 ft , 6.5ft , 7ft, 8ft, 10ft and 11 ft
          </p> */}

          <div className="mt-3 flex gap-4">
            <a
              href="https://pdf.indiamart.com/impdf/22443121988/101519832/wpc-door-frame.pdf"
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
            to="https://www.infiniaindia.in/wpc-door-frame.html#wpc-door-frame"
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
            src="http://5.imimg.com/data5/ANDROID/Default/2023/5/310755063/VH/OT/WG/101519832/product-jpeg-1000x1000.jpg"
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

export default SingleProducts;
