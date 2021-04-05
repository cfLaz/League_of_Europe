import React from 'react';
import {useSelector } from 'react-redux';

const LeaguesList = () => {
 
  let leagues = useSelector(state=> state.leagues.leagues);
 
    console.log('LeaguesList')
    return(
    <ul>
      {leagues.map(league => {
        return (<li key={league[1]}>{league[0]}</li>)
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