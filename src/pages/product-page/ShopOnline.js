import React from "react";
import { useScrollToTop } from "../../fragments/customHook/useScrollToTop";
import { getAllProducts } from "../../data/productData";
import ProductList from "../../components/ProductList";
import { Link } from "react-router-dom";
const ShopOnline = ({ handleClick, items, addSuccess }) => {
  return (
    <div>
      <nav aria-label="breadcrumb" className="ms-5 mt-5">
        <ol className="breadcrumb ms-2">
          <li className="breadcrumb-item ">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">Shop Online</li>
        </ol>
      </nav>
      <div className="text-center mt-5">
        <h2>Shop Online</h2>
        <div className="my-5"></div>
        <ProductList
          list={items}
          handleClick={handleClick}
          addSuccess={addSuccess}
        />
      </div>
    </div>
  );
};

export default ShopOnline;
