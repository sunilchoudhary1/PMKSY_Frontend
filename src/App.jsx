
import Login from './auth/login';
import LoginOperator from './auth/LoginOperator';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/LoginOperator" element={<LoginOperator />} />
       <Route path="/login" element={<Login />} />

    </Routes>
    
    </BrowserRouter>
  )
}

export default App
