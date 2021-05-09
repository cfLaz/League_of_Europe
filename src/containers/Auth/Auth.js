import React from 'react';
import classes from './Auth.module.css';
import { useDispatch, useSelector,} from 'react-redux';
import * as actions from '../../store/actions/indexA';
import axios from 'axios';
import Aux from '../../Auxilary';
/* const auth = (email,password) => {
  const dispatch = useDispatch();

  return dispa
} */

/* const LoginHandler = (e) =>{
  const dispatch = useDispatch();
  e.preventDefault();
  // console.log(e.target[0].value) gives username
  dispatch(actions.logIn(
    e.target[0].value,
    e.target[1].value))
}
 */

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

//maybe Hook issue could be avoided If I put LogIn in LoginWindow, check it later
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
        <p>{err.message}</p>
        <p>Credentials incorrect / non-existing account</p>
        </Aux>
      )
    }
  }
  return (
    <div className={classes.Div} /* onClick={(e) => {
      e.stopPropagation();
      dispatch(flip()); } } */
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

        <label > Email: </label>
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

  const dispatch = useDispatch();
  let authAttempt =(authData,type)=> dispatch(actions.authAttempt(authData, type));
  
  let gotError=(error)=> dispatch(actions.gotError(error));
  let error = useSelector(state => state.auth.error);

  let errorPreview=(err)=>{
    if(err){
      if(typeof(err)==='string') return(
      <p>{err}</p>
      )
      else return (
        <Aux>
        <p>{error.message}</p>
        <p>{`Please enter a valid email address (word@word`}+<b>'.com/.org/.net...'</b></p>
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

        <label > Email: </label>
        <input type='text' name='username' />

        <label> Password: </label>
        <input type='password' name='password'/>
        <label> Confirm password: </label>
        <input type='password' name='password'/>

        <button form='signup'>Sign up</button>
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