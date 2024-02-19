import React from "react";

import Hero from "./Hero";
import ImageSlider from "./ImageSlider";
import Features from "./Features";
import NewItems from "./NewItems";
import FeaturesSecond from "./FeaturesSecond";

import Address from "./Address";
import Newsletter from "./Newsletter";
import Testimonial from "./Testimonial";
import Products from "./Products";
import AboutInfinia from "./AboutInfinia";
import BrandCarousel from "./BrandCarousel";


const Home = () => {
  return (
    <div>
      <Hero />
      <ImageSlider />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <AboutInfinia />
      <Products />
      <Testimonial />
      {/* <BrandCarousel /> */}
      <Address />


      <Newsletter />
    </div>
  );
};

export default Home;
