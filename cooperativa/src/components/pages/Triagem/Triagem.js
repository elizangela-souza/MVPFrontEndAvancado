import { useNavigate } from 'react-router-dom';

import LinkButton from '../../layout/LinkButton.js';

import FormTriagem from './FormTriagem.js'
import styles from './../Styles.module.css';

function Triagem() {
    const navigate = useNavigate()

    function createPost(registro) {

        //Salvar a triagem
        fetch('http://localhost:5000/triagens', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registro),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);

                //Buscar o registro de estoque correspondente
                return fetch(`http://localhost:5000/registros/${registro.categoria.id}`);
            })
            .then((resp) => resp.json())
            .then((estoque) => {
                // 3. Somar a quantidade triada
                const novaQuantidade =
                    parseInt(estoque.quantidade) + parseInt(registro.quantidade);

                // 4. Atualizar o estoque com PATCH
                return fetch(`http://localhost:5000/registros/${estoque.id}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ quantidade: novaQuantidade.toString() }),
                });
            })
            .then(() => {
                //Redirecionar com mensagem de sucesso
                navigate("/registrosTriagem", {
                    state: { message: "Registro de triagem cadastrado com sucesso!" },
                });
            })
            .catch((err) => console.error("Erro:", err));
    }

    return (
        <div className={styles.page_container}>
            <h1>Triagem</h1>
            <p>Cadastre o registro da triagem realizada.</p>
            <FormTriagem handleSubmit={createPost} btnText="Cadastrar triagem" />
            <LinkButton to="/registrosTriagem" text="Consultar Triagens" />
        </div>
    )
}

export default Triagem