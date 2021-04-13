import React from 'react';
import classes from './Matchweek.module.css';
import {useSelector} from 'react-redux';
import simulate from './SimulateResults';
import Aux from '../../Auxilary';

const Matchweek=()=>{

  let league = useSelector(state => state.leagues.currentLeague);
  let schedule= JSON.parse(JSON.stringify(league[2])); //{ mw1: [ ['lfc','bvb'], [], ... [] ] ... mw38:[] }
  let currMW = 'matchweek1';

  let currentMW =()=> {  
    let mwArray = schedule[currMW];
    let output =[];

    for(let game of mwArray){
      output.push(
        <tr className={classes.TableRow} key={game[0]+game[1]}>
          <td>{game[0]}</td>
          <td> : </td>
          <td>{game[1]}</td>
      </tr>
      )
    }
    return output;
  }
  /* let playMW=(mw)=>{
    return(
      play(mw)
    )
  } */

  return(
    <Aux>  
    <table className={classes.MatchweekTable}> 
    <thead>
        <tr>
            <th colSpan="3"> Matchweek {currMW[9]} </th>
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
      onClick={() => simulate(league)}
      className={classes.PlayIt}>
        Play it</button>
    </Aux>
  )
}

export default Matchweek;