import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import AllItems from './pages/AllItems';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AllItems />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
