import React, {useState} from 'react';
import classes from './Menu.module.css';
import {Route, Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/indexA';
import LeaguesList from './LeaguesList';

/* const LeaguesList = React.lazy( () => import('./LeaguesList')) */

const Menu = () => {

  let [showLeagues,toggleShowLeagues]= useState(false);
  
  let token = useSelector(state=> state.auth.token)
  const userID = useSelector(state => state.auth.userID);
  //let path= useSelector(state => state.leagues.path);
  //let leagues = useSelector(state=> state.leagues.leagues);
  let menu = useSelector(state=> state.newLeague.showMenu);


  let dispatch = useDispatch();
  let getLeagues = (token,userID) => dispatch(actions.getLeagues(token,userID));

  let loadClubs = () => {
    dispatch(actions.Loading())
    toggleShowLeagues(false);
  };

  function redirectToLeagues() {
    if(token) {
      getLeagues(token, userID);
      toggleShowLeagues(true);
    }
    else alert('You need to log in first!')
  }
  
  let redirect = (showLeagues && token) ? 
    <Redirect to='/leagues' /> :
    <Redirect to='/'/> ;


  return(
    menu ?
    <aside className={classes.Menu}>
      <ul>
        <li onClick={()=>redirectToLeagues()}>
          Your leagues: 
          {redirect}
          <Route path='/leagues' component={LeaguesList}/>
          
        </li>
        <li onClick={loadClubs}>Make a new league</li>
      </ul>
    </aside> : null
  );
};

export default Menu;


