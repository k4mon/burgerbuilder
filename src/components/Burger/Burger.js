import React from "react";
import styleClasses from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
    let ingredients = Object.keys(props.ingredients).map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
            return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
        });
    }).reduce((previousValue, currentValue) => {
        return previousValue.concat(currentValue)
    }, []);

    if (ingredients.length === 0) {
        ingredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={styleClasses.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default Burger;