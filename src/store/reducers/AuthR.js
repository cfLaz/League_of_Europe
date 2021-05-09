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
    error:null,
  })
}

const reducer = (state = initialState, action) => {
  switch(action.type){ 

    case 'SHOW_SIGN_UP': return updateObject(state, {
      showSignUp: true,
      showLogIn: false,
    })

    case 'SHOW_LOG_IN': return updateObject(state, {
      showLogIn: true,
      showSignUp: false
    })
    
    case 'CANCEL_AUTH': return updateObject(state, {
      showLogIn: false,
      showSignUp: false,
      error: null,
    })
    case 'LOGGED_IN': return loggedIn(state,action)

    case 'LOGGED_OUT': return updateObject(state, {token: null, userID: null})

    case 'GOT_ERROR': return updateObject(state, {error: action.error})
    /* 
    case 'LOGGING_IN': return LogIn(state,action)

    case 'SIGNING_UP': return SignUp(state,action)
 */
    
    default: return state;
   }
}

export default reducer;