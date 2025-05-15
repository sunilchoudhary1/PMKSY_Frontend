
import Login from './auth/login';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Login />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
