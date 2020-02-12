import React from 'react';
import styleClasses from "./DrawerToggle.module.css";

const DrawerToggle = (props) => (
    <div className={styleClasses.DrawerToggle} onClick={props.clicked}>
        <div/>
        <div/>
        <div/>
    </div>
);

export default DrawerToggle;