import { useNavigate } from 'react-router-dom';

import FormEstoque from './FormEstoque.js';
import styles from './../Styles.module.css';

function Estoque() {

    const navigate = useNavigate()

    function createPost(record) {
        //inicializar o custo e os services
        record.cost = 0
        record.services = []

        fetch("http://localhost:5000/records", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(record),
        })
            .then((resp) => resp.json())
            .then((data) => {
               console.log(data)
               navigate('/registros', { state: {message: 'Registro cadastrado com sucesso!'}})
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.page_container}>
            <h1>Estoque</h1>
            <p>Cadastre os materiais recicláveis que compõem o estoque e sua quantidade inicial.</p>
            <FormEstoque handleSubmit={createPost} btnText="Cadastrar Material" />
        </div>
    )
}

export default Estoque



