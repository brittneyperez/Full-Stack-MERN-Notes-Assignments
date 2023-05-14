import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import ProductDetails from './components/ProductDetails';
// import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={ <Main/> } path='/' default />
          <Route element={ <ProductDetails/> } path='/products/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
