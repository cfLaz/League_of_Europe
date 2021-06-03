import React, {useCallback, useState} from 'react';
import classes from './Table.module.css';
import {useSelector} from 'react-redux';
//import * as actions from '../../store/actions/indexA';

const Table = () => {
  let league = useSelector(state => state.leagues.currentLeague)
  
  let [Width,setWidth] = useState(window.innerWidth);
  let [Height,setHeight] = useState(window.innerHeight);
  const takeData = () => {
  let teamStats =[];
  for(let club in league[1]){
    teamStats.push( 
      [ league[1][club].emblemInfo[1], 
        league[1][club].stats,
        league[1][club].emblemInfo[0] ])
  } //works
  //console.log(teamStats);
  
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
    sorted.push(team);
  } 
    //console.log(sorted);
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
        sorted[i][2]
        ]
      )
    }
    
    let outputArray = [];
    for(let i=0; i<helperArray.length; i++){

      let classesArray = classes.TableRow;
      if(i%2===0){
        classesArray = [classes.TableRow, classes.everyOther].join(' ');
      }  
      outputArray.push(
        <tr className={classesArray} key={'position '+(i+1)}>
          <td title='position'>{i+1}.</td>
          <td>
            
               {/* <img src={helperArray[i][7]} alt=''/> */}  {helperArray[i][0]}
                 
          </td>
          <td title='played'>{helperArray[i][1]}</td> 
          <td title='wins'>{helperArray[i][2] }</td>
          <td title='draws'>{helperArray[i][3]}</td>
          <td title='losses'>{helperArray[i][4]}</td>
          <td title='goalDifference'>{helperArray[i][5]}</td>
          <td title='points'>{helperArray[i][6]}</td>
        </tr>
        )
    }
    return outputArray;
  }

  //let Width=window.innerWidth;
  //let Height = window.innerHeight;
  window.addEventListener('resize', function(/*event*/){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight); 
  });

  let position = <td>Position</td>;
  let played = <td>Played</td>;
  let points = <td>Points</td>

  if(Width<Height){
    position=<td title='position'>#</td>;
    played = <td title='played'>pl</td>;
    points = <td title='points'>pts</td>
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
            {position}
            <td>Team</td>
            {played}
            <td className={classes.small} title='wins'>W</td>
            <td className={classes.small} title='draws'>D</td>
            <td className={classes.small} title='losses'>L</td>
            <td className={classes.small} title='goalDifference'>GD</td>
            {points}
        </tr>
       {takeData()}
    </tbody>
    </table>
    
  )
}

export default Table;