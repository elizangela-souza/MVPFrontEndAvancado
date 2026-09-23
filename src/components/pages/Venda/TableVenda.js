import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Message from '../../layout/Message.js';
import Container from '../../layout/Container.js';
import LinkButton from '../../layout/LinkButton.js';
import Loading from '../../layout/Loading.js';
import Table from '../../layout/Table.js';

import styles from './../Styles.module.css';

import { MATERIAL_CATEGORIAS } from '../../utils/materialCategorias.js';

function TableVenda() {
  const [registros, setRegistros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [registroMsg] = useState('');

  const location = useLocation();
  const message = location.state?.message;

  const columns = [
    { header: "Código", accessor: "id_registro" },
    { header: "Empresa cliente", accessor: "id_cliente" },
    { header: "Categoria", accessor: "categoria.name", render: (row) => {
        const cat = MATERIAL_CATEGORIAS.find(c => c.id === row.id_material)
        return cat ? cat.name : row.id_material
      } 
    },
    { header: "Quantidade(Kg)", accessor: "kg_material" },
    {
      header: "Data", acessor: "data_venda", render: (row) => {
        const date = new Date(row.data_venda);
        return isNaN(date) ? '-' : date.toLocaleDateString('pt-BR');
      }
    }
  ]

  useEffect(() => {
    setTimeout(() => {
      fetch('http://127.0.0.1:5000/buscar_vendas', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Vendas:", data);
          setRegistros(data.vendas || []);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err)
          setLoading(false);
        })
    }, 1000)
  }, [])

  return (
    <Container customClass="min-height">
      <div className={styles.registro_container}>
        <div className={styles.title_container}>
          <h1>Vendas realizadas</h1>
          <LinkButton to="/Venda" text="Novo registro" />
        </div>
        {message && <Message type="sucess" msg={message} />}
        {registroMsg && <Message type="sucess" msg={registroMsg} />}
        <Container customClass="start">
          {loading && <Loading />}
          {!loading && registros.length > 0 &&
            <Table
              columns={columns}
              data={registros}
              showActions={false}
            />
          }
          {!loading && registros.length === 0 && (
            <p className={styles.no_records}>Não há registros de triagens!</p>
          )}
        </Container>
      </div>
    </Container>
  )
}

export default TableVenda;