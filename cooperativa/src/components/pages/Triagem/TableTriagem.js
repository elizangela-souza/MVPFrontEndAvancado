import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Message from '../../layout/Message.js';
import Container from '../../layout/Container.js';
import LinkButton from '../../layout/LinkButton.js';
import Table from '../../layout/Table.js';

import styles from './../Styles.module.css';

function TableTriagem() {
  const [registros, setRegistros] = useState([]);

  const location = useLocation();
  const message = location.state?.message;

  const columns = [
    { header: "ID", acessor: "id" },
    { header: "Responsável", acessor: "matricula" },
    { header: "Categoria", acessor: "categoria.name", render: (row) => row.categoria.name },
    { header: "Quantidade(Kg)", acessor: "kg_material" },
    { header: "Data", acessor: "data_triagem" }
  ]

  useEffect(() => {
    fetch('http://localhost:5000/triagens', {
      method: 'GET',
      headers: {
        'Content-Type': 'aplication/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRegistros(data);
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.registro_container}>
      <div className={styles.title_container}>
        <h1>Triagens realizadas</h1>
        <LinkButton to="/Triagem" text="Novo registro" />
      </div>
      {message && <Message type="sucess" msg={message} />}
      <Container customClass="start">
        {registros.length > 0 &&  
            <Table columns={columns} data={registros} />
        }
      </Container>
    </div>
  )
}

export default TableTriagem;
