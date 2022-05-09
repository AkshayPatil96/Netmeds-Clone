import React, { useEffect, useState } from "react";
import Carousel from "../Components/Carousel/Carousel";
import MultiItem from "../Components/Carousel/MultiItem";
import HomeCategory from "../Components/HomeCategory";
import ProductView from "../Components/ProductView";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getHomeData } from "../Redux/Category/action";
import AutoMultiItem from "../Components/Carousel/AutoMultiItem";
import { MedicineSub, ExplorePlan } from "../Components/MedicineSub";
import HomeMultiItem from "../Components/Carousel/HomeMultiItem";

const Home = () => {
  const { category } = useParams();
  console.log("category: ", category);
  const { isLoading, isError, homepage } = useSelector(
    (state) => state.products
  );
  console.log("homepage: ", homepage.categoryInFocus);

  // console.log("products: ", data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeData());
  }, []);

  return (
    <>
      {/* Slider */}
      <div
        style={{
          margin: "5% 3%",
        }}
      >
        <Carousel />
      </div>

      {/* Categories */}

      <HomeCategory />

      <div>
        <AutoMultiItem
          data={homepage.trendingToday}
          heading="Trending Today"
          view="View All"
        />
      </div>

      {/* Sub-Category */}

      <HomeMultiItem
        heading="Categories in Focus"
        data={homepage.categoryInFocus}
      />

      <ExplorePlan />

      {/* Multi Product Slider for Top Brands */}

      <HomeMultiItem
        gradBgColor="#ef4281"
        heading="Expolre Beauty"
        view="View All"
        headingColor="#fff"
        data={homepage.exploreBeauty}
      />

      {/* Multi Product Slider for Top Brands */}

      <HomeMultiItem
        heading="Men's Grooming"
        view="View All"
        headingColor="#555"
        data={homepage.men_sGrooming}
      />

      <HomeMultiItem
        gradBgColor="#8b9096"
        heading="Top Brands"
        view="View All"
        headingColor="#fff"
        data={homepage.topInBeauty}
      />

      <MedicineSub />

      {/* Footer */}

      {/* <Footer /> */}
    </>
  );
};

export default Home;
