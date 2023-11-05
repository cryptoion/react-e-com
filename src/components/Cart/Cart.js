
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';



const Cart = props => {
    const cartCtx = useContext(CartContext);

    const cartItem = (
        <ul className={classes['cart-items']}> {cartCtx.item.map((item) => {
            return <li>{item.name}</li>
        })}</ul>);
    return (<Modal closeCartModal={props.closeCartModal}>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{cartCtx.totalAmount}</span>

        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.closeCartModal}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>);
}
export default Cart;