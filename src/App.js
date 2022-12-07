import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import Home from './Pages/home'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route path="/" element={<Home/>} />          
      </Routes>
    </BrowserRouter>
    </div>
    


  );
}

export default App;
