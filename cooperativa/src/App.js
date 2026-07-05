import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/pages/Home/Home.js';
import Cooperado from './components/pages/Cooperado/Cooperado.js';
import Estoque from './components/pages/Estoque/Estoque.js';
import Triagem from './components/pages/Triagem/Triagem.js';
import TableEstoque from './components/pages/Estoque/TableEstoque.js';
import TableCooperado from './components/pages/Cooperado/TableCooperado.js';
import TableTriagem from './components/pages/Triagem/TableTriagem.js';
import NotFound from './components/pages/NotFound/NotFound.js';

import MainLayout from './components/layout/MainLayout.js';
import EmptyLayout from './components/layout/EmptyLayout.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>    
            <Route index element={<Home />} />
            <Route path="/cooperado" element={<Cooperado />} />
            <Route path="/estoque" element={<Estoque />} />
            <Route path="/triagem" element={<Triagem />} />
            <Route path="/registrosEstoque" element={<TableEstoque />} />
            <Route path="/registrosCooperado" element={<TableCooperado />} />
            <Route path="/registrosTriagem" element={<TableTriagem />} />
        </Route>

        <Route element={<EmptyLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
