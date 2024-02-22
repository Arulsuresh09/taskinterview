import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/LoginPage'; 
import Register from './components/Register';
import Home from './pages/Homepage';
import ProtectedRoute from './safety/ProtectedRoute';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} /> {/* Use LoginPage component here */}
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
