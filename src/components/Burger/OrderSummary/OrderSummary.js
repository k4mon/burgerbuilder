import React from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingredientKey => {
        return <li key={ingredientKey}>
            <span style={{textTransform: "capitalize"}}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
        </li>
    });

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseCanceled}
                    buttonType="Danger">
                CANCEL
            </Button>
            <Button clicked={props.purchaseContinued}
                    buttonType="Success">
                CONTINUE
            </Button>
        </React.Fragment>
    );
};

export default OrderSummary