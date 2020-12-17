import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="text-gray-700 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link to="/">
            <i class="fas fa-skiing text-5xl align-middle"></i>
            <span class="ml-3 text-xl align-middle ">SkiShop</span>
          </Link>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link class="mr-5 hover:text-gray-900">Shopping</Link>
          <Link class="mr-5 hover:text-gray-900">Woman</Link>
          <Link class="mr-5 hover:text-gray-900">Man</Link>
          <Link class="mr-5 hover:text-gray-900">
            <i className="pr-2 fas fa-shopping-cart" />
            Cart
          </Link>
        </nav>
        <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
          <i className="pr-2 fas fa-user" />
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
