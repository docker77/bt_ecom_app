import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-gray-700 bg-gray-100 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap order-first text-center md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
              About Us
            </h2>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
              CATEGORIES
            </h2>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
              Info
            </h2>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
              SUBSCRIBE
            </h2>
            <div className="flex flex-wrap items-end justify-center xl:flex-no-wrap md:flex-no-wrap lg:flex-wrap md:justify-start">
              <div className="relative w-40 mr-2 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4">
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full px-3 py-1 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex flex-shrink-0 px-6 py-2 text-white bg-indigo-500 border-0 rounded lg:mt-2 focus:outline-none hover:bg-indigo-600">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container flex flex-col items-center px-5 py-6 mx-auto sm:flex-row">
          <Link
            to="/"
            className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
          >
            <i className="text-5xl fas fa-skiing"></i>
            <span className="ml-3 text-xl">SkiShop</span>
          </Link>
          <p className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0">
            © 2020 First Uzbek SkiShop —
            <Link
              to="/"
              rel="noopener noreferrer"
              className="ml-1 text-gray-600"
              target="_blank"
            >
              @docker77
            </Link>
          </p>
          <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
            <Link to="/" className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link to="/" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link to="/" className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link to="/" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
