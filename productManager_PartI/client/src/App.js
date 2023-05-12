import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
// import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={ <Main/> } path='/' default />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
