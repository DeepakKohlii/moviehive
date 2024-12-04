import React from "react";
import Layout from "../layouts/Layout";
import HorizontalScrollText from "../components/HorizonatlScroll";
import HeroImageScroll from "../components/HeroImageScroll";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Text with Buttons */}
        <div className="flex flex-col px-4">
          <p className="text-lg text-gray-700 font-extrabold leading-[28px] font-manrope text-center md:text-left">
            Discover movies based on what real people love! <br />
            No algorithms
          </p>
          <p className="text-6xl lg:text-9xl md:text-8xl font-bold font-manrope bg-[url('https://res.cloudinary.com/dqpjkmzn7/image/upload/v1733336146/apiqruicpdc0cms5byw3.webp')] bg-clip-text text-transparent leading-tight lg:leading-[134px] text-center md:text-left">
            MOVIE CHANGE <br />
            THE WORLD
          </p>

          <div className="flex flex-wrap justify-center md:justify-start my-8">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-4 my-4">
              Get Started
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-4 my-4">
              Get Started
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-4 my-4">
              Get Started
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-4 my-4">
              Get Started
            </button>
            
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex-wrap md:w-1/2 px-4 mb-8 lg:mb-10 md:mb-20">
          <HeroImageScroll />
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="mt-8 px-4">
        <HorizontalScrollText />
      </div>
    </Layout>
  );
};

export default HomePage;
