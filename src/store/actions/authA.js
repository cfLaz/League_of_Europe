export const showSignUp =() =>{
  return{type: 'SHOW_SIGN_UP'} 
};

export const showLogIn =() =>{
  return{type: 'SHOW_LOG_IN'} 
};

export const cancelAuth =() =>{
  return{type: 'CANCEL_AUTH'} 
};

/* export const logIn = (email, password) => {
  return{
    type: 'LOGGING_IN',
    userEmail: email,
    userPassword: password,
  }
}

export const signUp = (email, password) => {
  return{
    type: 'SIGNING_UP',
    userEmail: email,
    userPassword: password,
  }
}
 */

export const loggedIn =(token, userID) =>{
  return{
    type: 'LOGGED_IN',
    token: token,
    userID: userID,
  } 
};

export const signedUp =(token, userID) =>{
  return{
    type: 'SIGNED_IN',
    token: token,
    userID: userID,
  } 
};

