import React from 'react';
import classes from './HeadNav.module.css';
import {LoginWindow, SignUpWindow} from '../Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/indexA';
import Aux from '../../Auxilary';

const HeadNav = () => {

  const dispatch = useDispatch();

  let showSignUp = useSelector(state => state.auth.showSignUp);
  let showLogIn = useSelector(state => state.auth.showLogIn);
  let token = useSelector(state => state.auth.token);
  //add button handlers so window can be shown, lazy loaded
  let menu = useSelector(state=> state.newLeague.showMenu);

  let showMenu = ()=> dispatch(actions.showMenu());

 const Auth = () => {
  if(token){
    return(
      <div className={classes.Auth}>   
      Welcome 
      <button onClick={() => dispatch(actions.loggedOut())}>
          Log out
      </button>
      </div>

    )
  }
  else {
    return (
      <Aux>
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

      </Aux>
    )
  }
 }
   
  return (
    <nav className={classes.Nav}>

      <button 
        className={classes.ShowMenu}
        onClick={()=> showMenu()}  
        >
          {menu ? 'Hide Menu' : 'Show Menu'}
      </button>

      <div className={classes.Title}>
        Welcome to League of Europe
      </div>

      {Auth()}

    </nav>
  )
}

export default HeadNav;