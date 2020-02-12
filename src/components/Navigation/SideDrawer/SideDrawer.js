import React from 'react';
import styleClasses from "./SideDrawer.module.css"
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
    let attachedClasses = [styleClasses.SideDrawer, styleClasses.Close];

    if (props.open) {
        attachedClasses = [styleClasses.SideDrawer, styleClasses.Open];
    }

    return (
        <React.Fragment>
            <Backdrop clicked={props.closed} show={props.open}/>
            <div className={attachedClasses.join(" ")}>
                <div className={styleClasses.Logo}><Logo/></div>
                <nav>
                    <NavigationItems/>
                </nav>
                <div>TOGGLE BUTTON</div>
            </div>
        </React.Fragment>
    );
};

export default SideDrawer;