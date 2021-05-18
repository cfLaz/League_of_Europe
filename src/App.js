//import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import HeadNav from './containers/Head/HeadNav';
import Menu from './containers/Menu/Menu';
import Pitch from './containers/Playground/Pitch';
import Preview from './containers/Menu/Preview';
import NewLeague from './components/NewLeague/NewLeague';
//import MwG from './components/NewLeague/MatchweekGenerator';
import {useSelector, useDispatch} from 'react-redux';
import League from './containers/Playground/League';
import * as actions from './store/actions/indexA';
import Spinner from './components/Spinner/Spinner';

function App() {

  let dispatch=useDispatch();
  let autoLogin = ()=> dispatch(actions.authCheckState())

  useEffect(()=> {
    autoLogin();
  }, [autoLogin])

  //let pickingMode = useSelector(state => state.newLeague.loaded);
  let selectedLeague = useSelector(state=>state.leagues.currentLeague);
  let submittingNewLeague = useSelector(state=> state.newLeague.submittingNewLeague);

  //let SelectedClubs = pickingMode ? <Preview/> : null;
  let league = selectedLeague ? <League/> :null;
  let spinner = submittingNewLeague ? <Spinner/> : null;

  let fireworks=null;
  if(selectedLeague)
  if(selectedLeague[2].currentMatchweek ===39) {
    fireworks = 
    <div className='pyro'>
        <div className='before'></div>
        <div className='after'></div>
    </div>
  }
  
  return (
    <div className="App">
      {fireworks}

      <HeadNav/>

      <Menu/>
      <Preview/>
      <Pitch>
        <NewLeague/>
        {league}  
      </Pitch>

      {spinner}
    </div>
  );
}

export default App;
