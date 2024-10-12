import { React, useEffect, useState } from "react";
import Heading from "../../components/Heading";
import CarouselSection from "../../components/CarouselSection";
import ProductList from "../../components/ProductList";
import { getData } from "../../data/repository";
import useLocalStorage from "../../fragments/customHook/useLocalStorage";
import SectionHeader from "../../components/SectionHeader";
import Banner from "../../components/Banner";
import { useScrollToTop } from "../../fragments/customHook/useScrollToTop";
const Home = ({ items, handleClick }) => {
  const [products, setProducts] = useState(items);
  useEffect(() => {
    setProducts(items);
  }, [items]);
  const showMostPopular =
    products != null ? products.slice(0, 4) : ""; /*show the first 5 products from the list as the most popular products */
  useScrollToTop();
  return (
    <div>
      <Heading
        title="We're passionate about offering you the finest selection of organic goods."
        subtitle="Every product on our shelves is carefully curated to ensure that you're getting the best quality, flavor, and nutrition while supporting environmentally-friendly practices."
      />
      <CarouselSection />
      <Banner
        text="Organic product specials & small-scale farming"
        linkto="/special"
      />
      <SectionHeader
        title="Most Popular Products..."
        link="/shop-online"
        subtitle="View all products"
      />
      <ProductList list={showMostPopular} handleClick={handleClick} />
    </div>
  );
};

export default Home;
