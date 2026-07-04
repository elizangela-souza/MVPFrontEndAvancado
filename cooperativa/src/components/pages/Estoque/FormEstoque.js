import { useState } from 'react';

import Input from '../../Form/Input.js';
import Select from '../../Form/Select.js';
import SubmitButton from '../../Form/SubmitButton.js';

import styles from './../Styles.module.css';

function FormEstoque({btnText}) {

    const [categories, setCategories] = useState([])

    fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return (
        <form className={styles.form}>
            <Select 
            text="Selecione a categoria do material"
            name="categoria"
            />
            <Input 
            type="number" 
            text="Digite a quantidade (Kg)" 
            name="quantidade_kg" 
            min="0"
            step="0.1"
            />
            <Input 
            type="number" 
            text="Digite o valor($) por Kg" 
            name="valor_kg" 
            min="0"
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default FormEstoque