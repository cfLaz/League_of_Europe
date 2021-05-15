import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/indexA';
import Aux from '../../Auxilary';

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
    //console.log(league);
    //if(league[2].currentMatchweek>38) league[4] = {winner : 'a'}
    return selectedLeague(league);
  }
  return(
    <Aux>
      {leagues.map(league => {
        return (
          <Aux>
          <li 
            key={league[0]}
            onClick={()=> selectLeague(league[0])}
          >
            {league[0]}
            {/* <span key={league[3]} onClick={()=> {deleteLeague(league[3], token)}}>
              delete
            </span> */}
          </li>
          </Aux>
          )
      })}
    </Aux>
    )
  
}

export default LeaguesList;


/*   const extractLeagueNames=(leagues)=> {  why couldn't I use this??
    leagues.map(league => {
      return (<li key={league[1]}>{league[0]}</li>)
    })
  }  */