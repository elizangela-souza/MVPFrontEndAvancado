import { useNavigate } from 'react-router-dom';

import LinkButton from '../../layout/LinkButton.js';
import Container from '../../layout/Container.js';

import FormTriagem from './FormTriagem.js'
import styles from './../Styles.module.css';

function Triagem() {
    const navigate = useNavigate()

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
                navigate('/registrosTriagem', { state: { message: 'Registro cadastrado com sucesso!' } })
            })
            .catch(err => console.log(err))
    }

    return (
        <Container customClass="min-height">
            <div className={styles.page_container}>
                <h1>Triagem</h1>
                <p>Cadastre o registro da triagem realizada.</p>
                <FormTriagem handleSubmit={createPost} btnText="Cadastrar triagem" />
                <LinkButton to="/registrosTriagem" text="Consultar Triagens" />
            </div>
        </Container>
    )
}

export default Triagem