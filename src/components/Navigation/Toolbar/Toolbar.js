import React from "react";
import styleClasses from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => (
    <header className={styleClasses.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={styleClasses.Logo}><Logo/></div>
        <nav className={styleClasses.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;