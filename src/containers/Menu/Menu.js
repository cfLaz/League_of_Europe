import React, {useState} from 'react';
import classes from './Menu.module.css';
import {Route, Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Loading} from '../../store/actions/indexA';
import LeaguesList from './LeaguesList';

/* const LeaguesList = React.lazy( () => import('./LeaguesList')) */

const Menu = () => {

  let [leaguesPath,setLeaguesPath]= useState(null);

  let token = useSelector(state=> state.auth.token)

  let dispatch = useDispatch();
  let loadClubs = () => {redirectBack(); dispatch(Loading())};

  const redirectToLeagues=()=>{
    if(token) setLeaguesPath(<Redirect to='/leagues'/>);
    else alert('You need to log in first!')
  }
  const redirectBack=()=>{
    setLeaguesPath(<Redirect to='/'/>)
  }
  return(
    <aside className={classes.Menu}>
      <ul>
        <li onClick={()=>redirectToLeagues()}>Your leagues: 
          {leaguesPath}
          <Route path='/leagues' component={LeaguesList}/>
        </li>
        <li onClick={loadClubs}>Make a new league</li>
      </ul>
    </aside>
  );
};

export default Menu;


