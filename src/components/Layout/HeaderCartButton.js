import { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
const HearderCartButton = props => {

    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.item.reduce((previousValue, itemObj) => {
        return previousValue + itemObj.amount;
    }, 0);
    return <Fragment>
        <button className={classes.button} onClick={props.openCartModal}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>{totalAmount}</span>
        </button>
    </Fragment>
}

export default HearderCartButton;