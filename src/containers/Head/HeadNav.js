import React from 'react';
import classes from './HeadNav.module.css';
import {LoginWindow, SignUpWindow} from '../Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/indexA';

const HeadNav = () => {

  const dispatch = useDispatch();

  let showSignUp = useSelector(state => state.auth.showSignUp);
  let showLogIn = useSelector(state => state.auth.showLogIn);
  //add button handlers so window can be shown, lazy loaded

  // const loginWindowHandler = () => {
  //    dispatch(show());
  //    return <LoginWindow/>;
  //  }
 
  return (
    <nav className={classes.Nav}>

      <div>something</div>

      <div className={classes.Title}>
        Welcome to League of Europe
      </div>

      <div className={classes.Auth}>
        <button onClick={() => dispatch(actions.showSignUp() )}>
          Sign up  
        </button>
        
        <button  onClick={() => dispatch(actions.showLogIn() )}>
          Log in
        </button>
      </div>

      {showLogIn ? 
        <LoginWindow /> : null}
      
       {showSignUp ? 
        <SignUpWindow /> : null}

    </nav>
  )
}

export default HeadNav;