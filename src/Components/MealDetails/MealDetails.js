import React, { useContext, useState } from 'react';
import './MealDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom';
import foodInfo from '../../foodData/foodData';
import { foodContext } from '../../App';

const MealDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [foodCart, setFoodCart] = useContext(foodContext);
    const addCart = (id, quantity) =>{
        const newFood = foodInfo.find(food => food.id == id);
        newFood.quantity = quantity;
        foodCart.push(newFood);
    }
    const {id} = useParams();
    const meal = foodInfo.find(food => food.id == id)
    return (
    <div className="meal-details">
        <div className="row">
            <div className="col-lg-6 order-lg-1 order-2">
            <h2>{meal.title}</h2>
            <p>Food is what people and animals eat to survive. Food usually comes from animals and plants. It is eaten by living things to provide energy and nutrition. Food contains the nutrition that people and animals need to be healthy. The consumption of food is normally enjoyable to humans. It contains protein, fat, carbohydrates, vitamins, water and minerals. Liquids used for energy and nutrition are often called "drinks"</p>
            <div className="unit-selection">
            <h2>${meal.price}</h2>
            <div className="input-div ">
            <span className="mt-2 ml-2 mr-2 align-middle"> <FontAwesomeIcon onClick={()=> setQuantity(quantity - 1)} icon={faMinus}/></span>
            <input type="text" value={quantity}/>
            <span className="mt-2 align-middle ml-2 mr-5"> <FontAwesomeIcon onClick={()=> setQuantity(quantity + 1)} icon={faPlus}/></span>
            </div>
            </div>
            <Link to="/orderreview"><button onClick={()=>addCart(id, quantity)} className="add-cart-btn"><FontAwesomeIcon icon={faShoppingCart}/> Add</button></Link> 
            </div>
            <div className="col-lg-6 order-lg-2 order-1 mb-3">
                <img className="img-fluid " src={meal.img} alt=""/>
            </div>
        </div>
    </div>
    );
};

export default MealDetails;