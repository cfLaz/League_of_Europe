import {updateObject} from '../../shared/utility';

let initialState={
  loaded: false,
  selectedClubs: [],
  //pickingMode: false,
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

let reducer = (state = initialState, action) => {
  switch(action.type){

    case 'LOAD_NEW_LEAGUE' : return updateObject(state, {loaded: !state.loaded})

    case 'UNLOAD_NEW_LEAGUE' : return updateObject(state, {loaded: !state.loaded, selectedClubs: []})

    case 'CLEAR_SELECTED_CLUBS': return updateObject(state, {selectedClubs:[]})

    case 'SELECT': return selectClub(state, action)

    case 'REMOVE_CLUB': return removeClub(state, action)

    default: return state;
  }
}

export default reducer;
