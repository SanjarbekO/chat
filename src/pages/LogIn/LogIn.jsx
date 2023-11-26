import React from 'react';
import {useLocation} from 'react-router-dom'

const LogIn = () => {

    useLocation();
    return (
        <div className='login'>
                    <label htmlFor="" className="login__form-label">
                        <h3 className="login__form-title">Name*</h3>
                        <input placeholder="Enter your name" type="text" className="login__form-input"/>
                        <button className='login__form-send'>отправить</button>
                    </label>

        </div>
    );
};

export default LogIn;