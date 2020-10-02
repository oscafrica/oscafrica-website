import React from "react";
import classNames from "classnames";
import propTypes from "prop-types";

import styles from "./Section.module.css";

/**
 * renders a section in the about-us page following the detailed mock in the style guide
 * the types must be used to render a different kind of section
 *
 * @param {Object} props  properties of this component
 */

const WriteUpContainer = props => {
  return <div className={`${props.style} p-4 md:p-8 lg:px-12 lg:py-20`}>{props.children}</div>;
};

const AboutUsSections = ({ _flex, children, textBoxStyle, imgUrl, imgStyle, ...props }) => {
  const [flex] = React.useState(_flex);
  const textBoxVariation = styles[textBoxStyle];
  const _imgStyle = styles[imgStyle];
  const textContClassName = classNames(styles.text_container, textBoxVariation);

  return (
    <section className={`${flex ? "flex" : ""} flex-wrap w-full relative`}>
      <img src={imgUrl} alt="" className={`${_imgStyle} object-cover`} />
      <WriteUpContainer style={textContClassName}>{children}</WriteUpContainer>
    </section>
  );
};

export const sectionTypes = Object.freeze({
  textbox_1: "textbox_variation_1",
  textbox_2: "textbox_variation_2",
  textbox_3: "textbox_variation_3",
  textbox_4: "textbox_variation_4",
  img_1: "img_variation_1",
  img_2: "img_variation_2",
  img_3: "img_variation_3",
  img_4: "img_variation_4"
});

export default AboutUsSections;

WriteUpContainer.propTypes = {
  children: propTypes.node.isRequired,
  style: propTypes.string.isRequired
};

AboutUsSections.propTypes = {
  _flex: propTypes.bool,
  children: propTypes.node.isRequired,
  textBoxStyle: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired,
  imgStyle: propTypes.string.isRequired
};

AboutUsSections.defaultProps = {
  _flex: false
};
