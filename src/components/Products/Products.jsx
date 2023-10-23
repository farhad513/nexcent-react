import React from "react";

import product from "../../Assets/product.svg";
// import "./About.css";
import icon1 from "../../Assets/product-icon/1.svg";
import icon2 from "../../Assets/product-icon/2.svg";
import icon3 from "../../Assets/product-icon/3.svg";
import icon4 from "../../Assets/product-icon/4.svg";
import icon5 from "../../Assets/product-icon/5.svg";
import icon6 from "../../Assets/product-icon/6.svg";
import right from "../../Assets/product-icon/Right.svg";
import productImage from "../../Assets/product-image.svg";
const Products = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 pt-8">
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <img src={product} alt="" />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="about_header">
            How to design your site footer like we did
          </h2>
          <p className="about_description">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="btn mt-5 hover:translate-y-4">Learn More</button>
        </div>
      </div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 mt-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3">
            <img src={productImage} alt="" />
          </div>
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Tim Smith
              </h5>
              <p>British Dragon Boat Racing Association</p>
              <div className="mt-5 flex justify-between items-center">
                <div className="flex w-6 h-6 gap-10">
                  <img src={icon1} alt="" />
                  <img src={icon2} alt="" />
                  <img src={icon3} alt="" />
                  <img src={icon4} alt="" />
                  <img src={icon5} alt="" />
                  <img src={icon6} alt="" />
                </div>
                <div className="flex items-center gap-3">
                  <a href="">
                    {" "}
                    <p className="meet">Meet all customers</p>
                  </a>
                  <img className="w-4" src={right} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
