import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Message from '../../layout/Message.js';
import Container from '../../layout/Container.js';
import LinkButton from '../../layout/LinkButton.js';
import Loading from '../../layout/Loading.js';
import Table from '../../layout/Table.js';

import styles from './../Styles.module.css';

function TableCooperado() {
  const [registros, setRegistros] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const message = location.state?.message;

  const columns = [
    { header: "Matrícula", acessor: "matricula" },
    { header: "Nome", acessor: "nome" },
    { header: "CPF", acessor: "cpf" },
    { header: "Data de nascimento", acessor: "data_nasc" },
    { header: "Contato", acessor: "celular" }
  ]

  useEffect(() => {
     setTimeout(() => {
      fetch('http://localhost:5000/cooperados', {
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
    }, 1000)
  }, [])

  return (
    <Container customClass="min-height">
      <div className={styles.registro_container}>
        <div className={styles.title_container}>
          <h1> Lista de Cooperados/as</h1>
          <LinkButton to="/Cooperado" text="Novo registro" />
        </div>
        {message && <Message type="sucess" msg={message} />}
        <Container customClass="start">
           {loading && <Loading />}
          {!loading && registros.length > 0 &&
            <Table columns={columns} data={registros} />
          }
        </Container>
      </div>
    </Container>
  )
}

export default TableCooperado;
