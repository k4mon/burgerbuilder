import React from "react";
import styleClasses from "./BuildControls.module.css"
import BuildControl from "./BuildControl/BuildControl";

const CONTROL_TYPES = [
    {label: "Salad", type: "salad",},
    {label: "Bacon", type: "bacon",},
    {label: "Cheese", type: "cheese",},
    {label: "Meat", type: "meat",},
];

const BuildControls = (props) => (
    <div className={styleClasses.BuildControls}>
        <p>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {
            CONTROL_TYPES.map(
                control => <BuildControl
                    key={control.label}
                    label={control.label}
                    added={() => props.ingredientAdded(control.type)}
                    removed={() => props.ingredientRemoved(control.type)}
                    disabled={props.disabled[control.type]}/>
            )
        }
        <button className={styleClasses.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW
        </button>
    </div>
);

export default BuildControls;