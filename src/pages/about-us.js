import React from "react";

import Layout from "../components/layout";
import bss from "../assets/images/build-ship-scale.png";
import mission from "../assets/images/our-mission.png";
import vision from "../assets/images/our-vision.png";
import community from "../assets/images/our-community.png";

import Nav from "../components/nav";
import Footer from "../components/footer";
import AboutUsHeader from "../components/AboutUsHeader";
import AboutUsSections, { sectionTypes } from "../components/AboutUsSection/AboutUsSections";
import NewButton from "../components/NewButton/NewButton";
//import Button, { buttonTypes } from "../components/Button/Button";

const aboutUs = () => {
  return (
    <Layout>
      <div className=" flex flex-col items-center justify-center" style={{ backgroundColor: "#F4F8FB" }}>
        <div className=" container">
          <Nav />
          <AboutUsHeader />
          <AboutUsSections textBoxStyle={sectionTypes.textbox_1} imgUrl={bss} imgStyle={sectionTypes.img_1}>
            <div style={{ color: "#0A2237" }}>
              <h2 className=" font-ubuntu font-bold text-2xl mb-4">Who we are</h2>
              <p className=" text-sm md:text-basemb-4">
                Open Source Community Africa (O.S.C.A) is for open source lovers, enthusiasts, advocates and experts
                within and across Africa with the sole aim of increasing the rate of credible contributions by African
                software developers, designers, writers and everyone involved in the sphere of technology to open source
                projects both locally and globally, changing the perception of Africans from just the billion users to
                the
              </p>
              <p className="uppercase font-bold text-sm">next billion creators</p>
            </div>
          </AboutUsSections>
          <AboutUsSections textBoxStyle={sectionTypes.textbox_2} imgUrl={mission} imgStyle={sectionTypes.img_2}>
            <div style={{ color: "#0A2237" }} className="font-light">
              <h2 className=" font-ubuntu font-bold text-2xl mb-4">Mission</h2>
              <p className="text-sm md:text-base mb-4">
                We are a diverse community of open source lovers, collaborating on different projects to make a
                difference across Africa.
              </p>
              <p className="text-sm md:text-base mb-4">We currently achieve this through the following vehicles;</p>
              <p className="text-sm md:text-base mb-4">
                OSCA Chapters, Open Source Festival and through featured open source projects.
              </p>
              <p className="text-sm md:text-base mb-4">
                Our main goal is to create an atmosphere in which Africans not only use software and hardware but are
                also creators of these technologies.
              </p>
            </div>
          </AboutUsSections>
          <AboutUsSections textBoxStyle={sectionTypes.textbox_3} imgUrl={vision} imgStyle={sectionTypes.img_3}>
            <div style={{ color: "#0A2237" }} className="font-light">
              <h2 className=" font-ubuntu font-bold text-2xl mb-4">Our Vision</h2>
              <p className="text-sm md:text-base mb-4">
                In due time, we hope technological skills would be at the grassroots of Africa.
              </p>
              <p className="text-sm md:text-base mb-4">
                Take African developers from the billion users to the billion creators; We hope to do this with our
                monthly OSCA meetups across different chapters.
              </p>
              <p className="text-sm md:text-base mb-4">
                We hope to work with numerous organizations that promote open source culture to reach their targeted
                audience and contributors. We will be creating the enabling environment that will allow thinkers and
                creators to develop open source technologies that will impact people.
              </p>
            </div>
          </AboutUsSections>
        </div>
        <AboutUsSections
          _flex={true}
          textBoxStyle={sectionTypes.textbox_4}
          imgUrl={community}
          imgStyle={sectionTypes.img_4}
        >
          <div className="font-light">
            <h2 className=" font-ubuntu font-bold text-2xl mb-4">Our Community</h2>
            <p className="text-sm md:text-base mb-4">
              Our community is a safe enabling environment on zulip chat, consisting of diverse people all working
              together to grow a collaborative system.
            </p>
            <p className=" text-sm md:text-base mb-4">
              Currently we have smaller communities of people in a particular city called chapters; OSCA Lagos, OSCA
              Port-Harcourt, OSCA Imo and OSCA Lokoja. Each of this chapters have successfully hosted a physical meetup.
            </p>
            <NewButton onClick={() => {}}>Check out our community</NewButton>
          </div>
        </AboutUsSections>
      </div>
      <Footer />
    </Layout>
  );
};

export default aboutUs;
