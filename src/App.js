import logo from './logo.svg';
import './App.css';
import HeadNav from './containers/Head/HeadNav';
import Menu from './containers/Menu/Menu';
import Pitch from './containers/Playground/pitch';
import Preview from './containers/Menu/Preview';

import {useSelector} from 'react-redux';
function App() {

  let pickingMode = useSelector(state => state.newLeague.loaded);
  let SelectedClubs = pickingMode ? <Preview/> : null;

  return (
    <div className="App">
      {/*<header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <HeadNav/>
      <Menu/>
      {SelectedClubs}
      <Pitch>
        
      </Pitch>
    </div>
  );
}

export default App;
