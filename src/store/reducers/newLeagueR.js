import {updateObject} from '../../shared/utility';
import axios from '../../axios';

let initialState={
  loaded: false,
  selectedClubs: [],
  //pickingMode: false,
  limit: false, //used for determing if 20 club limit is reached
}

 let selectClub = (state, action) => {

  let arr= [...state.selectedClubs];
  arr.push(action.selectedClub)
  
  if(arr.length<=20)
    {return updateObject(state, {selectedClubs: arr})}
  else {return updateObject(state, {limit:true})}
} 

let removeClub = (state, action) =>{
  let arr= [...state.selectedClubs];
  let position = arr.indexOf(action.removedClub)
  arr.splice(position,1)
  
  if(arr.length<20) //it will always be false if I remove, since it shouldn't add anything after 20
    {return updateObject(state, {selectedClubs: arr, limit:false})}
}

let startNewLeague = (state, action) => {
  axios.post('/leagues.json', action.new_league).then(
    response => console.log(response)).catch(
      error=> console.log(error))
  
  state.selectedClubs=[];
  return state
}

let reducer = (state = initialState, action) => {
  switch(action.type){

    case 'LOAD_NEW_LEAGUE' : return updateObject(state, {loaded: !state.loaded})

    case 'UNLOAD_NEW_LEAGUE' : return updateObject(state, {loaded: !state.loaded, selectedClubs: []})

    case 'CLEAR_SELECTED_CLUBS': return updateObject(state, {selectedClubs:[], limit: false})

    case 'SELECT': return selectClub(state, action)

    case 'REMOVE_CLUB': return removeClub(state, action)

    case 'START_NEW_LEAGUE': return startNewLeague(state, action)
    
    default: return state;
  }
}

export default reducer;
