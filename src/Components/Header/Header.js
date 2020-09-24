import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from './logo2.png';
import './Header.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { Nav, Navbar} from 'react-bootstrap';

const Header = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleClick = ()=>{
        setLoggedInUser({});
    }
    return (
        <>
        <div className="container">
                <Navbar expand="lg">
                <Link className="navbar-brand"><img className="logo-img" src={logo} alt="logo"/></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                       <Link to="/orderreview"><p className="nav-link"><FontAwesomeIcon icon={faShoppingCart}/></p></Link>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/login" onClick={handleClick} className="nav-link sign-up-btn">{loggedInUser.displayName ? `${loggedInUser.displayName} (sign out)` : 'Sign up'}</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </div>
                <div className="row mx-2 search-box">
                    <div className="col-12 align-self-center">
                        <h2>Best food waiting for your belly</h2>
                        <input className="search-field" type="text" placeholder="Search food items"/>
                        <button className="search-btn mt-2">Search</button>
                    </div>
                    <div className="col-12 align-self-center">
                       
                    </div>
                </div>
        </>
    );
};

export default Header;