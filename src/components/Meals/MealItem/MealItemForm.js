import { useContext, useRef } from 'react';
import CartContext from '../../../store/cart-context';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
const MealItemForm = props => {
    const cartCtx = useContext(CartContext);
    const inputRef = useRef();
    const submitForm = (event) => {
        event.preventDefault();
        const amount = inputRef.current.value;
        const amountNumber = +amount;
        const newItem = {
            id: props.meal.id,
            name: props.meal.name,
            description: props.meal.description,
            price: props.meal.price,
            amount: amountNumber,
        };
        cartCtx.addItem(newItem);
    };
    return <form className={classes.form} onSubmit={submitForm}>
        <Input
            ref={inputRef}
            lable="Quantity"
            input={{
                id: 'quantity-' + props.meal.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
        <button >+Add</button>
    </form>
}

export default MealItemForm;