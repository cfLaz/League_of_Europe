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

  try {
    let statsResponse = yield axios.put(`/leagues/${key}/${leagueName}.json`, stats);
    console.log('updateStats response: ', statsResponse);

    let scheduleResponse = yield axios.put(`/leagues/${key}/schedule.json`,schedule);
    console.log('updateSchedule response: ', scheduleResponse);
    
    yield delay(1000);
    yield put(actions.getLeagues(token, userID));
    yield delay(1000);
    yield put(actions.updateCurrentLeague());

  } catch(error){
    console.log(error);
  }

}