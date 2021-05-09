import React, {useCallback} from 'react';
import classes from './Table.module.css';
import {useSelector, useDispatch} from 'react-redux';
//import * as actions from '../../store/actions/indexA';

const Table = () => {
  let league = useSelector(state => state.leagues.currentLeague)
  let currMW = league[2].currentMatchweek;
  //console.log('Table rendering');
  //let dispatch = useDispatch();
  /* let DeclareWinner=(team)=> useCallback(()=> dispatch(actions.declareWinner(team)), [] ); */
  
const takeData = () => {
  let teamStats =[];
  for(let club in league[1]){
    teamStats.push( 
      [ league[1][club].emblemInfo[1], 
        league[1][club].stats ])
  } //works
  console.log(teamStats);
  
  let sorted = []; // ['lfc',{points: x, ...}] <- elements
    
  while(sorted.length<20){   

    let maxPoints=teamStats[0][1].points;
    let team = teamStats[0];
    let index=0;
    let GD= teamStats[0][1].goalsScored - teamStats[0][1].goalsConceded;
    let goalsScored=teamStats[0][1].goalsScored

    for(let i=0; i<teamStats.length; i++){ 
      let clubStats = teamStats[i][1];
      
      if( clubStats.points > maxPoints ) {
        maxPoints = clubStats.points;
        team = teamStats[i];
        index = i;
        GD= clubStats.goalsScored - clubStats.goalsConceded;
        goalsScored = clubStats.goalsScored;
      }

      else if (clubStats.points === maxPoints ){
        if(clubStats.goalsScored - clubStats.goalsConceded > GD){
          maxPoints = clubStats.points;
          team = teamStats[i];
          index = i;
          GD= clubStats.goalsScored - clubStats.goalsConceded;
          goalsScored = clubStats.goalsScored;
        }
        else if(clubStats.goalsScored - clubStats.goalsConceded === GD){
          if(clubStats.goalsScored> goalsScored){
            maxPoints = clubStats.points;
            team = teamStats[i];
            index = i;
            GD= clubStats.goalsScored - clubStats.goalsConceded;
            goalsScored = clubStats.goalsScored;
          }
        }
      }
    }
    teamStats.splice(index,1);
    console.log(team);
    sorted.push(team);
  } 

    console.log(sorted);
  
    let helperArray =[];
    for(let i=0; i<sorted.length; i++){
      helperArray.push( [
        sorted[i][0],
        sorted[i][1].played,
        sorted[i][1].wins,
        sorted[i][1].draws,
        sorted[i][1].losses,
        `${sorted[i][1].goalsScored} : ${sorted[i][1].goalsConceded}`,
        sorted[i][1].points,
      ]
      )
    }
    
    let outputArray = [];
    for(let i=0; i<helperArray.length; i++){


      outputArray.push(
        <tr className={classes.TableRow} key={'position '+(i+1)}>
          <td>{i+1}</td>
          <td>{helperArray[i][0]}</td>
          <td>{helperArray[i][1]}</td>
          <td>{helperArray[i][2]}</td>
          <td>{helperArray[i][3]}</td>
          <td>{helperArray[i][4]}</td>
          <td>{helperArray[i][5]}</td>
          <td>{helperArray[i][6]}</td>
        </tr>
        )
    }
    return outputArray;
  }
  
  return(
    <table className={classes.Table}> 
    <thead>
        <tr>
            <th colSpan="8">{league[0]}</th>
        </tr>
    </thead>
    <tbody>
        <tr className={classes.TableRow}>
            <td>Position</td>
            <td>Team</td>
            <td>played</td>
            <td className={classes.small}>W</td>
            <td className={classes.small}>D</td>
            <td className={classes.small}>L</td>
            <td className={classes.small}>GD</td>
            <td>Points</td>
        </tr>
       {takeData()}
    </tbody>
    </table>
  )
}

export default Table;