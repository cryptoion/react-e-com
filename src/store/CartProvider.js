import { useReducer } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {

    const defaultCartState = {
        item: [],
        totalAmount: 0
    };

    const cartReducer = (state, action) => {
        if (action.type === 'add') {

            const updateItem = state.item.concat(action.item);
            const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            return {
                item: updateItem,
                totalAmount: updateTotalAmount
            }
        }
        if(action.type==='remove')
        {

        }
        return defaultCartState;
    };
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'add', item: item });
    };
    const removeItemToCartHandler = (id) => { 
        dispatchCartAction({ type: 'remove', id: id });
    };


    const cartContext = {
        item: cartState.item,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;