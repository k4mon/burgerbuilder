import React from "react";
import styleClasses from "./Button.module.css";

const Button = (props) => (
    <button
        className={[styleClasses.Button, styleClasses[props.buttonType]].join(" ")}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default Button;