import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Message from '../../layout/Message.js';
import Container from '../../layout/Container.js';
import LinkButton from '../../layout/LinkButton.js';
import Loading from '../../layout/Loading.js';
import Table from '../../layout/Table.js';

import styles from './../Styles.module.css';

function TableTriagem({ handleRemove }) {
  const [registros, setRegistros] = useState([]);
  const [loading, setLoading] = useState(true);

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
     setTimeout(() => {
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
          setLoading(false);
        })
        .catch((err) => {
          console.log(err)
          setLoading(false);
        })
    }, 1000)
  }, [])

  const handleEdit = (row) => {
    console.log("Editar registro:", row);
    // aqui você pode abrir um modal ou navegar para uma página de edição
  };

  const handleDelete = (row) => {
    if (window.confirm(`Deseja excluir o registro ${row.id}?`)) {
      fetch(`http://localhost:5000/triagens/${row.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then(() => {
          setRegistros(registros.filter((r) => r.id !== row.id));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container customClass="min-height">
      <div className={styles.registro_container}>
        <div className={styles.title_container}>
          <h1>Triagens realizadas</h1>
          <LinkButton to="/Triagem" text="Novo registro" />
        </div>
        {message && <Message type="sucess" msg={message} />}
        <Container customClass="start">
          {loading && <Loading />}
          {!loading && registros.length > 0 &&
            <Table 
            columns={columns} 
            data={registros}
            onEdit={handleEdit}
            onDelete={handleDelete} 
            />
          }
        </Container>
      </div>
    </Container>
  )
}

export default TableTriagem;
