import {updateObject} from '../../shared/utility';


const initialState = {
  leagues: [], // element->['leagueName', {Liverpool: {...} }, {mw1: []...}, 'leagueKey']
  loading: null,
  currentLeague: null, // [same as leagues just with only one]
  error: null,
  //path: '/',
  matchweekPlayed: false,
}

let updateCurrentLeague = (state)=> {
  let name = state.currentLeague[0];

  for(let el of state.leagues){
    if (el[0]===name){
      return updateObject(state, {
        matchweekPlayed: false,
        currentLeague: el,
      })
    }
  }

}

const reducer = (state = initialState, action) => {
  switch(action.type){ 

    case 'GOT_LEAGUES': return updateObject(state, {leagues: action.leagues});
    case 'COULD_NOT_GET_LEAGUES': return updateObject(state, {error: action.error});
    case 'SELECTED_LEAGUE': return updateObject(state, {currentLeague: action.league});
    case 'MATCHWEEK_PLAYED': return updateObject(state, {matchweekPlayed: true})    
    case 'UPDATE_CURRENT_LEAGUE': return updateCurrentLeague(state);

    default: return state;
  }

}

export default reducer;