import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import LinkButton from '../../layout/LinkButton.js';
import Container from '../../layout/Container.js';

import FormVenda from './FormVenda.js'
import styles from './../Styles.module.css';

function Venda() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [registro, setRegistro] = useState(null);

    function createPost(registro) {
        fetch('http://localhost:5000/triagens', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registro),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/registrosVenda', { state: { message: 'Registro cadastrado com sucesso!' } })
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/triagens/${id}`)
                .then((resp) => resp.json())
                .then((data) => setRegistro(data))
                .catch(err => console.log(err));
        }
    }, [id]);

    function updatePost(registro) {
        fetch(`http://localhost:5000/triagens/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registro),
        })
            .then((resp) => resp.json())
            .then((data) => {
                navigate('/registrosVenda', { state: { message: 'Registro atualizado com sucesso!' } });
            })
            .catch(err => console.log(err));
    }

    return (
        <Container customClass="min-height">
            <div className={styles.page_container}>
                <h1>Venda</h1>
                <p>Cadastre o registro da venda realizada.</p>
                <FormVenda 
                handleSubmit={id ? updatePost : createPost} 
                btnText={id ? "Salvar alterações" : "Cadastrar venda" }
                recordData={registro}
                />
                <LinkButton to="/registrosTriagem" text="Consultar Vendas" />
            </div>
        </Container>
    )
}

export default Venda; 