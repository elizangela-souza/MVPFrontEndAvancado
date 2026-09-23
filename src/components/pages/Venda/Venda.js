import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import LinkButton from '../../layout/LinkButton.js';
import Container from '../../layout/Container.js';

import FormVenda from './FormVenda.js'
import styles from './../Styles.module.css';

function Venda() {
    const navigate = useNavigate()
    const [registro] = useState(null);

    function createPost(registro) {
        fetch('http://127.0.0.1:5000/cadastrar_venda', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id_cliente: registro.cnpj,
                    id_material: parseInt(registro.categoria.id),
                    data_venda: registro.data_venda,
                    kg_material: parseFloat(registro.kg_material)
                }
            ),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/registrosVenda', { state: { message: 'Registro cadastrado com sucesso!' } })
            })
            .catch(err => console.log(err))
    }

    return (
        <Container customClass="min-height">
            <div className={styles.page_container}>
                <h1>Venda</h1>
                <p>Cadastre o registro da venda realizada.</p>
                <FormVenda 
                handleSubmit={createPost} 
                btnText={"Cadastrar venda"}
                recordData={registro}
                />
                <LinkButton to="/registrosTriagem" text="Consultar Vendas" />
            </div>
        </Container>
    )
}

export default Venda; 