import React from 'react';
import classes from './Preview.module.css';
//import NewLeague from '../../components/new league/new_league';
import Teams from '../Teams/Teams';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/indexA';
//import axios from '../../axios';

const Preview = () => {

  let clubs = useSelector(state => state.newLeague.selectedClubs)
  let limit = useSelector(state => state.newLeague.limit)

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

  return(
    <div className={classes.Preview}>
      
      <button className={classes.BackButtons}
        onClick={()=>unload()}>
        Go back
      </button>

      <button className={classes.BackButtons}
        onClick={()=> clearClubs()}>
        Clear
      </button>

      {preview}

      <button 
      disabled={!limit} 
      onClick={() => startNewLeague(league)}
      className={limit ? null : classes.Start}
      title= {!limit ? 'Need 20 clubs for the league' : null}>
        Start the League of Europe!
      </button>

    </div>
  );
};

export default Preview;
