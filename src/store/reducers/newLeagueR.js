import {updateObject} from '../../shared/utility';

let initialState={
  loaded: false,
  selectedClubs: [],
  //pickingMode: false,
  limit: false, //used for determing if 20 club limit is reached
}

 let selectClub = (state, action) => {

  let arr= [...state.selectedClubs];
  
  if(arr.length<19) {
    arr.push(action.selectedClub)
    return updateObject(state, {selectedClubs: arr}) 
  }
  else if(arr.length===19) {
    arr.push(action.selectedClub)
    return updateObject(state, {selectedClubs:arr, limit: true} )
  }
} 

let removeClub = (state, action) =>{
  let arr= [...state.selectedClubs];
  let position = arr.indexOf(action.removedClub)
  arr.splice(position,1)
  //it will always be false if I remove, since it shouldn't add anything after 20
  return updateObject(state, {selectedClubs: arr, limit:false})
}

let startNewLeague = (state, ) => {
  state.selectedClubs=[];
  state.limit=false;
  return state
}



const reducer = (state = initialState, action) => {
  switch(action.type){

    case 'LOAD_NEW_LEAGUE' : return updateObject(state, {loaded: !state.loaded})

    case 'UNLOAD_NEW_LEAGUE' : return updateObject(state, {loaded: !state.loaded, selectedClubs: []})

    case 'CLEAR_SELECTED_CLUBS': return updateObject(state, {selectedClubs:[], limit: false})

    case 'SELECT': return selectClub(state, action)

    case 'REMOVE_CLUB': return removeClub(state, action)

    case 'START_NEW_LEAGUE': return startNewLeague(state)
    
    default: return state;
  }
}

export default reducer;
