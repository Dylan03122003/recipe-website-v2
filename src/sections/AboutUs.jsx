// import React from "react";
import { about } from "../assets/img";
import { Abouts } from "../data/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
export const AboutUs = () => {
  const abouts = Abouts.map((item) => (
    <div
      key={item.id}
      className="max-w-[600px] mx-auto my-4 p-4 bg-gray-100 rounded-lg shadow-md"
    >
      <div>
        <Link to={`/item/${item.id}`}>
          <img className="w-[250px] h-[300px] rounded-[30px]" src={item.img} />
        </Link>
        <div>
          <div className="mt-2">
            <p className="text-center text-[20px]">{item.role}</p>
          </div>
        </div>
      </div>
      <div className="flex float-right gap-3">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  ));
  return (
    <div>
      <header>
        <div>
          <img src={about} />
        </div>
        <div className="text-center">
          <h1 className="text-[20px] sm:text-[30px]  md:text-[40px] text-green-500">
            <i>Group 3 company</i>
          </h1>
          <h1 className="text-[30px] sm:text-[40px]  md:text-[50px] text-black">
            Our Organic Experts
          </h1>
        </div>
      </header>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-4 max-w-screen-lg mx-auto">
          {abouts}
        </div>
      </div>
    </div>
  );
};
