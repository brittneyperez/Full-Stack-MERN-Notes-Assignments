import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlayerList from './components/PlayerList';
import CreateForm from './components/CreateForm';
import { useState } from 'react';

function App() {
  
  const [ listPageIsActive, setListPageIsActive ] = useState(true);
  // const [managePlayerStatusTabIsActive, setManagePlayerStatusTabIsActive] = useState(false);
  
  /* What is this State's purpose?
    ? This will let the components using this state know 
    ? which page is active (i.e., ListPage) 
    * Now we pass down these Properties down as props to the following components:
    PlayerList, CreateForm, and ListSubNavigation
  */
  
  return (
    <div className="App">
      <h1>PRACTICE Assignment #23: Team Manager</h1>
      
      {/* <Nav
        managePlayerStatusTabIsActive={managePlayerStatusTabIsActive}
        setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
      /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/players/list"
            element={ <PlayerList /> }
            default
            listPageIsActive={listPageIsActive}
            setListPageIsActive={setListPageIsActive}
            // setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
          />
          <Route
            path="/players/add"
            element={ <CreateForm /> }
            listPageIsActive={listPageIsActive}
            setListPageIsActive={setListPageIsActive}
            // setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
          />
          <Route
            // path="/status/game/:gameId"
            // element={  }
            // setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
          />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;