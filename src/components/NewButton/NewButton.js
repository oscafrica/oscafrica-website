import { Link } from "gatsby";
import React from "react";
import propTypes from "prop-types";
import iconUrl from "./arrow-right.png";

import styles from "./NewButton.module.css";

const NewButton = ({ link, onClick, children }) => {
  const btnStyle = styles["button"];
  const iconStyle = styles["icon"];
  return (
    <Link to={link}>
      <button onClick={onClick} className={btnStyle}>
        {children}
        <i className={iconStyle}>
          <img src={iconUrl} alt="" />
        </i>
      </button>
    </Link>
  );
};

export default NewButton;

NewButton.propTypes = {
  onClick: propTypes.func.isRequired,
  link: propTypes.string
};

NewButton.defaultProps = {
  link: ""
};
