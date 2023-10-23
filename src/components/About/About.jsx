import React from "react";
import about from "../../Assets/about.svg";
import "./About.css";
import icon1 from "../../Assets/about-icon/1.svg";
import icon2 from "../../Assets/about-icon/2.svg";
import icon3 from "../../Assets/about-icon/3.svg";
import icon4 from "../../Assets/about-icon/4.svg";
const About = () => {
  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 mt-6"
      id="about"
    >
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <img src={about} alt="" />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="about_header">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="about_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="btn mt-5 hover:translate-y-4">Learn More</button>
        </div>
      </div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 mt-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="w-1/3">
            <h2 className="about_header">
              Helping a local <br />
              <span className="text-brandPrimary leading-snug">
                business reinvent itself
              </span>
            </h2>
            <p className="about_description">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div>
            <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-10 lg:gap-28 ">
              <div className="space-y-8 ">
                <div className="flex items-center gap-4">
                  <img src={icon1} alt="" />
                  <div>
                    <h4 className="text-2xl text-neutralDGrey font-semibold">
                      2,245,341
                    </h4>
                    <p>Members</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src={icon2} alt="" />
                  <div>
                    <h4 className="text-2xl text-neutralDGrey font-semibold">
                      828,867
                    </h4>
                    <p>Event Bookings</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <img src={icon3} alt="" />
                  <div>
                    <h4 className="text-2xl text-neutralDGrey font-semibold">
                      46,328
                    </h4>
                    <p>Clubs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src={icon4} alt="" />
                  <div>
                    <h4 className="text-2xl text-neutralDGrey font-semibold">
                      1,926,436
                    </h4>
                    <p>Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
