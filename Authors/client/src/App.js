import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DisplayAuthors from './components/DisplayAuthors';
import CreateAuthor from './components/CreateAuthor';
import Navigation from './components/Navigation';
import UpdateTest from './components/UpdateTest';
// import UpdateAuthor from './components/UpdateAuthor';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={ <DisplayAuthors /> } />
          <Route path="/authors/create" element={ <CreateAuthor /> } />
          {/* <Route path="/author/edit/:id" element={ <UpdateAuthor /> } /> */}
          <Route path="/author/edit/:id" element={ <UpdateTest /> } />
        </Routes>
      </BrowserRouter>
      
      <p className='mt-8 text-zinc-500 font-serif font-semibold'>Assignment #22: Authors © 2023 Coding Dojo</p>
      
    </div>
  );
}

export default App;
