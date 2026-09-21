import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import LinkButton from '../../layout/LinkButton.js';
import Container from '../../layout/Container.js';

import FormCooperado from './FormCooperado.js'
import styles from './../Styles.module.css';

function Cooperado() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [registro, setRegistro] = useState(null);

    function createPost(registro) {
        console.log("Payload enviado:", registro);
        fetch('http://127.0.0.1:5000/cadastrar_cooperado', {
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
                    navigate('/registrosCooperado', { state: { message: 'Cooperado/a registrado com sucesso!' } })
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (id) {
            fetch(`http://127.0.0.1:5000/buscar_cooperado?matricula=${id}`)
                .then((resp) => resp.json())
                .then((data) => setRegistro(data))
                .catch(err => console.log(err));
        }
    }, [id]);

    function updatePost(registro) {
        fetch(`http://127.0.0.1:5000/atualizar_cooperado`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registro),
        })
            .then((resp) => resp.json())
            .then((data) => {
                navigate('/registrosCooperado', { state: { message: 'Registro atualizado com sucesso!' } });
            })
            .catch(err => console.log(err));
    }

    return (
        <Container customClass="min-height">
            <div className={styles.page_container}>
                <h1>Cooperado/a</h1>
                <p>Cadastre um cooperado/a para depois registrar suas triagens.</p>
                <FormCooperado
                    handleSubmit={id ? updatePost : createPost}
                    btnText={id ? "Salvar alterações" : "Cadastrar Cooperado/a"}
                    recordData={registro}
                />
                <LinkButton to="/registrosCooperado" text="Consultar Cooperados/as" />
            </div>
        </Container>
    )
}

export default Cooperado