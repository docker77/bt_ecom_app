import React from "react";
import Product from "../components/Product";
import products from "../products";

function LatestProducts() {
  return (
    <section className="container mx-auto text-gray-700 body-font">
      <h1 className="py-20 text-4xl font-bold text-center text-gray-600">
        Latest Products
      </h1>
      <div className="flex px-5 pb-24 ">
        <div className="flex flex-wrap -m-4 ">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestProducts;
