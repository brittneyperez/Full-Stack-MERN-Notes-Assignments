import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import IndexView from './views/IndexView';
import CreateView from './views/CreateView';
import DetailsView from './views/DetailsView';
import EditView from './views/EditView';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <div className='nav__header'>
            <h1>SportsDemo</h1>
            <div id="nav__links" style={{display:'flex',gap:'0.5rem'}}>
              <Link to={'/'}>Home</Link>
              |
              <Link to={'/create'}>Add Athlete</Link>
            </div>
          </div>
          
          <Routes>
            <Route path='/' element={ <IndexView /> } />
            <Route path='/create' element={ <CreateView /> } />
            <Route path='/athlete/:id' element={ <DetailsView /> } />
            <Route path='/athlete/:id/edit' element={ <EditView /> } />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
