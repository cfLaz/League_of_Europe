import {updateObject} from '../../shared/utility';

let initialState={
  loaded: false,
  pickingMode: false,
  selectedClubs: [],
}

 let selectClub = (state, action) => {

  let arr= [...state.selectedClubs];
  arr.push(action.selectedClub)
  console.log(state.selectedClubs)
  return updateObject(state, {selectedClubs: arr})
} 

let reducer = (state = initialState, action) => {
  switch(action.type){

    case 'LOAD_NEW_LEAGUE': return updateObject(state, {loaded: !state.loaded})

    case 'CLEAR': return null

    case 'SELECT': return selectClub(state, action)

    default: return state;
  }
}

export default reducer;
