import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import MenuPage from './MenuPage';
import AYCE from './AYCE';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/ayce" element={<AYCE />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
