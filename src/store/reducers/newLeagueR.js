import {updateObject} from '../../shared/utility';

let initialState={
  loaded: false,
  selectedClubs: [],
  //pickingMode: false,
  limit: false, //used for determing if 20 club limit is reached
  showMenu: true,
  submittingNewLeague: false,
  error: null,
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

let startNewLeague = (state) => {
  return updateObject(state, {submittingNewLeague: true});
}

let newLeagueSubmitted=(state)=>{
  return updateObject(state, {
    selectedClubs: [],
    limit: false,
    loaded: !state.loaded,
    submittingNewLeague: false,
  })
}



const reducer = (state = initialState, action) => {
  switch(action.type){

    case 'LOAD_NEW_LEAGUE' : return updateObject(state, {loaded: true})

    case 'UNLOAD_NEW_LEAGUE' : return updateObject(state, 
      {loaded: false, 
        selectedClubs: [],
        limit: false,
        error: null,
      })

    case 'CLEAR_SELECTED_CLUBS': return updateObject(state, {selectedClubs:[], limit: false})

    case 'SELECT': return selectClub(state, action)

    case 'REMOVE_CLUB': return removeClub(state, action)

    case 'START_NEW_LEAGUE': return startNewLeague(state)

    case 'NEW_LEAGUE_SUBMITTED': return newLeagueSubmitted(state)

    case 'SHOW/HIDE_MENU': return updateObject(state, {
      showMenu: !state.showMenu})
    case 'GOT_ERROR': return updateObject(state, {
      error: action.error,
      submittingNewLeague: false,
    })
    
    
    default: return state;
  }
}

export default reducer;
