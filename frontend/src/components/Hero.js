import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="hero"
      class="text-gray-700 body-font bg-gray-100 bg-cover bg-center"
    >
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="px-5 py-3 title-font sm:text-4xl text-3xl mb-4 font-medium text-white bg-blue-500 bg-opacity-50">
            Catch The Coolest POWDER in Season!
          </h1>
          <p class="mb-8 leading-relaxed w-1/2 text-white">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div class="flex justify-center">
            <Link
              to="/product/2"
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Shop now!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
