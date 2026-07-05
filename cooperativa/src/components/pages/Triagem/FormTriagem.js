import { useEffect, useState } from 'react';

import Input from '../../Form/Input.js';
import Select from '../../Form/Select.js';
import SubmitButton from '../../Form/SubmitButton.js';

import styles from './../Styles.module.css';


function FormTriagem({handleSubmit, btnText, recordData}) {

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
            <Input 
            type="text" 
            text="Matrícula do cooperado que realizou a triagem" 
            name="matricula" 
            handleOnChange={handleChange}
            placeholder="Digite a matrícula CXXXXX"
            value={registro.matricula ? registro.matricula : ''}
            />
            <Select 
            text="Selecione a categoria do material"
            name="categoria"
            options={categorias}
            handleOnChange={handleCategory}
            value={registro.categoria ? registro.categoria.id : ''}
            />
            <Input 
            type="date" 
            text="Data da triagem" 
            name="data_triagem"
            handleOnChange={handleChange}
            min="1900-01-01" 
            max="3000-12-31"
            value={registro.data_triagem ? registro.data_triagem : ''}
            />
            <Input 
            type="number" 
            text="Digite a quantidade (Kg) do material triado" 
            name="kg_material" 
            handleOnChange={handleChange}
            min="0"
            step="0.1"
            value={registro.kg_material ? registro.kg_material : ''}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default FormTriagem