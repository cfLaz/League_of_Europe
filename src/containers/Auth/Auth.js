import React from 'react';
import classes from './Auth.module.css';
import { useDispatch,} from 'react-redux';
import * as actions from '../../store/actions/indexA';
import axios from 'axios';

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

const signUp = (email,password,confirmPassword) => {

  if(password !== confirmPassword) return console.log('password does not match'); //handle later

  const authData ={
    email: email,
    password: password,
    returnSecureToken:true
  }

  axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBtN0ZxcOY4NJYrQOqArav8f_naqsS9CFA', authData)
    .then(response => {
      console.log(response);
      //dispatchAction()
    }).catch(error => console.log(error))
}

//maybe Hook issue could be avoided If I put LogIn in LoginWindow, check it later
const LogIn = (email,pass,) =>{
  const authData ={
    email: email,
    password: pass,
    returnSecureToken:true
  }
  return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBtN0ZxcOY4NJYrQOqArav8f_naqsS9CFA', authData)
  /* .then(response => {
    console.log(response);
    return action(response.data.idToken, response.data.localId);
  }).catch(error => console.log(error)) */
}

export const LoginWindow = () => {

  const dispatch = useDispatch();

  return (
    <div className={classes.Div} /* onClick={(e) => {
      e.stopPropagation();
      dispatch(flip()); } } */
    >

      <form 
      className={classes.Form} 
      id='login' 
      onSubmit={(e)=> {
        e.preventDefault();
        LogIn(
          e.target[0].value,
          e.target[1].value)
          .then(response => {
            console.log(response);
            return dispatch(actions.loggedIn(response.data.idToken, response.data.localId));
          }).catch(error => console.log(error))
      }}>
        
        <label > Email: </label>
        <input type='text' name='username' />

        <label> Password: </label>
        <input type='password' name='password'/>

        <button form='login'>Log in</button>
        <button onClick={() => dispatch(actions.cancelAuth()) }>Cancel</button>
      </form>

    </div>
  )
}

export const SignUpWindow = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.Div}>

      <form 
      className={classes.Form} 
      id='signup' 
      onSubmit={(e)=> {
        e.preventDefault();
        signUp(e.target[0].value, e.target[1].value, e.target[2].value)
      }}>
        
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