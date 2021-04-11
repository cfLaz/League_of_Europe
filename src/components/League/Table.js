import React from 'react';
import classes from './Table.module.css';
import {useSelector} from 'react-redux';

const Table = () => {
  let league = useSelector(state => state.leagues.currentLeague)
  
  const takeData = () => {
    let teamStats =[];
    for(let club in league[1]){
      teamStats.push( 
        [ league[1][club].emblemInfo[1], 
          league[1][club].stats ])
    } //works
    
    let sorted = []; // ['lfc',{points: x, ...}] <- elements
    while(sorted.length<20){
      let max=0;
      let team=[];
      let index=0;
      for(let i=0; i<teamStats.length; i++){ 
        if( teamStats[i][1].points >= max ) {
          max = teamStats[i][1].points;
          team = teamStats[i];
          index = i;
        }
      }
      teamStats.splice(index,1);
      sorted.push(team);
    } 

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
    //console.log('helper array', helperArray);
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
        </tr>)
    }
    return outputArray;
  }
  //takeData();
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