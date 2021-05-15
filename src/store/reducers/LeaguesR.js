import {updateObject} from '../../shared/utility';


const initialState = {
  leagues: [], // element->['leagueName', {Liverpool: {...} }, {mw1: []...}, 'leagueKey']
  loading: false,
  currentLeague: null, // [same as leagues just with only one]
  error: null,
  //path: '/',
  matchweekPlayed: false,
  showLeaguesList: false,
}

let updateCurrentLeague = (state)=> {
  console.log('update current league')
  let name = state.currentLeague[0];

  for(let el of state.leagues){
    if (el[0]===name){
      return updateObject(state, {
        matchweekPlayed: false,
        currentLeague: el,
        loading: false,
      })
    }
  }
}

let deleteLeague=(state, action)=> {

  let leaguesCopy =JSON.parse(JSON.stringify(state.leagues))
  let i=0
  for(let league of leaguesCopy){
    if (league[3]===action.leagueKey){
      leaguesCopy.splice(i,1);
      break;
    }
    i++;
  }
  return updateObject(state, {
    leagues: leaguesCopy,
    currentLeague: null,
  });
}
const reducer = (state = initialState, action) => {
  switch(action.type){ 

    case 'LOADING': return updateObject(state, {
      loading: true,
      matchweekPlayed: false
    })

    case 'GOT_LEAGUES': return updateObject(state, {
      leagues: action.leagues,
      loading: false,
    });
    case 'COULD_NOT_GET_LEAGUES': return updateObject(state, {
      error: action.error,
      loading: false,
      showLeaguesList: false
    });
    case 'SELECTED_LEAGUE': return updateObject(state, {
      currentLeague: action.league,
      matchweekPlayed: false,
    });
    case 'MATCHWEEK_PLAYED': return updateObject(state, {matchweekPlayed: true})    
    case 'UPDATE_CURRENT_LEAGUE': return updateCurrentLeague(state);

    case 'LOGGED_OUT': return updateObject(state, {
      leagues: [], 
      loading: false,
      currentLeague: null, 
      error: null,
      matchweekPlayed: false,
      showLeaguesList: false
      } 
    )
    case 'LOAD_NEW_LEAGUE': return updateObject(state, {currentLeague: null})
    //case 'WE_HAVE_A_WINNER': return addWinner(state,action);
    
    case 'SHOW_LEAGUES_LIST': return updateObject(state, {showLeaguesList: true})
    case 'HIDE_LEAGUES_LIST': return updateObject(state, {showLeaguesList: false})

    case 'DELETE_LEAGUE': return deleteLeague(state, action);

    default: return state;
  }

}

export default reducer;