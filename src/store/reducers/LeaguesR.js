import {updateObject} from '../../shared/utility';


const initialState = {
  leagues: [], // element->['leagueName', {Liverpool: {...} }]
  loading: null,
  currentLeague: null,
  error: null,
  //path: '/',
}

const reducer = (state = initialState, action) => {
  switch(action.type){ 

    case 'GOT_LEAGUES': return updateObject(state, {leagues: action.leagues});

    case 'COULD_NOT_GET-LEAGUES': return updateObject(state, {error: action.error});

    default: return state;
  }

}

export default reducer;