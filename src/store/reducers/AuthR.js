import {updateObject} from '../../shared/utility';
//import axios from '../../axios';

const initialState ={
  token: null,
  userID:null,
  error: null,
  
  //loading: false,
  showSignUp: false,
  showLogIn: false,
};

const loggedIn = (state,action)=> {
  return updateObject(state, {
    token: action.token,
    userID: action.userID,
    showSignUp: false,
    showLogIn: false,
  })
}
/* const LogIn = (state, action) => {
  console.log('LogIn test in reducer')
  return state;
} */

// const SignUp = (state, action) => {

//   const authData={
//     email: action.email,
//     password: action.password,
//     returnSecureToken:true,
//   }
//   /* axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyBtN0ZxcOY4NJYrQOqArav8f_naqsS9CFA', authData)
//     .then(response => {
//       console.log(response);
//       // can I put action for success here? Dispatching an action within a reducer is an anti-pattern.
//       }).catch(error =>{
//         console.log(error)
//       }) */

//   return state;
// }

const reducer = (state = initialState, action) => {
  switch(action.type){ 

    case 'SHOW_SIGN_UP': return updateObject(state, {showSignUp: true})

    case 'SHOW_LOG_IN': return updateObject(state, {showLogIn: true})
    
    case 'CANCEL_AUTH': return updateObject(state, {
      showLogIn: false,
      showSignUp: false,
    })
    case 'LOGGED_IN' || 'SIGNED_IN': return loggedIn(state,action)

    case 'LOGGED_OUT': return updateObject(state, {token: null, userID: null})

    /* 
    case 'LOGGING_IN': return LogIn(state,action)

    case 'SIGNING_UP': return SignUp(state,action)
 */
    
    default: return state;
   }
}

export default reducer;