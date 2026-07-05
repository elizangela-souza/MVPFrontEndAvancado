import { useNavigate } from 'react-router-dom';

import LinkButton from '../../layout/LinkButton.js';

import FormEstoque from './FormEstoque.js';
import styles from './../Styles.module.css';


function Estoque() {

    const navigate = useNavigate()

    function createPost(registro) {

        fetch('http://localhost:5000/registros', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registro),
        })
            .then((resp) => resp.json())
            .then((data) => {
               console.log(data)
               navigate('/registrosEstoque', { state: {message: 'Registro cadastrado com sucesso!'}})
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.page_container}>
            <h1>Estoque</h1>
            <p>Cadastre os materiais recicláveis que compõem o estoque e sua quantidade inicial.</p>
            <FormEstoque handleSubmit={createPost} btnText="Cadastrar Material" />
            <LinkButton to="/registrosEstoque" text="Consultar Estoque" />
        </div>
    )
}

export default Estoque



