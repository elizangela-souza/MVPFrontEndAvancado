import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/pages/Home/Home.js';
import Cooperado from './components/pages/Cooperado/Cooperado.js';
import Triagem from './components/pages/Triagem/Triagem.js';
import Cliente from './components/pages/Cliente/Cliente.js';
import Venda from './components/pages/Venda/Venda.js';
import TableCooperado from './components/pages/Cooperado/TableCooperado.js';
import TableTriagem from './components/pages/Triagem/TableTriagem.js';
import TableCliente from './components/pages/Cliente/TableCliente.js';
import TableVenda from './components/pages/Venda/TableVenda.js';
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
            <Route path="/cooperado/editar/:matricula" element={<Cooperado />} />
            <Route path="/registrosCooperado" element={<TableCooperado />} />
            <Route path="/triagem" element={<Triagem />} />
            <Route path="/registrosTriagem" element={<TableTriagem />} />
            <Route path="/cliente" element={<Cliente />} />
            <Route path="/cliente/editar/:cnpj" element={<Cliente />} />
            <Route path="/registrosCliente" element={<TableCliente />} />
            <Route path="/venda" element={<Venda />} />
            <Route path="/registrosVenda" element={<TableVenda />} />
        </Route>

        <Route element={<EmptyLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
