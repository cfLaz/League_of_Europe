import React, {useState} from 'react';
import classes from './Menu.module.css';
import {Route, Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/indexA';
import LeaguesList from './LeaguesList';
import Spinner from '../../components/Spinner/Spinner';

/* const LeaguesList = React.lazy( () => import('./LeaguesList')) */

const Menu = () => {

/*   let [showLeagues,toggleShowLeagues]= useState(false);
 */  

  let token = useSelector(state=> state.auth.token)
  const userID = useSelector(state => state.auth.userID);
  //let path= useSelector(state => state.leagues.path);
  let leagues = useSelector(state=> state.leagues.leagues);
  let menu = useSelector(state=> state.newLeague.showMenu);
  let gettingLeagues = useSelector(state=> state.leagues.loading);
  let showLeaguesList = useSelector(state=> state.leagues.showLeaguesList);
  
  let dispatch = useDispatch();
  let getLeagues = (token,userID) => dispatch(actions.getLeagues(token,userID));
  /* let startSpinner = ()=>dispatch(actions.loading()); */

  let loadClubs = () => {
    dispatch(actions.Loading())
    dispatch(actions.hideLeaguesList());
    dispatch(actions.showMenu())
  };

  function redirectToLeagues() {
    if(showLeaguesList) return dispatch(actions.hideLeaguesList());
    if(token) {
      if(leagues.length===0) {
        getLeagues(token, userID);
      }
      dispatch(actions.showLeaguesList());
    }
    else alert('You need to log in first!')
  }
  
  let spinner = gettingLeagues ? <Spinner key='spinner'/> : null;

  let redirect = (showLeaguesList && token && spinner===null) ? 
    <Redirect to='/leagues' /> :
    <Redirect to='/'/> ;

  let attachedClasses = menu ? 
    [classes.Menu, classes.Open] : [classes.Menu, classes.Close];

  return(
    <aside className={attachedClasses.join(' ')}>
      
        
        
        <button onClick={loadClubs}>Create a new league </button>
        
        
        <ul>
          <p onClick={
            ()=>{
              redirectToLeagues();
            }
            }
            key={'yourLeagues'}
          >   Your leagues:
          </p>
          {spinner} 
          {redirect}
          <Route path='/leagues' component={LeaguesList}
        />
          
        </ul>
      
    </aside>
  );
};

export default Menu;


