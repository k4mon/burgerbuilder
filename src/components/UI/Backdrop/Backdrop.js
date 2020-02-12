import React from "react";
import styleClasses from "./Backdrop.module.css"

const Backdrop = (props) => (
    props.show ? <div className={styleClasses.Backdrop} onClick={props.clicked}/> : null
);

export default Backdrop;