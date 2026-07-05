import { useEffect, useState } from 'react';

import Input from '../../Form/Input.js';
import Select from '../../Form/Select.js';
import SubmitButton from '../../Form/SubmitButton.js';

import styles from './../Styles.module.css';

function FormEstoque({ handleSubmit, btnText, recordData }) {

    const [categorias, setCategorias] = useState([])
    const [registro, setRegistro] = useState(recordData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categorias", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategorias(data)
            })
            .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        console.log(registro)
        handleSubmit(registro)
    }

    function handleChange(e) {
        setRegistro({ ...registro, [e.target.name]: e.target.value })
        console.log(registro)
    }

    function handleCategory(e) {
        setRegistro({ ...registro, 
            categoria: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
            },
        })
    }

return (
    <form onSubmit={submit} className={styles.form}>
        <Select
            text="Selecione a categoria do material"
            name="categoria"
            options={categorias}
            handleOnChange={handleCategory}
            value={registro.categoria ? registro.categoria.id : ''}
        />
        <Input
            type="number"
            text="Digite a quantidade (Kg)"
            name="quantidade"
            min="0"
            step="0.1"
            handleOnChange={handleChange}
            value={registro.quantidade ? registro.quantidade : ''}
        />
        <Input
            type="number"
            text="Digite o valor($) por Kg"
            name="valor"
            min="0"
            handleOnChange={handleChange}
            value={registro.valor ? registro.valor : ''}
        />
        <SubmitButton text={btnText} />
    </form>
)
}

export default FormEstoque