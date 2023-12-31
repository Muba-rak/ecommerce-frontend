import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filteredProducts: products, gridView } = useFilterContext();

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "capitalize" }}>
        There is no product that matches your search...
      </h5>
    );
  }
  if (gridView === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products}>product list</GridView>;
};

export default ProductList;
