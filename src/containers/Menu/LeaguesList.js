import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/indexA';

const LeaguesList = () => {
  console.log('rendering LeaguesList component')

  let leagues = useSelector(state=> state.leagues.leagues);
  
  const dispatch = useDispatch();
  let selectedLeague = (league)=> dispatch(actions.selectLeague(league));
  
  const selectLeague=(leagueName)=>{
    let league;
    for(let l of leagues){
      if (l[0]===leagueName) {
        league = l;
        break;
      }
    }
    return selectedLeague(league);
  }
  return(
    <ul>
      {leagues.map(league => {
        return (
          <li 
            key={league[0]}
            onClick={()=> selectLeague(league[0])}
          >
            {league[0]}
          </li>)
      })}
    </ul>
    )
  
}

export default LeaguesList;


/*   const extractLeagueNames=(leagues)=> {  why couldn't I use this??
    leagues.map(league => {
      return (<li key={league[1]}>{league[0]}</li>)
    })
  }  */