import React from "react";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";
import MainSlider from "../../Components/MainSlider/MainSlider";
const Home = () => {
  return (
    <>
      <MainSlider />
      <CategorySlider />
      <FeaturedProducts />
    </>
  );
};

export default Home;
