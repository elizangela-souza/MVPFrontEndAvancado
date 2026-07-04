import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/pages/Home/Home.js';
import Cooperado from './components/pages/Cooperado/Cooperado.js';
import Estoque from './components/pages/Estoque/Estoque.js';
import Triagem from './components/pages/Triagem/Triagem.js';
import Registros from './components/pages/Registros/Registros.js'

import Container from './components/layout/Container.js';
import Navbar from './components/layout/Navbar.js';
import Footer from './components/layout/Footer.js';

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
            <Route path="/registros" element={<Registros />} />
          </Route>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
