import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';



const MealItem = props => {
    return <li key={props.meal.id} className={classes.meal}>
        <div><h3>{props.meal.name}</h3></div>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>${props.meal.price}</div>
        <div><MealItemForm meal={props.meal}></MealItemForm></div>
    </li>
};

export default MealItem;   