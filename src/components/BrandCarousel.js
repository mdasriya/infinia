import React from "react";
import Slider from "react-slick";

// Import CSS files for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust the speed (in milliseconds)
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the autoplay speed (in milliseconds)
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="max-w-full overflow-hidden py-4">
      <h1 className="title text-center"> Our Brands</h1>
      <Slider {...settings} className="py-6">
        <div>
          <img
            src="https://i.postimg.cc/pVnd1676/2.png"
            alt="Brand 1"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://i.postimg.cc/qMV7fGHM/1.png"
            alt="Brand 2"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://i.postimg.cc/CKPKWTSW-/3.png"
            alt="Brand 2"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://i.postimg.cc/cHPLLRKh/4.png"
            alt="Brand 2"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://i.postimg.cc/nr7cjXBJ/5.png"
            alt="Brand 2"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
       
        {/* Add more images for other brands */}
      </Slider>
    </div>
  );
};

export default BrandCarousel;
