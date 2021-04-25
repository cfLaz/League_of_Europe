import React from 'react';
import classes from './Matchweek.module.css';
import {useSelector, useDispatch} from 'react-redux';
import Simulate from './SimulateResults';
import Aux from '../../Auxilary';
import * as actions from '../../store/actions/indexA';

const Matchweek=()=>{

  let token = useSelector(state=> state.auth.token)
  const userID = useSelector(state => state.auth.userID);
  let played = useSelector(state=> state.leagues.played);
  let league = useSelector(state => state.leagues.currentLeague);
  let schedule= JSON.parse(JSON.stringify(league[2])); //{ mw1: [ ['lfc','bvb'], [], ... [] ] ... mw38:[] }
  let currMW = schedule.currentMatchweek;
  
  let dispatch = useDispatch();
  let play =()=> dispatch(actions.MWplayed());
  let updateStats =(stats, key, name, schedule)=> dispatch(actions.UpdateStats(stats, key, name, schedule));
  let getLeagues = (token,userID) => dispatch(actions.getLeagues(token,userID));

  let currentMW =()=> {  
    let mwArray = schedule['matchweek'+currMW];
    let output =[];

    // need to add check if games are played already (results will be in array)
    for(let game of mwArray){
      output.push(
        <tr className={classes.TableRow} key={game[0]+game[1]}>
          <td>{game[0]}</td>
          <td className='result'> : </td>
          <td>{game[1]}</td>
      </tr>
      )
    }
    return output;
  }

  let data=[]; //[true, results, clubs with updated stats]
  let resultField = document.getElementsByClassName("result");

  let updateMW = (results) =>{
    //console.log('resutls:', results);
    schedule['matchweek'+currMW] = results;
    schedule.currentMatchweek = currMW+1;
    console.log(schedule);
    return schedule; 
  }

  return(
    <Aux>  
    <table className={classes.MatchweekTable}> 
    <thead>
        <tr>
            <th colSpan="3"> Matchweek {currMW} </th>
        </tr>
    </thead>
    <tbody>
        <tr className={classes.TableRow}>
            <td>Home team</td>
            <td>Result</td>
            <td>Away team</td>
        </tr>
        {currentMW()}       
    </tbody>
    </table>

      <button 
      onClick={() => {
        data = Simulate(league, currMW);
        for(let i=0; i< data[1].length; i++){
          resultField[i].textContent = 
          `${data[1][i][2]} : ${data[1][i][3]}`;
        }
        if(data[0]) play(); //is if check needed?
        //console.log(data);
        
      }}
      className={classes.PlayIt}>
        Play it
      </button>

      {played ? <button 
      onClick={() => {
        let leagueKey = league[3];
        let leagueName = league[0];
        //console.log(leagueKey, leagueName);
        updateStats(data[2], leagueKey, leagueName, updateMW(data[1])/* token, userID */);
        getLeagues(token, userID);
      }}
      className={classes.NextMW}>
        Update table and go to next matchweek</button> : null}
    </Aux>
  )
}

export default Matchweek;