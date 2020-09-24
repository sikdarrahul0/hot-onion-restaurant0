import React, { useContext, useState } from 'react';
import logo from './logo6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons'
import './Login.css'
import { googleSignInPopup, initializeFirebase, fbSignInPopup, createUserWithEmailAndPassword, signInWithEmailandPassword } from './loginManage';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

initializeFirebase();

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [newUser, setNewUser] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        message: ''
    })
  
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(newUser){
            if(user.email && user.password === user.confirmPassword){
                createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res =>{
                    res.message ?   handleResponse(res, false) :   handleResponse(res, true);
                })
            }
        }
        if(!newUser && user.email && user.password){
            signInWithEmailandPassword(user.email, user.password)
            .then(res =>{
               res.message ?   handleResponse(res, false) :   handleResponse(res, true);
            })
        }
    }
    const googleSignIn = ()=> {
        googleSignInPopup()
        .then(res =>{
          handleResponse(res, true);
        })
    }
    const fbSignIn = ()=> {
        fbSignInPopup()
        .then(res =>{
            handleResponse(res, true);
        })
    }

    const handleBlur = (e) => {
        let isValid = true;
        if(e.target.name === 'email'){
            isValid = /\S+@\S+\.\S+/.test(e.target.value);
            if(isValid){
                setError('');
            }
            else{
                setError('Please fill up email field correctly.');
            }
        }
        if(e.target.name === 'password'){
            const isPassValid = e.target.value.length > 5;
            const passHasNumber = /\d{1}/.test(e.target.value);
            isValid = isPassValid && passHasNumber;
            if(isValid){
                setError('');
            }
            else{
                setError('Password strength poor. Please fill up with minimum 5 alphabates with minimun one number');
            }
        }
        if(e.target.name === 'confirmPassword'){
           if( user.password === e.target.value ){
               setError('')
           }
           else{
               setError('Password & confirm password not matched');
           }
        }
        if(true){
            const addUser = {...user};
            addUser[e.target.name] = e.target.value;
            setUser(addUser); 
        }
    }
    const handleResponse = (res, redirect) => {
        user.message = res.message;
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
    }
    return (
        <div className="login-form">
            <div>
                <img className="logo-design" src={logo} alt="logo"/>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    {
                        newUser &&   <input className="input-field" type="text" name="name" onBlur={handleBlur} placeholder="Name" required/>
                    }
                    <br/>
                    <input className="input-field" type="Email" name="email" onBlur={handleBlur} placeholder="Email" required/><br/>
                    <input className="input-field" type="password" name="password" onBlur={handleBlur} placeholder="Password" required/><br/>
                    {
                        newUser &&<input className="input-field" type="password" name="confirmPassword" onBlur={handleBlur} placeholder="Confirm password" required/>
                    }
                    <br/>
                    <input className="submit-btn" type="submit" value={newUser ? 'Sign up' : 'Login'}/>
                </form>
               <p>{error}</p>
                <p>{user.message}</p>
              <h5 onClick={()=> setNewUser(!newUser)}>{newUser ? 'Already have an account?' : 'Create a new account'}</h5>
            </div>
            <div>
                <button onClick={fbSignIn} className="extra-login-btn">
                <FontAwesomeIcon icon={ faFacebookSquare }/> Sign in with Facebook
                </button><br/>
                <button onClick={googleSignIn} className="extra-login-btn">
                <FontAwesomeIcon icon={ faGoogle}/> Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;