import React, {Component} from "react";
import styleClasses from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: true,
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerToggleHandler = () => {
        this.setState(previousState => {
            return {showSideDrawer: !previousState.showSideDrawer}
        });
    };

    render() {
        return (
            <React.Fragment>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
                <main className={styleClasses.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;