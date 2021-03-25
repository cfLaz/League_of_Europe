import React, { useState } from 'react';
import classes from './Preview.module.css';
//import NewLeague from '../../components/new league/new_league';
import Teams from '../Teams/Teams';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/indexA';
//import axios from '../../axios';

const Preview = () => {
  let [leagueName, setLeagueName] = useState('');

  let clubs = useSelector(state => state.newLeague.selectedClubs);
  let limit = useSelector(state => state.newLeague.limit);
  //let token = useSelector(state => state.auth.token)
  let userID = useSelector(state => state.auth.userID)


  let dispatch = useDispatch();
  let removeClub= club => dispatch(actions.remove(club));
  let unload = ()=> dispatch(actions.unload());
  let clearClubs = ()=> dispatch(actions.clear());
  let startNewLeague = league => dispatch(actions.start(league));

  let preview = clubs.map(club => {
    return <div key={club.emblemInfo[1]}>
            <img
            src={club.emblemInfo[0]} 
            alt={club.emblemInfo[1]} 
            title={club.emblemInfo[2]} 
            
            onClick={()=>removeClub(club)}
          /> <p>{club.emblemInfo[1]}</p> 
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
      return null; //Added because of the warning message for map()
    })
  }
  //console.log(league)
  const startLeagueHandler = (e) => {
    e.preventDefault();
    if(!userID) return alert('You need to log in first');
    
    let data = {
      [leagueName]: league, //has to be in brackets yo
      userID: userID,
    }
    setLeagueName('');
    return startNewLeague(JSON.stringify(data))
  }

  
  let condition = ()=>{
    let name = document.getElementById('leagueName');
    return !limit || name.value==='';
  }
 
  return(
    <div className={classes.Preview}>
      
      <button className={classes.BackButtons}
        onClick={()=> {unload(); setLeagueName('')} }>
        Go back
      </button>

      <button className={classes.BackButtons}
        onClick={()=> {clearClubs(); setLeagueName('')}}>
        Clear
      </button>

      {preview}
      
      <form
        id='league'
        onSubmit={(e) => startLeagueHandler(e)}
      >
        <label>Enter name of your league</label>  
        <input id= 'leagueName' type='text' 
          onChange={(e)=> setLeagueName(e.target.value)}/>

        <button 
        disabled={condition()} 
        form='league'
        className={condition() ? null : classes.Start}
        title= {condition() ? 'Need 20 clubs and name for the  league' : 'Start the league!'}>
          Start the League of Europe!
        </button>
      </form>

    </div>
  );
};

export default Preview;
