import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Message from '../../layout/Message.js';
import Container from '../../layout/Container.js';
import Loading from '../../layout/Loading.js';
import LinkButton from '../../layout/LinkButton.js';
import Table from '../../layout/Table.js';

import styles from './../Styles.module.css';

function TableEstoque() {
  const [registros, setRegistros] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const message = location.state?.message;

  const columns = [
    { header: "ID", acessor: "categoria.id", render: (row) => row.categoria.id },
    { header: "Categoria", acessor: "categoria.name", render: (row) => row.categoria.name },
    { header: "Quantidade", acessor: "quantidade" },
    { header: "Valor", acessor: "valor" }
  ]

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/registros', {
        method: 'GET',
        headers: {
          'Content-Type': 'aplication/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRegistros(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err)
          setLoading(false);
        })
    }, 5000)
  }, [])

  return (
    <div className={styles.registro_container}>
      <div className={styles.title_container}>
        <h1> Estoque da Coperativa</h1>
        <LinkButton to="/Estoque" text="Novo registro" />
      </div>
      {message && <Message type="sucess" msg={message} />}
      <Container customClass="start">
        {loading && <Loading />}
        {!loading && registros.length > 0 &&
          <Table columns={columns} data={registros} />
        }     
      </Container>
    </div>
  )
}

export default TableEstoque;
