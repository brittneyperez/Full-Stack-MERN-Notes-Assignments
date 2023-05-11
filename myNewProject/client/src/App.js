import './App.css';
import React from 'react';
// import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './views/Main'
import Detail from './components/Detail';
// import PersonForm from './components/PersonForm';
// import PersonList from './components/PersonList';

function App() {
  return (
    <div className="App">
      {/* <PersonForm /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/home" default />
          <Route element={<Detail />} path="/people/:id" />
          {/* The :id part of the path is the variable taht we must give value to */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
