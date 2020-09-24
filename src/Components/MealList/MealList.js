import React from 'react';
import { Link } from 'react-router-dom';
import './MealList.css';

const MealList = (props) => {

    const {title, img, price, id} = props.meal;
    return (
        <>
          <div className="col-12 col-md-6 col-lg-4 mb-3 pt-2 meal-box">
          <Link className="meal-Link" to={`/meal/${id}`}> 
          <div className="card card-design">
                <img className="card-img-top" src={img} alt="Card image cap"/>
                <div className="card-body">
                <h4>{title}</h4>
                <p className="card-text">How we dream about our future</p>
                <h3>${price}</h3>
                </div>
          </div>
          </Link> 
          </div>   
        </>
    );
};

export default MealList;