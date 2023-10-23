import React from "react";
import "./Blog.css";
import { blogData } from "../../nav";
import right from "../../Assets/product-icon/Right.svg";
const Blog = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen mt-10 pt-10">
      <div>
        <h2 className="blog_header">Caring is the new marketing</h2>
        <p className="blog_description mt-2">
          The Nexcent blog is the best place to read about the latest membership
          insights, <br /> trends and more. See who's joining the community,
          read about how our community <br /> are increasing their membership
          income and lot's more.​
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center justify-between mt-8">
        {blogData.map((blog) => (
          <div key={blog.id} className="mx-auto relative cursor-pointer mb-12">
            <img
              src={blog.image}
              alt=""
              className="hover:scale-75 duration-300 transition-all"
            />
            <div className="text-center px-4 py-8 bg-[#F5F7FA] shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-10">
              <h3>{blog.description}</h3>
              <div className="flex items-center justify-center">
                <a href="">
                  {" "}
                  <p className="meet">Read More</p>
                </a>
                <img className="w-8" src={right} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
