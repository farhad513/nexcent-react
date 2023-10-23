import React from "react";
import Hero from "./Hero/Hero";
import Service from "./Service/Service";
import About from "./About/About";
import Products from "./Products/Products";
import Blog from "./Blog/Blog";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <About />
      <Products />
      <Blog />
      <NewsLetter />
    </div>
  );
};

export default Home;
