import React from "react";
import right from "./../Assets/blog/Right.svg";
const NewsLetter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <div className="flex justify-center items-center flex-col">
        <h2 className="header_blog">
          Pellentesque suscipit <br /> fringilla libero eu.
        </h2>
        <button className="btn">
          Get a Demo
          <img src={right} alt="" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
