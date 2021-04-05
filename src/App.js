//import logo from './logo.svg';
import './App.css';
import HeadNav from './containers/Head/HeadNav';
import Menu from './containers/Menu/Menu';
import Pitch from './containers/Playground/Pitch';
import Preview from './containers/Menu/Preview';
import NewLeague from './components/NewLeague/NewLeague';
//import MwG from './components/NewLeague/MatchweekGenerator';
import {useSelector} from 'react-redux';
function App() {

  let pickingMode = useSelector(state => state.newLeague.loaded);
  let SelectedClubs = pickingMode ? <Preview/> : null;
  

  return (
    <div className="App">

      <HeadNav/>
      <Menu/>
      {SelectedClubs}
      <Pitch>
        <NewLeague/>

        
      </Pitch>
    </div>
  );
}

export default App;
