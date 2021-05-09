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

function App() {

  let dispatch=useDispatch();
  let autoLogin = ()=> dispatch(actions.authCheckState())

  useEffect(()=> {
    autoLogin();
  }, [autoLogin])

  let pickingMode = useSelector(state => state.newLeague.loaded);
  let selectedLeague = useSelector(state=>state.leagues.currentLeague);

  let SelectedClubs = pickingMode ? <Preview/> : null;
  let league = selectedLeague ? <League/> :null;

  return (
    <div className="App">

      <HeadNav/>
      <Menu/>
      {SelectedClubs}
      <Pitch>
        <NewLeague/>
        {league}
        
      </Pitch>
    </div>
  );
}

export default App;
