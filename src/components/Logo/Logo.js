import React from 'react';
import burgerLogo from "../../assets/images/burger-logo.png";
import styleClasses from "./Logo.module.css"

const Logo = () => (
    <div className={styleClasses.Logo}>
        <img alt="MyBurger" src={burgerLogo} />
    </div>
);

export default Logo;