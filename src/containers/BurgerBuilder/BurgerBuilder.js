import React, {Component} from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
    };

    updatePurchaseState = (ingredients) => {
        const sum = Object.values(ingredients).reduce((previousValue, currentValue) => {
            return previousValue += currentValue;
        }, 0);

        this.setState({purchasable: sum > 0})
    };

    addIngredientHandler = (type) => {
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = this.state.ingredients[type] + 1;

        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = oldCount - 1;

        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    };

    purchaseHandler = () => {
        this.setState({purchasing: true})
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    };

    purchaseContinueHandler = () => {
        alert("You continue!");
    };

    render () {
        const disabledInfo = {
            ...this.state.ingredients,
        };

        for (let ingredientKey in disabledInfo){
            disabledInfo[ingredientKey] = disabledInfo[ingredientKey] <= 0;
        }

        return (
            <React.Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary purchaseContinued={this.purchaseContinueHandler}
                                  purchaseCanceled={this.purchaseCancelHandler}
                                  ingredients={this.state.ingredients}
                                  totalPrice={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}/>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;