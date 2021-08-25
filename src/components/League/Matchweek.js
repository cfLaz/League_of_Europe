import React, { useState } from 'react';
import classes from './Matchweek.module.css';
import XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import {useSelector, useDispatch} from 'react-redux';
import Simulate from './SimulateResults';
import Aux from '../../Auxilary';
import * as actions from '../../store/actions/indexA';
import Spinner from '../Spinner/Spinner';
import trophy from '../../images/trophyy.png';



const Matchweek=()=>{
                        // [boolean, clubs stats, schedule]
  let [Data, getData] = useState([false, [], {}])
  let [showDelete, toggleShowDelete] = useState(false);

  let token = useSelector(state=> state.auth.token)
  const userID = useSelector(state => state.auth.userID);
  let played = useSelector(state=> state.leagues.matchweekPlayed);
  let league = useSelector(state => state.leagues.currentLeague);
  let loading = useSelector(state=> state.leagues.loading);
 

  let schedule= JSON.parse(JSON.stringify(league[2])); //{ mw1: [ ['lfc','bvb'], [], ... [] ] ... mw38:[] }
  let currMW = schedule.currentMatchweek;
  let clubs = JSON.parse(JSON.stringify(league[1]));

  let dispatch = useDispatch();
  let play =()=> dispatch(actions.MWplayed());
  let updateStats =(stats, key, name, schedule, token, userID)=> dispatch(actions.UpdateStats(stats, key, name, schedule, token, userID));

  let deleteLeague=(leagueKey, token)=> dispatch(actions.deleteLeague(leagueKey, token));

  let currentMW =()=> {  
    if(currMW<39){
      
      let mwArray = schedule['matchweek'+currMW];
      let output =[];
      for(let game of mwArray){

        let homeEmblem;
        let awayEmblem;
        for(let club in clubs){
          if(!homeEmblem && (clubs[club].emblemInfo[1]===game[0]) ){
            homeEmblem= clubs[club].emblemInfo[0];
          }
          else if(!awayEmblem && (clubs[club].emblemInfo[1]===game[1]) ){
            awayEmblem= clubs[club].emblemInfo[0];
          }
        }

        output.push(
          <tr className={classes.TableRow} key={game[0]+game[1]}>
            
            <td>
              {game[0]} 
            </td>
            <td>
              <img src={homeEmblem} alt='' 
                className={classes.homeEmblem}/> 
            </td>

            <td className={['result', classes.Results].join(' ')}> : </td>

            <td>
              <img src={awayEmblem} alt=''
                className={classes.awayEmblem}/> 
            </td>
            <td>
              {game[1]}
            </td>

          </tr>
        )
      }
    return output;
    }
  }

  //let data=[]; //[true, results, clubs with updated stats]
  let resultField = document.getElementsByClassName("result");
  //let data = Simulate(league, currMW);

  let updateMW = (results) =>{
    console.log('results:', results);
    schedule['matchweek'+currMW] = results;
    schedule.currentMatchweek = currMW+1;
    console.log('schedule that is forwarded', schedule);
    return schedule; 
  }

  if(played){
    for(let i=0; i< Data[1].length; i++){
      resultField[i].textContent = 
      `${Data[1][i][2]} : ${Data[1][i][3]}`;
    }
  }

  let buttons = () => {

    if(loading) return <Spinner/>

    else {

      if(!played) {
        return <button  
                  disabled={played}
                  onClick={() => {

                  getData(Simulate(league,currMW));
                  play(); 
                  }}
                  className={classes.Buttons}>
                  Play it
               </button>
      }
      else{
        return <button 
                  onClick={() => {
                    let leagueKey = league[3];
                    let leagueName = league[0];
        
                    updateStats(Data[2], leagueKey, leagueName, updateMW(Data[1]), token, userID);
                    }}
                    className={classes.Buttons}>
                    Update table and go to next matchweek
                </button>
      }
    }
  }

  let deleteButton =()=>{
    return <button 
            className={classes.DeleteButton} 
            disabled={loading}
            onClick={()=> toggleShowDelete(true)}
            >
            Delete the league
          </button>
  }
  let showDeleteWindow=()=>{

    let deleteWindow = showDelete ? 
    <div className={classes.DeleteWrapper}>
    <div className={classes.DeleteWindow}>
      <p>Are you sure that you want to delete <span>{league[0]}</span> ? </p>

      <button onClick={()=> {
        deleteLeague(league[3], token)
        toggleShowDelete(false)
        }}
        >Yes!
      </button>

      <button onClick={()=> {
        toggleShowDelete(false)
        }}>Noo!</button>

    </div></div> : null;
    return deleteWindow;
  }

  let arrayForExcel=()=>{
    let array=[];
   
    for(let i=1; i<39; i++){
      array.push(['matchweek '+i])

      for(let game of league[2]['matchweek'+i]){
        array.push(game);
      }
      array.push([]);
    }
    return array;
  }

  let exportResults=()=> {
   
    let workbook = XLSX.utils.book_new();
    workbook.Props = {
      Title: league[0],
      Subject: 'schedule and results',
      Author: 'Lazar Jankovic',
      CreatedDate: new Date(),
    }
    workbook.SheetNames.push('sheet');

    let data = arrayForExcel(); //test

    let worksheet =XLSX.utils.aoa_to_sheet(data);
    workbook.Sheets['sheet'] = worksheet;

    let exportWBasBinary = XLSX.write(workbook, {bookType: 'xlsx', type: 'binary'});

    function convertToOctet(something) {
      let buf = new ArrayBuffer(something.length);
      let view = new Uint8Array(buf);
      for(let i=0; i<something.length; i++) view[i] = something.charCodeAt(i) & 0xFF;
      return buf;
    }

    return saveAs(new Blob([convertToOctet(exportWBasBinary)],{type:"application/octet-stream"}), 'schedule and results.xlsx');  
  }

  let exportButton = <button className={classes.exportBtn +' '+ classes.Buttons}
      onClick={()=> exportResults() }
      >export schedule/results
    </button>

  if(currMW<39){

    return(
      <Aux>  
      <table className={classes.MatchweekTable}> 
      <thead>
          <tr>
              <th colSpan="5"> Matchweek {currMW} </th>
          </tr>
      </thead>
      <tbody>
          <tr className={[classes.TableRow, classes.ColumnDescription].join(' ')}>
              <td>Home team</td>
              <td></td>
              <td>Result</td>
              <td></td>
              <td>Away team</td>
          </tr>
          {currentMW()}       
      </tbody>
      <tfoot>
        {buttons()}
      </tfoot>
      </table>
      
      {exportButton}
      {deleteButton()}
      {showDeleteWindow()}
        
      </Aux>
    )
  }
  else{
    let winner = league[4];
    let emblem;
    let clubs = Object.values(league[1]);
    console.log(clubs);
    for(let val of clubs){
      if(val.emblemInfo[1] === winner) {
        
        emblem= <img 
          src={val.emblemInfo[0]}
          alt={val.emblemInfo[2]}
          /> 
        
        break;
      }
    }
    //console.log(emblem);
    return(
      <Aux>
      <div className={classes.Congratulations}>
        <p>Congratulations to <span>{winner}</span> for winning the <span>{league[0]}</span> league</p>

        <img alt='Trophy' src={trophy}/>
        {emblem}
      </div>

      {exportButton}
      {deleteButton()}
      {showDeleteWindow()}
      </Aux>
    )
  } 
}

export default Matchweek;