import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/pages/Home/Home';
import Cooperado from './components/pages/Cooperado/Cooperado';
import Estoque from './components/pages/Estoque/Estoque';
import Triagem from './components/pages/Triagem/Triagem';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Container customClass="min-height"/>}>
            <Route index element={<Home />} />
            <Route path="/cooperado" element={<Cooperado />} />
            <Route path="/estoque" element={<Estoque />} />
            <Route path="/triagem" element={<Triagem />} />
          </Route>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
