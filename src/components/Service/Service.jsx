import React from "react";
import "./Service.css";
import logo1 from "../../Assets/client/1.svg";
import logo2 from "../../Assets/client/2.svg";
import logo3 from "../../Assets/client/3.svg";
import logo4 from "../../Assets/client/4.svg";
import logo5 from "../../Assets/client/5.svg";
import logo6 from "../../Assets/client/6.svg";
import logo7 from "../../Assets/client/7.svg";
import { serviceData } from "../../nav";
const Service = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto mt-5" id="">
      <div>
        <h2 className="service_header">Our Clients</h2>
        <p className="service_description">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="my-12 flex flex-wrap justify-between items-center ">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
          <img src={logo7} alt="" />
        </div>
      </div>
      <div>
        <h2 className="service_header pt-5">
          Manage your entire community <br /> in a single system
        </h2>
        <p className="service_description">Who is Nextcent suitable for?</p>
      </div>
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md-h-80 rounded-md shadow cursor-pointer hover: translate-y-5 hover:border-b-4 "
          >
            <div className="box">
              <div className="bg-[#E8F5E9] mb-4 h-10 w-10 mx-auto rounded-tl-3xl rouned-br-3xl">
                <img className="-ml-5" src={service.image} alt="" />
              </div>
              <h4 className="service_box_header">{service.title}</h4>
              <p className="service_box_description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
