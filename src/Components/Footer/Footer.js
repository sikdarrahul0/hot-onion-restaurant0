import React from 'react';
import logo from './logo.png'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer-div">
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                <FontAwesomeIcon className="footer-icon" icon={ faFacebookSquare }/>
                <FontAwesomeIcon className="footer-icon" icon={ faInstagram }/>
                <FontAwesomeIcon className="footer-icon" icon={ faEnvelope }/>
            </div>
            <p>Copyright &copy; Rahul Sikdar 2020</p> 
        </div>
    );
};

export default Footer;