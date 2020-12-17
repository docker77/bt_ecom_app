import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";

function Product({ product }) {
  var { _id, name, price, image, description, rating, numReviews } = product;

  return (
    <div className="w-full p-4 lg:w-1/3 md:w-1/2">
      <a className="relative block overflow-hidden rounded shadow-md h-96">
        <img
          alt="ecommerce"
          className="block object-cover object-center w-full h-full"
          src={image}
        />
      </a>
      <div className="mt-4">
        <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
          Electronics
        </h3>
        <h2 className="text-lg font-medium text-gray-900 title-font">{name}</h2>
        <p className="py-3 text-xs text-gray-500">{description}</p>
        <Rating className="py-2 " rating={rating} reviews={numReviews} />
        <button className="p-3 mt-2 bg-gray-200 rounded-md">
          Buy it for ${price}
        </button>
      </div>
    </div>
  );
}

export default Product;
