import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './Components/Main/Main';
import MealDetails from './Components/MealDetails/MealDetails';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import OrderReview from './Components/OrderReview/OrderReview';
import Order from './Components/OrderReview/OrderReview';
import NoData from './Components/NoData/NoData';
import ThankYou from './Components/ThankYou/ThankYou';

export const UserContext = createContext();
export const foodContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [foodCart, setFoodCart] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <foodContext.Provider value={[foodCart, setFoodCart]}>
    <Router>
      <Switch>
      <Route exact path="/">
        <Main></Main>
      </Route>
      <Route path="/meal/:id">
        <MealDetails></MealDetails>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/order">
        <Order></Order>
      </Route>
      <Route path="/thankyou">
        <ThankYou></ThankYou>
      </Route>
      <PrivateRoute path="/orderreview">
        <OrderReview></OrderReview>
      </PrivateRoute>
      <Route path="*">
        <NoData></NoData>
      </Route>
      </Switch>
    </Router>
    </foodContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
