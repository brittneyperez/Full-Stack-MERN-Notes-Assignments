import './App.css';
import React from 'react';
// import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './views/Main'
// import PersonForm from './components/PersonForm';
// import PersonList from './components/PersonList';

function App() {
  return (
    <div className="App">
      {/* <PersonForm /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/home" default />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
