import React from "react";
import { Link } from "react-router-dom";

function LoginScreen() {
  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white shadow-lg rounded-md max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="relative p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <img
            className="absolute object-cover w-full h-full"
            src="/images/skiing.jpg"
            alt="skie"
          />
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <Link to="/">Login to SkiShop Account</Link>
          </div>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Don't have an account?</span>
            <Link to="/" className="underline">
              Get Started!
            </Link>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our{" "}
            <Link to="/" className="underline">
              terms
            </Link>{" "}
            and{" "}
            <Link to="/" className="underline">
              conditions
            </Link>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Account Login
          </h3>
          <form action="/" className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                autoFocus
                className="px-4 py-2 border border-gray-300 rounded transition duration-300 focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
                <Link
                  to="/"
                  className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                className="px-4 py-2 border border-gray-300 rounded transition duration-300 focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded transition duration-300 focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label
                htmlFor="remember"
                className="text-sm font-semibold text-gray-500"
              >
                Remember me
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white bg-blue-500 shadow transition-colors duration-300 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Log in
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">or login with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="flex items-center justify-center px-4 py-2 border border-blue-500 space-x-2 transition-colors duration-300 rounded-md group hover:bg-blue-500 focus:outline-none"
                >
                  <span>
                    <svg
                      viewBox="0 0 533.5 544.3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-blue-500 group-hover:text-white">
                    Google
                  </span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center justify-center px-4 py-2 border border-blue-500 space-x-2 transition-colors duration-300 rounded-md group hover:bg-blue-500 focus:outline-none"
                >
                  <span>
                    <svg
                      className="text-blue-500 group-hover:text-white"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-blue-500 group-hover:text-white">
                    Twitter
                  </span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
