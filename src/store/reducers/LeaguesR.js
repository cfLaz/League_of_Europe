import {updateObject} from '../../shared/utility';


const initialState = {
  leagues: [], // element->['leagueName', {Liverpool: {...} }, {mw1: []...}, 'leagueKey']
  loading: null,
  currentLeague: null, // [same as leagues just with only one]
  error: null,
  //path: '/',
  played: false,
}

/* let updateStats=(state, action)=>{
  let currentLeagueCopy = JSON.parse(JSON.stringify(state.currentLeague));

  let clubs = Object.values(currentLeagueCopy[1]);
  for(let i=0; i<clubs.length; i++){
    if(clubs[i].emblemInfo[1]===action.homeTeam) {
      clubs[i] = action.homeStats;
    }
    else if(clubs[i].emblemInfo[1]===action.awayTeam) {
      clubs[i] = action.awayStats;
    }
  }
  currentLeagueCopy[1] = clubs;
  console.log(currentLeagueCopy);
  return updateObject(state, {currentLeague: currentLeagueCopy});
} */

const reducer = (state = initialState, action) => {
  switch(action.type){ 

    case 'GOT_LEAGUES': return updateObject(state, {leagues: action.leagues});
    case 'COULD_NOT_GET_LEAGUES': return updateObject(state, {error: action.error});
    case 'SELECTED_LEAGUE': return updateObject(state, {currentLeague: action.league});
    case 'MATCHWEEK_PLAYED': return updateObject(state, {played: true})    
    case 'UPDATE_STATS': return state/* updateStats(state, action) */;

    default: return state;
  }

}

export default reducer;