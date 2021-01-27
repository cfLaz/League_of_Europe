import {updateObject} from '../../shared/utility';
import axios from '../../axios';

let initialState={
  loaded: false,
  selectedClubs: [],
  //pickingMode: false,
  limit: false,
}

 let selectClub = (state, action) => {

  let arr= [...state.selectedClubs];
  arr.push(action.selectedClub)
  
  return updateObject(state, {selectedClubs: arr})
} 

let removeClub = (state, action) =>{
  let arr= [...state.selectedClubs];
  let position = arr.indexOf(action.removedClub)
  arr.splice(position,1)
  
  return updateObject(state, {selectedClubs: arr})
}

let startNewLeague = (state, action) => {
  axios.post('/leagues.json', action.new_league).then(
    response => console.log(response)).catch(
      error=> console.log(error))
  return state
}

let reducer = (state = initialState, action) => {
  switch(action.type){

    case 'LOAD_NEW_LEAGUE' : return updateObject(state, {loaded: !state.loaded})

    case 'UNLOAD_NEW_LEAGUE' : return updateObject(state, {loaded: !state.loaded, selectedClubs: []})

    case 'CLEAR_SELECTED_CLUBS': return updateObject(state, {selectedClubs:[]})

    case 'SELECT': return selectClub(state, action)

    case 'REMOVE_CLUB': return removeClub(state, action)

    case 'START_NEW_LEAGUE': return startNewLeague(state, action)
    
    default: return state;
  }
}

export default reducer;
