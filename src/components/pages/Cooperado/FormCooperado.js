import { useEffect, useState } from 'react';

import Message from '../../layout/Message.js';

import Input from '../../Form/Input.js'
import SubmitButton from '../../Form/SubmitButton.js';

import styles from './../Styles.module.css';


function FormCooperado({ handleSubmit, btnText, recordData }) {
    const [registro, setRegistro] = useState(recordData || {})
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (recordData) {
            const registroFormatado = {
                ...recordData,
                data_nascimento: recordData.data_nascimento
                    ? new Date(recordData.data_nascimento).toISOString().split('T')[0]
                    : ''
            }
            setRegistro(registroFormatado);
        }
        console.log("RECORDDATA", recordData);
    }, [recordData]);


    const submit = (e) => {
        e.preventDefault();
        if (!registro.nome || !registro.matricula || !registro.cpf || !registro.data_nascimento || !registro.telefone) {
            setErrorMsg("Por favor, preencha todos os campos antes de enviar.");
            return;
        }
        setErrorMsg("");
        handleSubmit(registro);
    };

    function handleChange(e) {
        setRegistro({ ...registro, [e.target.name]: e.target.value })
    }

    const isFormValid = registro.nome && registro.matricula && registro.cpf && registro.data_nascimento && registro.telefone;

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome"
                name="nome"
                handleOnChange={handleChange}
                placeholder="Digite o nome completo"
                value={registro.nome || ''}
            />
            <Input
                type="text"
                text="Matrícula"
                name="matricula"
                handleOnChange={handleChange}
                placeholder="Digite a matrícula CXXXXX"
                value={registro.matricula || ''}
            />
            <Input
                type="text"
                text="CPF"
                name="cpf"
                handleOnChange={handleChange}
                placeholder="Digite somente números"
                value={registro.cpf || ''}
            />
            <Input
                type="date"
                text="Data de nascimento"
                name="data_nascimento"
                handleOnChange={handleChange}
                min="1900-01-01"
                max="3000-12-31"
                value={registro.data_nascimento || ''}
            />
            <Input
                type="text"
                text="Número de telefone"
                name="telefone"
                handleOnChange={handleChange}
                placeholder="(99)99999-9999"
                value={registro.telefone || ''}
            />
            {errorMsg && <Message type="error" msg={errorMsg} />}
            <SubmitButton text={btnText} disabled={!isFormValid} />
        </form>
    )
}

export default FormCooperado;