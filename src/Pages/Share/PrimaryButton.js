import React from "react";
import "./PrimaryButton/css";

const PrimaryButton = ({ Children }) => {
  return <button className="primaryButton">{Children}</button>;
};

export default PrimaryButton;
