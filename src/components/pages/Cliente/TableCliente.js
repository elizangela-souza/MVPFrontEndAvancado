import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Message from '../../layout/Message.js';
import Container from '../../layout/Container.js';
import LinkButton from '../../layout/LinkButton.js';
import Loading from '../../layout/Loading.js';
import Table from '../../layout/Table.js';
import Modal from "../../Form/Modal.js";

import styles from './../Styles.module.css';

function TableCliente() {
  const [registros, setRegistros] = useState([]);
  const [registroSelecionado, setRegistroSelecionado] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [registroMsg, setRegistroMsg] = useState('');

  const location = useLocation();
  const message = location.state?.message;

  const navigate = useNavigate()

  const columns = [
    {header: "CNPJ", acessor: "cnpj"},
    { header: "Nome", acessor: "nome" },
    { header: "CEP", acessor: "cep" },
    { header: "Rua/Avenida", acessor: "logradouro" },
    { header: "Bairro", acessor: "bairro" },
    { header: "Cidade", acessor: "cidade" },
    { header: "UF", acessor: "uf" },
    { header: "E-mail", acessor: "email" },
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

  const handleEdit = (row) => {
    navigate(`/cliente/editar/${row.id}`)
  };

  const handleDeleteClick = (row) => {
    setRegistroSelecionado(row);
    setShowModal(true);
  };

  const confirmDelete = (row) => {
    fetch(`http://localhost:5000/cooperados/${row.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        setRegistros(registros.filter((r) => r.id !== registroSelecionado.id));
        setRegistroMsg('Registro removido com sucesso!');
        setShowModal(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container customClass="min-height">
      <div className={styles.registro_container}>
        <div className={styles.title_container}>
          <h1> Lista de Empresas clientes</h1>
          <LinkButton to="/Cliente" text="Novo registro" />
        </div>
        {message && <Message type="sucess" msg={message} />}
        {registroMsg && <Message type="sucess" msg={registroMsg} />}
        <Container customClass="start">
          {loading && <Loading />}
          {!loading && registros.length > 0 &&
            <Table
              columns={columns}
              data={registros}
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
            />
          }
          {showModal && (
            <Modal
              title="Confirmar exclusão"
              message={`Deseja excluir o registro ${registroSelecionado?.id}?`}
              onConfirm={confirmDelete}
              onCancel={() => setShowModal(false)}
            />
          )}
          {!loading && registros.length === 0 && (
            <p className={styles.no_records}>Não há registros de clientes!</p>
          )}
        </Container>
      </div>
    </Container>
  )
}

export default TableCliente;
