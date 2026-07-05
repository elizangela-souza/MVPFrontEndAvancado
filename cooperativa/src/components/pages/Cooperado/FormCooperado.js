import { useState } from 'react';

import Input from '../../Form/Input.js'
import SubmitButton from '../../Form/SubmitButton.js';

import styles from './../Styles.module.css';


function FormCooperado({ handleSubmit, btnText, recordData }) {
    const [registro, setRegistro] = useState(recordData || {})

    const submit = (e) => {
        e.preventDefault()
        console.log(registro)
        handleSubmit(registro)
    }

    function handleChange(e) {
        setRegistro({ ...registro, [e.target.name]: e.target.value })
        console.log(registro)
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome"
                name="nome"
                handleOnChange={handleChange}
                placeholder="Digite o nome completo"
                value={registro.nome ? registro.nome : ''}
            />
            <Input
                type="text"
                text="Matrícula"
                name="matricula"
                handleOnChange={handleChange}
                placeholder="Digite a matrícula CXXXXX"
                value={registro.matricula ? registro.matricula : ''}
            />
            <Input
                type="text"
                text="CPF"
                name="cpf"
                handleOnChange={handleChange}
                placeholder="Digite somente números"
                value={registro.cpf ? registro.cpf : ''}
            />
            <Input
                type="date"
                text="Data de nascimento"
                name="data_nasc"
                handleOnChange={handleChange}
                min="1900-01-01"
                max="3000-12-31"
                value={registro.data_nasc ? registro.data_nasc : ''}
            />
            <Input
                type="text"
                text="Número do celular"
                name="celular"
                handleOnChange={handleChange}
                placeholder="(99)99999-9999"
                value={registro.celular ? registro.celular : ''}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default FormCooperado