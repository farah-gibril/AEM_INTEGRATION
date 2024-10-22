import { React, useEffect, useState } from "react";
import Heading from "../../components/Heading";
import CarouselSection from "../../components/CarouselSection";
// import ProductList from "../../components/ProductList";
// import { getData } from "../../data/repository";
// import useLocalStorage from "../../fragments/customHook/useLocalStorage";
// import SectionHeader from "../../components/SectionHeader";
import Banner from "../../components/Banner";
import { useScrollToTop } from "../../fragments/customHook/useScrollToTop";
const Home = ({ items, handleClick }) => {
  // const [products, setProducts] = useState(items);
  // useEffect(() => {
  //   setProducts(items);
  // }, [items]);
  // const showMostPopular =
  //   products != null ? products.slice(0, 4) : ""; /*show the first 5 products from the list as the most popular products */
  useScrollToTop();
  return (
    <div>
      <Heading
        title="Bringing the future of crypto accounting to you"
        subtitle="Our integrated accounting app lets you track your crypto wallets and reconcile transaction data in seconds."
      />
      <div style={{position:"relative", top:0, width:"100%", zIndex:-1}}>
        <CarouselSection />
      </div>
      
      <Banner
        text="Your virtual crypto accountant Mr Journaler is almost here"
        linkto="https://www.aemalgorithm.io/journaler/mrJournaler"
      />
    </div>
  );
};

export default Home;
