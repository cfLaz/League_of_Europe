import React, { useState } from 'react';
import classes from './Auth.module.css';
import { useDispatch, useSelector,} from 'react-redux';
import * as actions from '../../store/actions/indexA';
import axios from 'axios';
import Aux from '../../Auxilary';

const SignUp = (email,password,confirmPassword) => {

  let errorMessage = 'Passwords are not matching';
  if(password !== confirmPassword) {
    console.log(errorMessage);
    return errorMessage; 
  }
  else if(password.length<6){
    errorMessage='Password needs to have at least 6 characters';
    return errorMessage;
  }
  const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  errorMessage = 'Enter proper email format';
  
  if(!pattern.test(email)){
    console.log(errorMessage);
    return errorMessage;
  }

  const authData ={
    email: email,
    password: password,
    returnSecureToken:true
  }
  console.log(authData);
  return authData;
}

const LogIn = (email,pass,) =>{
  const authData ={
    email: email,
    password: pass,
    returnSecureToken:true
  }
  return authData;
  
}

export const LoginWindow = () => {

  const dispatch = useDispatch();
  let authAttempt =(authData,type)=> dispatch(actions.authAttempt(authData, type));
  let error = useSelector(state => state.auth.error);

  let errorPreview=(err)=>{
    if(err){
      return (
        <Aux>
        <p className={classes.ErrorMessage}>{err.message}</p>
        <p className={classes.ErrorMessage}>Credentials incorrect / non-existing account</p>
        </Aux>
      )
    }
  }
  return (
    <div className={classes.Div} 
    >
      <form 
      className={classes.Form} 
      id='login' 
      autoComplete="on"
      onSubmit={(e)=> {
        e.preventDefault();
        let data=LogIn(
          e.target[0].value,
          e.target[1].value);
        console.log(data);  
  
        authAttempt(data,'LOG_IN');        
      }}>
        
        {errorPreview(error)}

        <label > Email </label>
        <input type='text' name='username' autoComplete='username'/>

        <label> Password: </label>
        <input type='password' name='password' autoComplete="current-password"/>

        <button form='login'>Log in</button>
        <button onClick={() => dispatch(actions.cancelAuth()) }>Cancel</button>
      </form>

    </div>
  )
}

export const SignUpWindow = () => {

  let [passwordInput, setPasswordInput] = useState('');
  let [secondPasswordInput, setSecondPasswordInput] = useState('');
  /* let [emailInput, setEmailInput] = useState(''); */
  
  const dispatch = useDispatch();
  let authAttempt =(authData,type)=> dispatch(actions.authAttempt(authData, type));
  
  let gotError=(error)=> dispatch(actions.gotError(error));
  let error = useSelector(state => state.auth.error);

  let passwordFeedback = ()=> {
    if(passwordInput.length<6 && passwordInput.length>0){
      return <p className={classes.ErrorMessage}>Please enter at least 6 characters</p>
    }
  }
  let secondPasswordFeedback = ()=> {
    if(secondPasswordInput.length>0){
      if(passwordInput!==secondPasswordInput){
        return <p className={classes.ErrorMessage}> Passwords are not matching!</p>
      }
    }
  }
 /*  let emailFeedback = ()=> {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if(!pattern.test(emailInput)){
      return <p className={classes.ErrorMessage}>{`Please enter a valid email address format`}</p>
    }
  } */
  let goodToGo = ()=>{
    if(passwordInput.length>=6 && secondPasswordInput.length>=6 &&passwordInput===secondPasswordInput) 
      {return false}
    else return true;
  }
  let errorPreview=(err)=>{
    if(err){
      if(typeof(err)==='string') return(
      <p className={classes.ErrorMessage}>{err}</p>
      )
      else return (
        <Aux >
        <p className={classes.ErrorMessage}>{error.message}</p>
        <p className={classes.ErrorMessage}>{`Please enter proper email address format (word@word`}<b>.com/.org/.net...</b></p>
        </Aux>
      )
    }
  }

  return (
    <div className={classes.Div}>

      <form 
      className={classes.Form} 
      id='signup' 
      autoComplete='off'
      onSubmit={(e)=> {
        e.preventDefault();
        let data = SignUp(
          e.target[0].value,
          e.target[1].value,
          e.target[2].value);
        if(typeof(data)==='string'){
          gotError(data);
        }
        else authAttempt(data,'SIGN_UP');
          
      }}>
        
        {errorPreview(error)}

        <label> Email: {/* {emailFeedback()} */}<span><br/>(needs to be proper format, doesn't have to be real)</span> </label>
        <input type='text' name='username' 
          /* value={emailInput}
          onChange={(e)=> setEmailInput(e.target.value)} */
        />

        <label> Password: {passwordFeedback()}</label>
        <input type='password' name='password' 
          value={passwordInput}
          onChange={(e)=>setPasswordInput(e.target.value)}
        />

        <label> Confirm password: {secondPasswordFeedback()}</label>
        <input type='password' name='password'
           value={secondPasswordInput}
           onChange={(e)=>setSecondPasswordInput(e.target.value)}
        />

        <button 
          form='signup'
          disabled={goodToGo()}
        >
          Sign up
        </button>
        <button onClick={() => dispatch(actions.cancelAuth()) }>Cancel</button>
      </form>

    </div>
  )
}

/* 

    let [authForm,setAuthForm]= useState({
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'email address',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false,
            },  
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6, //required by firebase
                },
                valid: false,
                touched: false,
            }, 
    })

let form =formElementsArray.map(formEl => (
  <Input
    key={formEl.id} // key is added in above for loop
    elementType={formEl.config.elementType} 
    elementConfig={formEl.config.elementConfig}
    value={formEl.config.value}
   changed={(event) => inputChangedHandler(event, formEl.id)} //anonimous function, so we can pass arguments into iCH (event is created by React automatically)
   invalid={!formEl.config.valid}
   shouldValidate={formEl.config.validation} //returns true if it exists
   touched={formEl.config.touched}
   /> 
   )); */