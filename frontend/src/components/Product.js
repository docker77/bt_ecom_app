import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
  let {
    _id,
    name,
    price,
    image,
    description,
    category,
    rating,
    numReviews,
  } = product;

  return (
    <div className="w-full p-6 lg:w-1/3 md:w-1/2 ">
      <Link
        to={`/product/${_id}`}
        className="relative block overflow-hidden rounded shadow-lg h-96"
      >
        <img
          alt="ecommerce"
          className="block object-cover object-center w-full h-full transform hover:scale-125 transition duration-500"
          src={image}
        />
      </Link>
      <div className="mt-4">
        <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
          {category}
        </h3>
        <Link to={`/product/${_id}`}>
          <h2 className="pb-3 text-lg font-medium text-gray-900 title-font">
            {name}
          </h2>
        </Link>
        {/* <p className="py-3 text-sm text-gray-500">{description}</p> */}
        <Rating className="py-2 " rating={rating} reviews={numReviews} />
        <Link to={`/product/${_id}`}>
          <button className="p-3 mt-2 bg-gray-200 rounded-md">
            Buy it for ${price}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Product;
