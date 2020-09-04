import React from "react";
import CheckBox from "./CheckBox";

export default {
  title: "CheckBox",
  component: "CheckBox"
};

export const defaultCheckBox = () => <CheckBox />;

export const CheckBoxChecked = () => <CheckBox checked></CheckBox>;

export const disabledCheckBox = () => <CheckBox disabled style={{ backgroundColor: "#F0F0F0" }}></CheckBox>;
