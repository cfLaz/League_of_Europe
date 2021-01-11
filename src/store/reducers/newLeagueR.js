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
  arr.remove(action.selectedClub)
  
  return updateObject(state, {selectedClubs: arr})
}

let reducer = (state = initialState, action) => {
  switch(action.type){

    case 'LOAD_NEW_LEAGUE': return updateObject(state, {loaded: !state.loaded})

    case 'CLEAR': return null

    case 'SELECT': return selectClub(state, action)

    case 'REMOVE_CLUB': return removeClub(state, action)

    default: return state;
  }
}

export default reducer;
