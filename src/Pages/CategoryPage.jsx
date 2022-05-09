import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Redux/Category/action";
import { useParams } from "react-router-dom";
import { NextBtn, PreviousBtn } from "../Components/Carousel/Data";
import styles from "../Components/Carousel/carousel.module.css";
import ShowMultiItems from "../Components/Carousel/ShowMultiItems";
import Slider from "react-slick/lib/slider";
import { CategoryDiv, SliderDiv } from "../Components/Product.styled";
import ProductCard from "../Components/ProductCard";
import Footer from "../Components/Footer";
import Labtest from "./Labtest";
import AllMedicine from "./AllMedicine";
import Carousel from "../Components/Carousel/Carousel";

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 5,
  infinite: false,
  slidesToScroll: 1,
  centerPadding: "170px",
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
  ],
};

const CategoryPage = () => {
  const { category } = useParams();
  const { isLoading, isError, data } = useSelector((state) => state.products);

  console.log("products: ", data.mothersDayOffer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory(category));
  }, [category]);

  return (
    <>
      {category === "lab-test" ? (
        <Labtest />
      ) : category === "medicine" ? (
        <AllMedicine />
      ) : (
        <>
          {/* <h1>Hello!</h1> */}

          {isLoading ? (
            <h1>Loading...</h1>
          ) : isError ? (
            <h1>Something went wrong while fetching data</h1>
          ) : (
            <>
              <div
                style={{
                  margin: "5% 3% 0 3%",
                }}
              >
                <Slider
                  autoplay
                  autoplaySpeed={5000}
                  dots
                  initialSlide={2}
                  infinite
                  prevArrow={<PreviousBtn />}
                  nextArrow={<NextBtn />}
                  dotsClass="slick-dots"
                >
                  {data.carousel &&
                    data.carousel.map((item, index) => (
                      <div key={index}>
                        <img src={item} alt="" style={{ width: "100%" }} />
                      </div>
                    ))}
                </Slider>
              </div>
              <div>
                <div className={styles.carousel}>
                  <div className={styles.headingFlex}>
                    <h1 className={styles.heading}>Popular Categories</h1>
                    {/* <p>View All</p> */}
                  </div>

                  {/* category */}

                  <Slider {...carouselProperties} className={styles.slider}>
                    {data.category &&
                      data.category.map((product, index) => {
                        return <ShowMultiItems key={index} {...product} />;
                      })}
                  </Slider>
                </div>
              </div>

              <div>
                <div className={styles.carousel}>
                  <div className={styles.headingFlex}>
                    <h1 className={styles.heading}>Popular Categories</h1>
                    {/* <p>View All</p> */}
                  </div>

                  {/* category */}

                  <Slider {...carouselProperties} className={styles.slider}>
                    {data.mothersDayOffer &&
                      data.mothersDayOffer.map((product, index) => {
                        return <ProductCard key={index} {...product} />;
                      })}
                  </Slider>
                </div>
              </div>
              
              <div>
                <div className={styles.carousel}>
                  <div className={styles.headingFlex}>
                    <h1 className={styles.heading}>Popular Categories</h1>
                    {/* <p>View All</p> */}
                  </div>

                  {/* category */}

                  <Slider {...carouselProperties} className={styles.slider}>
                    {data.mothersDayOffer &&
                      data.mothersDayOffer.map((product, index) => {
                        return <ProductCard key={index} {...product} />;
                      })}
                  </Slider>
                </div>
              </div>

              {/* All Products */}

              {/* <CategoryDiv>
                <div className="products">
                  {data.products &&
                    data.products.map((product, index) => {
                      return <ProductCard key={index} {...product} />;
                    })}
                </div>
              </CategoryDiv> */}
            </>
          )}
        </>
      )}

      {/* Footer */}

      <Footer />
    </>
  );
};

export default CategoryPage;
