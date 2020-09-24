import React from 'react';
import Typist from 'react-typist';
import './ThankYou.css';

const ThankYou = () => {
    return (
        <div className="thanks-div">
        <Typist>
            <h1>Thank You</h1>
            <Typist.Backspace count={9} delay={200} />
            <h1> Thank You </h1>
        </Typist>
        </div>
    );
};

export default ThankYou; 