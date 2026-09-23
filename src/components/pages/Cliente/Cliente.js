import { useNavigate,  useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import LinkButton from '../../layout/LinkButton.js';
import Container from '../../layout/Container.js';

import FormCliente from './FormCliente.js'
import styles from './../Styles.module.css';

function Cliente() {
    const navigate = useNavigate();
    const { cnpj } = useParams();
    const [registro, setRegistro] = useState(null);

    function createPost(registro) {
        fetch('http://127.0.0.1:5000/cadastrar_cliente', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registro),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    alert(data.error);
                } else {
                    navigate('/registrosCliente', { state: { message:'Cliente registrado com sucesso!' } })
                }         
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (id) {
            fetch(`http://127.0.0.1:5000/buscar_cliente?cnpj=${cnpj}`)
                .then((resp) => resp.json())
                .then((data) => {
                    console.log("Resposta:", data);
                    setRegistro(data);
                })
                .catch(err => console.log(err));
        }
    }, [cnpj]);

    function updatePost(registro) {      
        fetch(`http://127.0.0.1:5000/atualizar_cliente`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registro),
        })
            .then((resp) => resp.json())
            .then((data) => {
                navigate('/registrosCliente', { state: { message: 'Registro atualizado com sucesso!' } });
            })
            .catch(err => console.log(err));
    }

    return (
        <Container customClass="min-height">
            <div className={styles.page_container}>
                <h1>Cliente - Empresa recicladora</h1>
                <p>Cadastre uma empresa para depois registrar as vendas realizadas a ela.</p>
                <FormCliente 
                handleSubmit={cnpj ? updatePost : createPost} 
                btnText={cnpj ? "Salvar alterações" : "Cadastrar Cliente" }
                recordData={registro}
                />
                <LinkButton to="/registrosCliente" text="Consultar Clientes" />
            </div>
        </Container>
    )
}

export default Cliente