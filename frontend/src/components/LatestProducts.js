import React from "react";
import Product from "../components/Product";
import products from "../products";

function LatestProducts() {
  return (
    <section className="bg-gray-50">
      <div className="bg-gray-100 mb-7">
        <h1 className="container py-10 mx-auto mb-5 text-3xl font-bold text-left text-gray-500 px-7 ">
          Latest Products
        </h1>
      </div>
      <div className="container mx-auto text-gray-700 body-font">
        <div className="flex px-5 pb-24 ">
          <div className="flex flex-wrap -m-4 ">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestProducts;
