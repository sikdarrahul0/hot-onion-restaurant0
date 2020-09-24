import React, { useContext, useState } from 'react';
import foodInfo from '../../foodData/foodData';
import MealList from '../MealList/MealList';
import Header from '../Header/Header';
import './Main.css';
import Footer from '../Footer/Footer';
import { foodContext } from '../../App';
import { Link } from 'react-router-dom';

const Main = () => {
    const [foodCart, setFoodCart] = useContext(foodContext);
    const[mealPeriod, setMealPeriod] = useState('lunch');
    const meal = foodInfo.filter(food => food.category === mealPeriod);
    return (
    <>
       <Header></Header>
       <section className="container">
       <div className="menu-select">
           <p className={ mealPeriod === 'breakfast' && 'activeClass'} onClick={()=> setMealPeriod('breakfast')}>Breakfast</p>
           <p className={ mealPeriod === 'lunch' && 'activeClass'} onClick={()=> setMealPeriod('lunch')}>Lunch</p>
           <p className={ mealPeriod === 'dinner' && 'activeClass'} onClick={()=> setMealPeriod('dinner')}>Dinner</p>
       </div>
       <div className="row">
           {
              meal.map(ml => <MealList meal={ml}></MealList>)
           }
       </div>
       <div className="text-center">
           {  

               foodCart.length ? <Link to="/orderreview"><button className="checkout-active-btn">Checkout your food</button></Link> : <button disabled className="checkout-btn">Checkout your food</button>
           }
           
       </div>
       </section>
       <Footer></Footer>
    </>
    );
};

export default Main;