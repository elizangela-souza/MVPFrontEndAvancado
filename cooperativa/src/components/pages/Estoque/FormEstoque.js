import { useEffect, useState } from 'react';

import Input from '../../Form/Input.js';
import Select from '../../Form/Select.js';
import SubmitButton from '../../Form/SubmitButton.js';

import styles from './../Styles.module.css';

function FormEstoque({ handleSubmit, btnText, recordData }) {

    const [categories, setCategories] = useState([])
    const [record, setRecord] = useState(recordData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        console.log(record)
        handleSubmit(record)
    }

    function handleChange(e) {
        setRecord({ ...record, [e.target.name]: e.target.value })
        console.log(record)
    }

    function handleCategory(e) {
        setRecord({ ...record, 
            category: {
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
            options={categories}
            handleOnChange={handleCategory}
            value={record.category ? record.category.id : ''}
        />
        <Input
            type="number"
            text="Digite a quantidade (Kg)"
            name="quantidade"
            min="0"
            step="0.1"
            handleOnChange={handleChange}
            value={record.quantidade ? record.quantidade : ''}
        />
        <Input
            type="number"
            text="Digite o valor($) por Kg"
            name="valor"
            min="0"
            handleOnChange={handleChange}
            value={record.valor ? record.valor : ''}
        />
        <SubmitButton text={btnText} />
    </form>
)
}

export default FormEstoque