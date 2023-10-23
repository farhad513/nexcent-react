import React from "react";
import "./Hero.css";
import { Carousel } from "flowbite-react";
import banner from "../../Assets/banner.svg";
const Hero = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner} alt="" />
            </div>
            <div>
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className="text-brandPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className="text-base mb-5 text-neutralGrey">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn hover:translate-y-4">Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner} alt="" />
            </div>
            <div>
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className="text-brandPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className="text-base mb-5 text-neutralGrey">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn hover:translate-y-4">Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner} alt="" />
            </div>
            <div>
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className="text-brandPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className="text-base mb-5 text-neutralGrey">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn hover:translate-y-4">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
