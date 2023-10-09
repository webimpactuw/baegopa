import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import { AppetizersPage, CombosPage, EntreesPage, AYCEPage, SidesPage, DrinksPage, SpecialsPage } from './MenuPage';
import TOS from './TOS';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/menu/appetizers" element={<AppetizersPage />} />
        <Route path="/menu/entrees" element={<EntreesPage />} />
        <Route path="/menu/combos" element={<CombosPage />} />
        <Route path="/menu/ayce" element={<AYCEPage />} />
        <Route path="/menu/sides" element={<SidesPage />} />
        <Route path="/menu/drinks" element={<DrinksPage />} />
        <Route path="/menu/specials" element={<SpecialsPage />} />
        <Route path="/TOS" element={<TOS />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
