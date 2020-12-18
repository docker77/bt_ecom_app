import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-700 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <div className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          <Link to="/">
            <i className="text-5xl align-middle fas fa-skiing"></i>
            <span className="ml-3 text-xl align-middle ">SkiShop</span>
          </Link>
        </div>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Shopping
          </Link>
          <Link to="/" className="mr-5 hover:text-gray-900">
            Woman
          </Link>
          <Link to="/" className="mr-5 hover:text-gray-900">
            Man
          </Link>
          <Link to="/" className="mr-5 hover:text-gray-900">
            <i className="pr-2 fas fa-shopping-cart" />
            Cart
          </Link>
        </nav>
        <Link
          to="/login"
          className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300 md:mt-0"
        >
          <i className="pr-2 fas fa-user" />
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
