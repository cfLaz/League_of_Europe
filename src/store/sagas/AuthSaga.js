import {put, delay, call} from 'redux-saga/effects';
import axios from '../../axios';
import * as actions from '../actions/indexA';

export function* logOutSaga(){
  yield call([localStorage, 'removeItem'], "token");// makes is useful for testing, (can mock it and not really execute it)
  yield localStorage.removeItem('expirationDate');
  yield localStorage.removeItem('userID');
  console.log('removed auth info from local storage')
  //yield put(actions.logoutSucceed())
} 
export function* checkAuthTimeoutSaga(action) {

  console.log('expiration time: ', action.expirationTime)
  yield delay(action.expirationTime*1000);
  yield put(actions.loggedOut());
}


export function* auth(action) {

  let url='';
  if(action.LogInOrSignUp === 'LOG_IN'){
    url= 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBtN0ZxcOY4NJYrQOqArav8f_naqsS9CFA'
  }
  else if (action.LogInOrSignUp === 'SIGN_UP'){
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBtN0ZxcOY4NJYrQOqArav8f_naqsS9CFA'
  }

  try{
    let authResponse = yield axios.post(url, action.authData);
    console.log('authResponse: ', authResponse);

    const expirationDate= new Date(new Date().getTime() + authResponse.data.expiresIn *1000 )
        //no need to put yield in front of localStorage since it's a synchronous code
    localStorage.setItem('token', authResponse.data.idToken);
    localStorage.setItem('expirationDate', expirationDate);
        //can check it out in f12 -> application
    localStorage.setItem('userId', authResponse.data.localId)

    yield put(actions.loggedIn(authResponse.data.idToken, authResponse.data.localId));

    yield put(actions.checkAuthTimeout(authResponse.data.expiresIn));


  } catch(error) {
    console.log(error); //error action
    yield put(actions.gotError(error));
  }
  

}
export function* authCheckStateSaga() {
  const token = yield localStorage.getItem('token');
      if (!token) {
          yield put(actions.loggedOut());

      } else {                //converting string to date object
          const expirationDate = yield new Date(localStorage.getItem('expirationDate')); 
          console.log('expiration date: ', expirationDate);
          if (expirationDate <= new Date()){
              yield put(actions.loggedOut());
          } else {
              const userId = yield localStorage.getItem('userId');
              yield put(actions.loggedIn(token, userId));

              yield put(actions.checkAuthTimeout(
                  (expirationDate.getTime() - new Date().getTime()) / 1000 )); //getTime() gives us time in miliseconds 
          }
      }
  }


/**<form 
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
      }}> */