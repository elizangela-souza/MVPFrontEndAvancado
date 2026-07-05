import { useNavigate } from 'react-router-dom';

import LinkButton from '../../layout/LinkButton.js';

import FormCooperado from './FormCooperado.js'
import styles from './../Styles.module.css';

function Cooperado() {
    const navigate = useNavigate()

    function createPost(registro) {

        fetch('http://localhost:5000/cooperados', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registro),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/registrosCooperado', { state: { message: 'Cooperado/a registrado com sucesso!' } })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.page_container}>
            <h1>Cooperado/a</h1>
            <p>Cadastre um cooperado/a para depois registrar suas triagens.</p>
            <FormCooperado handleSubmit={createPost} btnText="Cadastrar Cooperado/a" />
            <LinkButton to="/registrosCooperado" text="Consultar Cooperados/as" />
        </div>
    )
}

export default Cooperado