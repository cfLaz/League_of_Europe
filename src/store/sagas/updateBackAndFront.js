import {put, delay} from 'redux-saga/effects';
import * as actions from '../actions/indexA';

import axios from '../../axios';

export function* updateBackAndFront(action) {
  //yield console.log('saga works', action);
  let stats = action.stats;
  let key = action.key;
  let leagueName = action.name;
  let schedule = action.schedule;
  let token = action.token;
  let userID = action.userID;

  let clubs = Object.values(stats);
  let Champion=()=> {
    let champ='';
    let points=0;
    let GD=0;
    let goalsScored=0;

    for(let club of clubs){
      if(club.stats.points > points){

        champ=club.emblemInfo[1];
        points = club.stats.points;
        GD=club.stats.goalsScored - club.stats.goalsConceded;
        goalsScored= club.stats.goalsScored;
      }
      else if(club.stats.points===points){
        if(GD< (club.stats.goalsScored - club.stats.goalsConceded)){

          champ=club.emblemInfo[1];
          points = club.stats.points;
          GD=club.stats.goalsScored - club.stats.goalsConceded;
          goalsScored= club.stats.goalsScored;
        }
        else if(GD===(club.stats.goalsScored-club.stats.goalsConceded)){
          if(goalsScored < club.stats.goalsScored){
            champ= club.emblemInfo[1];
            points = club.stats.points;
            GD=club.stats.goalsScored - club.stats.goalsConceded;
            goalsScored= club.stats.goalsScored;
          }
        }
      }
    }
    console.log('Champion: ', champ);
    return JSON.stringify({winner: champ});
  }



  try {
    let statsResponse = yield axios.put(`/leagues/${key}/${leagueName}.json`, stats);
    console.log('updateStats response: ', statsResponse);

    let scheduleResponse = yield axios.put(`/leagues/${key}/schedule.json`,schedule);
    console.log('updateSchedule response: ', scheduleResponse );
    
    if(scheduleResponse.data.currentMatchweek>38){    
      yield axios.patch(`/leagues/${key}.json`, Champion());
    }
    
    yield delay(1000);
    yield put(actions.getLeagues(token, userID)); //just FYI - this put is from redux-saga, axios.put is request for firebase and not related to saga
    yield delay(1000);
    yield put(actions.updateCurrentLeague());


  } catch(error){
    console.log(error);
  }

}