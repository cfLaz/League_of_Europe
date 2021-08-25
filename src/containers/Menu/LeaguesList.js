import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/indexA';
import Aux from '../../Auxilary';

const LeaguesList = () => {
/*   console.log('rendering LeaguesList component')
 */
  let leagues = useSelector(state=> state.leagues.leagues);
  const dispatch = useDispatch();
  let selectedLeague = (league)=> dispatch(actions.selectLeague(league));
  let hideMenu =()=> dispatch(actions.showMenu());
  
  const selectLeague=(leagueKey)=>{
    let league;
    for(let l of leagues){
      if (l[3]===leagueKey) {
        league = l;
        break;
      }
    }
    selectedLeague(league); 
    hideMenu();
  }
  return(
    <Aux>
      {leagues.map(league => {
        return (
          <Aux>
          <li 
            key={league[3]}
            onClick={()=> selectLeague(league[3])}
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