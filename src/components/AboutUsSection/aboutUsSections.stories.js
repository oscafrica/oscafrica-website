import React from "react";
import AboutUsSections, { sectionTypes } from "./AboutUsSections";
import sampleImg from "./osf-sustain.jpg";

export default {
  title: "AboutUsSections",
  component: "AboutUsSections"
};

const NodeSample = () => {
  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Who we are</h2>
      <p className="mb-4">
        Open Source Community Africa (O.S.C.A) is for open source lovers, enthusiasts, advocates and experts within and
        across Africa with the sole aim of increasing the rate of credible contributions by African software developers,
        designers, writers and everyone involved in the sphere of technology to open source projects both locally and
        globally, changing the perception of Africans from just the billion users to the
      </p>
      <p className="uppercase font-bold text-sm">next billion creators</p>
    </div>
  );
};

export const section_1 = () => {
  return (
    <AboutUsSections textBoxStyle={sectionTypes.textbox_1} imgUrl={sampleImg} imgStyle={sectionTypes.img_1}>
      <NodeSample />
    </AboutUsSections>
  );
};

export const section_2 = () => {
  return (
    <AboutUsSections textBoxStyle={sectionTypes.textbox_2} imgUrl={sampleImg} imgStyle={sectionTypes.img_2}>
      <NodeSample />
    </AboutUsSections>
  );
};

export const section_3 = () => {
  return (
    <AboutUsSections textBoxStyle={sectionTypes.textbox_3} imgUrl={sampleImg} imgStyle={sectionTypes.img_3}>
      <NodeSample />
    </AboutUsSections>
  );
};

export const sectionWithDisplayFlex = () => {
  return (
    <AboutUsSections
      _flex={true}
      textBoxStyle={sectionTypes.textbox_4}
      imgUrl={sampleImg}
      imgStyle={sectionTypes.img_4}
    >
      <NodeSample />
    </AboutUsSections>
  );
};
