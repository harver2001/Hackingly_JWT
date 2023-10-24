import React from "react";
import logo from "../../assets/logos/one.png";
import insta from "../../assets/images/insta.png";
import fb from "../../assets/images/fb.png";
import lin from "../../assets/images/lin.png";
import twitter from "../../assets/images/twitter.png";

const FirstSection = () => {
  return (
    <div className="flex flex-col">
      <img className="w-3/4 h-3/6 mt-[-20px]" src={logo} alt="logo" />
      <h1 className="text-white mt-[-40px]">
        "Our mission is to empower the innovators of the future through
        meaningful and immersive learning journeys."
      </h1>
      <div className="flex flex-col">
        <h1 className="mt-16 text-white font-semibold text-2xl ">HACAKTHON</h1>
        <div className="text-white mt-4 cursor-pointer">
          <h2>Organize Hackathon</h2>
          <h2>Community Hackathon</h2>
          <h2>Corporate Hackathon</h2>
          <h2>Hackathon Guide</h2>
        </div>
      </div>
    </div>
  );
};

const SecondSection = () => {
  return (
    <div>
      <h1 className="mt-16 text-white font-semibold text-2xl">COMPANY</h1>
      <div className="text-white mt-4 cursor-pointer">
        <h2>About Us</h2>
        <h2>FAQ</h2>
        <h2>Contact Us</h2>
      </div>

      <h1 className="mt-28 text-white font-semibold text-2xl">Events</h1>
      <div className="text-white mt-4 cursor-pointer">
        <h2>Ideathon</h2>
        <h2>Smart India Hackathon</h2>
        <h2>Summer Lensathon</h2>
      </div>
    </div>
  );
};

const ThirdSection = () => {
  return (
    <div className="flex mt-16 gap-5 ">
      <a href="https://youtube.com">
        <img className="w-5/6 h-1/8" src={fb} alt="social" />
      </a>
      <a href="https://youtube.com">
        <img className="w-5/6 h-1/8" src={twitter} alt="social" />
      </a>
      <a href="https://youtube.com">
        <img className="w-5/6 h-1/8" src={insta} alt="social" />
      </a>
      <a href="https://youtube.com">
        <img className="w-5/6 h-1/8 " src={lin} alt="social" />
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="mt-24 w-full bg-[#2D2D2D] h-fit px-40 pb-10">
      <div className="grid grid-cols-3 gap-x-20">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    </div>
  );
};

export default Footer;
