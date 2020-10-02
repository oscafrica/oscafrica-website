import React from "react";

import headerImg from "../assets/images/about-us-header.png";

const AboutUsHeader = () => {
  return (
    <section className="h-screen w-full relative left-0">
      <img src={headerImg} alt="" className="w-full h-full object-cover relative top-0 left-0 z-0" />
      <div
        className="w-full h-full absolute top-0 left-0 z-10"
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0.66) 21.24%, rgba(0, 0, 0, 0) 65.68%)",
          transform: "rotate(180deg)"
        }}
      ></div>
      <div className="w-full h-full flex flex-col justify-center text-white pl-4 md:pl-6 lg:pl-20 pt-20 absolute top-0 left-0 z-10">
        <h1 className="capitalize font-ubuntu font-bold text-4xl lg:text-5xl">the next billion creators</h1>
        <p className="font-light lg:text-xl">
          A community of creative minds driving the Open Source movement in Africa.
        </p>
      </div>
    </section>
  );
};

export default AboutUsHeader;
