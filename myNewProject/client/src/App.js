import './App.css';
import React from 'react';
// import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './views/Main'
import Detail from './components/Detail';
import UpdatePersonForm from './components/UpdatePersonForm';
// import PersonForm from './components/PersonForm';
// import PersonList from './components/PersonList';

function App() {
  return (
    <div className="App">
      {/* <PersonForm /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/home" default />
          {/* The :id part of the path is the variable taht we must give value to */}
          <Route element={<Detail />} path="/people/:id" />
          <Route element={<UpdatePersonForm />} path="/people/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
