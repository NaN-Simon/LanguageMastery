import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from './pages/FavoritesPage';
import Navigation from './components/Navigation';
import TranslatePage from './pages/TranslatePage';

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<TranslatePage/>}/>
      <Route path="/favorites" element={<FavoritesPage/>}/>
    </Routes>
    </>
  );
}

export default App;
