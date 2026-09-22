import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Message from '../../layout/Message.js';
import Container from '../../layout/Container.js';
import LinkButton from '../../layout/LinkButton.js';
import Loading from '../../layout/Loading.js';
import Table from '../../layout/Table.js';
import Modal from "../../Form/Modal.js";

import styles from './../Styles.module.css';

function TableCooperado() {
  const [registros, setRegistros] = useState([]);
  const [registroSelecionado, setRegistroSelecionado] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [registroMsg, setRegistroMsg] = useState('');

  const location = useLocation();
  const message = location.state?.message;

  const navigate = useNavigate()

  const columns = [
    { header: "Matrícula", accessor: "matricula" },
    { header: "Nome", accessor: "nome" },
    { header: "CPF", accessor: "cpf" },
    {
      header: "Data de nascimento", accessor: "data_nascimento", render: (row) => {
        const date = new Date(row.data_nascimento);
        return isNaN(date) ? '-' : date.toLocaleDateString('pt-BR');
      }
    },
    { header: "Contato", accessor: "telefone" }
  ]

  useEffect(() => {
    setTimeout(() => {
      fetch('http://127.0.0.1:5000/buscar_cooperados', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Resposta da API:", data);
          setRegistros(data.cooperados);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err)
          setLoading(false);
        })
    }, 1000)
  }, [])

  const handleEdit = (row) => {
    navigate(`/cooperado/editar/${row.id}`)
  };

  const handleDeleteClick = (row) => {
    setRegistroSelecionado(row);
    setShowModal(true);
  };

  const confirmDelete = (row) => {
    fetch(`http://127.0.0.1:5000/deletar_cooperado?id=${row.id}`, {
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
          <h1> Lista de Cooperados/as</h1>
          <LinkButton to="/Cooperado" text="Novo registro" />
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
            <p className={styles.no_records}>Não há registros de cooperados!</p>
          )}
        </Container>
      </div>
    </Container>
  )
}

export default TableCooperado;
