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
    yield put(actions.loading())

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
    yield put(actions.didNotGetLeagues(error));
  }

}

export function* getLeagues(action) {
  yield put(actions.loading())

  let leagueData = []; //contains objects that have league and userID
  let leagues=[]; //each element is an array which has 2 elemeents, league name and league clubs.
  const queryParams = '?auth=' + action.token + '&orderBy="userID"&equalTo="'+ action.userID+'"';

  try{
    let getResponse = yield axios.get('/leagues.json'+ queryParams);
    console.log(getResponse);

    let keys=[];
    for(let key in getResponse.data){
      leagueData.push(getResponse.data[key]);
      keys.push(key);
    }
    if(leagueData.length===0) {
      alert("You don't have any leagues yet");
      yield put(actions.didNotGetLeagues());
    }
    else{
      for(let i=0; i<leagueData.length; i++){
        let structure = Object.entries(leagueData[i]);
        let league= structure[0]; // ['leagueName', {} ];
        
        league.push(structure[1][1]); //adding schedule
        league.push(keys[i]); //adding league key
        
        if(structure[3]){
          league.push(structure[3][1]) //adding winner
        }

        leagues.push(league);
      }
     // leagues => ['leagueName', {Liverpool: {...} }, {mw1:[]}]
      yield put(actions.gotLeagues(leagues));
    }

  } catch(error) {
      console.log(error)
      yield put(actions.didNotGetLeagues(error))
  }
  


}

export function* newLeague(action) {

  try {
    let response = yield axios.post('/leagues.json', action.league);
    console.log("New league data", response)

    yield delay(500);

    yield put(actions.submitted(action.token, action.userID));
    

    alert('League created! You can check it now by clicking on Show my leagues! button ')

  } 
    catch(error) {
      console.log(error);
      alert("Submit failed");
      yield put(actions.gotError());
    }

}

export function* deleteLeague(action) {

  try{
      let deleteResponse = yield axios.delete(`/leagues/${action.leagueKey}.json?auth=${action.token}`);

      console.log(deleteResponse);

    } catch(error) {
    console.log(error);
  }
}