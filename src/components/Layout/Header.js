import { Fragment } from "react";
import mealsImg from '../../assets/meal.jpg';
import classes from './Header.module.css';
import HearderCartButton from "./HeaderCartButton";
const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React meal</h1>
            <HearderCartButton openCartModal={props.openCartModal}></HearderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt="meal project" />
        </div>
    </Fragment>
}

export default Header;