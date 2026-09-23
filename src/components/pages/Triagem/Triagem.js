import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import LinkButton from '../../layout/LinkButton.js';
import Container from '../../layout/Container.js';

import FormTriagem from './FormTriagem.js'
import styles from './../Styles.module.css';

function Triagem() {
    const navigate = useNavigate();
    const [registro] = useState(null);

    function createPost(registro) {
        fetch('http://127.0.0.1:5000/cadastrar_triagem', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id_cooperado: registro.matricula,
                    id_material: parseInt(registro.categoria.id),
                    data_triagem: registro.data_triagem,
                    kg_material: parseFloat(registro.kg_material)
                }
            ),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/registrosTriagem', { state: { message: 'Registro cadastrado com sucesso!' } })
            })
            .catch(err => console.log(err));
    }

    return (
        <Container customClass="min-height">
            <div className={styles.page_container}>
                <h1>Triagem</h1>
                <p>Cadastre o registro da triagem realizada.</p>
                <FormTriagem
                    handleSubmit={createPost}
                    btnText={"Cadastrar triagem"}
                    recordData={registro}
                />
                <LinkButton to="/registrosTriagem" text="Consultar Triagens" />
            </div>
        </Container>
    )
}

export default Triagem;