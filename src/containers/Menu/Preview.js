import React, { useState } from 'react';
import classes from './Preview.module.css';
//import NewLeague from '../../components/new league/new_league';
import Teams from '../Teams/Teams';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/indexA';
//import axios from '../../axios';
import MatchWeekGenerator from '../../components/NewLeague/MatchweekGenerator';
const Preview = () => {
  let [leagueName, setLeagueName] = useState('');
  console.log(leagueName);

  let clubs = useSelector(state => state.newLeague.selectedClubs);
  let limit = useSelector(state => state.newLeague.limit);
  let token = useSelector(state => state.auth.token)
  let userID = useSelector(state => state.auth.userID)
  let pickingMode = useSelector(state => state.newLeague.loaded);

  let dispatch = useDispatch();
  let removeClub= club => dispatch(actions.remove(club));
  let unload = ()=> dispatch(actions.unload());
  let clearClubs = ()=> dispatch(actions.clear());
  let startNewLeague = (league,token,userID) => dispatch(actions.start(league, token, userID));
  

  let preview = clubs.map(club => {
    return <div key={club.emblemInfo[1]}>
            <img
            src={club.emblemInfo[0]} 
            alt={club.emblemInfo[1]} 
            title={club.emblemInfo[2]}
          /> 
          <p 
            onClick={()=>removeClub(club)}
            className={classes.clubName}
            title='click to remove club'  
          >
            {club.emblemInfo[1]} 
          </p> 

          <p title='team strength'> 
            ATK: {club.ATK}  MID: {club.MID}  DEF:{club.DEF}  
          </p>
          </div>
  })

  let league = JSON.parse(JSON.stringify(Teams));
  
  //filters out clubs I selected into object format that I want to send to Firebase
  if(clubs.length>0){
    Object.keys(league).map(team => {
      let contains=false;

      for(let i =0; i<clubs.length; i++){
        if(clubs[i].emblemInfo[1] === league[team].emblemInfo[1]) {contains=true}
      }
      if(!contains) delete league[team]
      return ''; //Added because of the warning message for map()
    })
  }
  //console.log(league)
  const startLeagueHandler = (e) => {
    e.preventDefault();
    if(!userID) return alert('You need to log in first');
    
    let leagueWithStats = JSON.parse(JSON.stringify(league)); // looks as expected

    for(let club in leagueWithStats){
      leagueWithStats[club]['stats'] = {
        played: 0,
        draws: 0,
        losses: 0,
        goalsScored: 0,
        goalsConceded: 0,
        points: 0,
        wins: 0,
      }
    }
    let theLeagueName = ' '+leagueName;

    let data = {
      [theLeagueName]: leagueWithStats, //has to be in brackets yo
      userID: userID,
      schedule: MatchWeekGenerator(league),
    }
    setLeagueName('');
    return startNewLeague(JSON.stringify(data), token, userID)
  }

  
  let condition = ()=>{
    let name = document.getElementById('leagueName');
    return !limit || name.value==='';
  }
  
  
  let attachedClasses = pickingMode ?
  [classes.Preview] : [classes.Preview, classes.Close]
  return(
    <div className={attachedClasses.join(' ')}> 

      <button className={classes.BackButtons}
        onClick={()=> {setLeagueName(''); unload(); } }>
        Go back
      </button>

      <button className={classes.BackButtons}
        onClick={()=> {setLeagueName(''); clearClubs(); }}>
        Clear
      </button>

      <form
        id='league'
        onSubmit={(e) => startLeagueHandler(e)}
      >
  {/*  <label>Enter name of your league</label>*/}        
        <input 
          id= 'leagueName'
          type='text' 
          placeholder="Enter name of your league"
          value={leagueName}
          onChange={(e)=> setLeagueName(e.target.value) }
          />
        <button 
        disabled={condition()} 
        form='league'
        className={condition() ? null : classes.Start}
        title= {condition() ? 'Need 20 clubs and name for the  league' : 'Start the league!'}>
          Start the League of Europe!
        </button>
      </form>

      {preview}
     
    </div>
  );
};

export default Preview;
