import React from "react";
import "./Button.scss";

const Button = (props) => {
  return <button type={props.type}>{props.text}</button>;
};

export default Button;
