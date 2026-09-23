import { useEffect, useState } from 'react';

import Message from '../../layout/Message.js';

import Input from '../../Form/Input.js'
import SubmitButton from '../../Form/SubmitButton.js';

import styles from './../Styles.module.css';


function FormCliente({ handleSubmit, btnText, recordData }) {
    const [registro, setRegistro] = useState(recordData || {})
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (recordData) {
            setRegistro(recordData);
        }
    }, [recordData]);


    const submit = (e) => {
    e.preventDefault();
    if (!registro.nome || !registro.cnpj || !registro.cep || !registro.email || !registro.telefone) {
      setErrorMsg("Por favor, preencha todos os campos antes de enviar.");
      return;
    }
    setErrorMsg(""); 
    handleSubmit(registro);
  };

    function handleChange(e) {
        setRegistro({ ...registro, [e.target.name]: e.target.value })
    }

    const isFormValid = registro.nome && registro.cnpj && registro.cep && registro.email && registro.telefone;

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome"
                name="nome"
                handleOnChange={handleChange}
                placeholder="Digite o nome da empresa"
                value={registro.nome || ''}
            />
            <Input
                type="text"
                text="CNPJ"
                name="cnpj"
                handleOnChange={handleChange}
                placeholder="Digite o cnpj sem caracteres especiais"
                value={registro.cnpj || ''}
            />
            <Input
                type="text"
                text="CEP"
                name="cep"
                handleOnChange={handleChange}
                placeholder="Digite somente números"
                value={registro.cep || ''}
            />
            <Input
                type="text"
                text="E-mail"
                name="email"
                handleOnChange={handleChange}
                placeholder="xxxxx@email.com"
                value={registro.email || ''}
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
            <SubmitButton text={btnText} disabled={!isFormValid}/>
        </form>
    )
}

export default FormCliente;