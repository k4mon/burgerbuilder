import React, {Component} from "react";
import styleClasses from "./BurgerIngredient.module.css"
import PropTypes from "prop-types";

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        switch (this.props.type) {
            case ("bread-bottom"):
                ingredient = <div className={styleClasses.BreadBottom}/>;
                break;
            case ("bread-top"):
                ingredient = (
                    <div className={styleClasses.BreadTop}>
                        <div className={styleClasses.Seeds1}/>
                        <div className={styleClasses.Seeds2}/>
                    </div>
                );
                break;
            case ("meat"):
                ingredient = <div className={styleClasses.Meat}/>;
                break;
            case ("cheese"):
                ingredient = <div className={styleClasses.Cheese}/>;
                break;
            case ("salad"):
                ingredient = <div className={styleClasses.Salad}/>;
                break;
            case ("bacon"):
                ingredient = <div className={styleClasses.Bacon}/>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
};

export default BurgerIngredient;