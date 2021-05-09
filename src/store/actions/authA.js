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
/* 
export const signedUp =(token, userID) =>{
  return{
    type: 'SIGNED_IN',
    token: token,
    userID: userID,
  } 
};
 */
export const authAttempt = (authData, type)=>{
  return{
    type: 'AUTH_ATTEMPT',
    authData: authData,
    LogInOrSignUp: type,
  }
}

export const loggedOut =() =>{
  return{
    type: 'LOGGED_OUT',

  } 
};

export const checkAuthTimeout = (expirationTime) => {
  return {
      expirationTime: expirationTime,
      type: 'AUTH_CHECK_TIMEOUT',
  }
}

export const authCheckState =() => {
  return{
      type: 'AUTH_CHECK_STATE'
  }
}

export const gotError =(error)=> {
  return{
    type: 'GOT_ERROR',
    error: error,
  }
}