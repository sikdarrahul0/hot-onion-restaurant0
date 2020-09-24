import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { foodContext } from '../../App';
import './OrderReview.css';

const Order = () => {
    const[disabled, setDisabled] = useState(true);
    const [foodCart, setFoodCart] = useContext(foodContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabled(false);
    }
    const subTotal = foodCart.reduce((total,item) =>total + item.price * item.quantity, 0)
    const tax = subTotal * 0.15;
    const grandTotal = subTotal + tax;
    return (
        <div className="container order-div">
            <div className="row">
                <div className="col-lg-6">
                    <h3>Edit Delivery Details</h3>
                    <form onSubmit={handleSubmit} style={{borderTop: '2px solid lightgrey', paddingTop: '10px'}}>
                        <input className="info-field" type="text" placeholder="House name"/>
                        <input className="info-field" type="text" placeholder="Flat & floor"/>
                        <input className="info-field" type="text" placeholder="Road no"/>
                        <input className="info-field" type="text" placeholder="Mobile number"/>
                        <input className="info-field" type="text" placeholder="Add additional instructions"/>
                        <input className="save-btn" type="submit" value="Save & contintue"/>
                    </form>
                </div>
                <div className="ml-4 mt-1 col-lg-5 review-box">
                    <p>From <strong>Red Onion restaurant</strong></p>
                    <p>Road no 65</p>
                    <p>Chittagong, Bangladesh</p>
                    <p>Arriving time 20-30min</p>
                    {
                        foodCart.map(food =>(
                            <div className="item-review">
                                <div className="mr-3">
                                <img className="order-img" src={food.img} alt="food-img"/>
                                </div>
                                <div className="ml-2 mr-4">
                                <h5>{food.title}</h5>
                                <h4>${food.price}</h4>
                                <p>Delivery free</p>
                                </div>
                                <div className="ml-3 mt-4">
                                <h4>quantity : {food.quantity}</h4>
                                </div>
                           </div>         
                        ))
                    }
                      <h5><pre>Subtotal:              ${subTotal}</pre></h5>
                      <h5><pre>Tax:                   ${tax.toFixed(2)}</pre></h5>
                      <h5><pre>Grand Total            ${grandTotal.toFixed(2)}</pre></h5>
                      <Link to="/thankyou"><button disabled={disabled} className="place-btn">Place Order</button></Link>
                     
                    
                </div>
              
            </div>
            
        </div>
    );
};

export default Order;