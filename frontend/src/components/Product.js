import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
  let {
    _id,
    name,
    price,
    image,
    category,
    rating,
    numReviews,
    countInStock,
  } = product;

  return (
    <div className="w-full p-6 lg:w-1/4 md:w-1/2 ">
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

        <Rating rating={rating} reviews={numReviews} />
        <div className="py-2">${price}</div>

        <Link to={`/product/${_id}`}>
          <button
            className="p-3 mt-2 ml-auto bg-gray-200 rounded-md disabled:opacity-30"
            disabled={countInStock === 0}
          >
            {countInStock !== 0 ? "Buy it now" : "Out of stock"}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Product;
