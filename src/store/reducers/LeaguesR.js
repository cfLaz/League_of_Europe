import {updateObject} from '../../shared/utility';


const initialState = {
  leagues: [], // element->['leagueName', {Liverpool: {...} }]
  loading: null,
  currentLeague: null, // [same as leagues just with only one]
  error: null,
  //path: '/',
}

const reducer = (state = initialState, action) => {
  switch(action.type){ 

    case 'GOT_LEAGUES': return updateObject(state, {leagues: action.leagues});
    case 'COULD_NOT_GET_LEAGUES': return updateObject(state, {error: action.error});
    case 'SELECTED_LEAGUE': return updateObject(state, {currentLeague: action.league});
    
    default: return state;
  }

}

export default reducer;