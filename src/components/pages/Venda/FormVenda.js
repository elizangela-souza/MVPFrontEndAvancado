import { useEffect, useState } from 'react';

import Message from '../../layout/Message.js';

import Input from '../../Form/Input.js';
import Select from '../../Form/Select.js';
import SubmitButton from '../../Form/SubmitButton.js';

import styles from './../Styles.module.css';


function FormVenda({ handleSubmit, btnText, recordData }) {

    const [categorias, setCategorias] = useState([]);
    const [registro, setRegistro] = useState(recordData || {});
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (recordData) {
            setRegistro(recordData);
        }
    }, [recordData]);

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
    e.preventDefault();

    if (!registro.cnpj || !registro.categoria || !registro.data_venda || !registro.kg_material) {
      setErrorMsg("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    setErrorMsg("");
    handleSubmit(registro);
  };

    function handleChange(e) {
        setRegistro({ ...registro, [e.target.name]: e.target.value })
        console.log(registro)
    }

    function handleCategory(e) {
        setRegistro({
            ...registro,
            categoria: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            },
        })
    }
    
    const isFormValid = registro.cnpj && registro.categoria && registro.data_venda && registro.kg_material;

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="CNPJ do cliente"
                name="cnpj"
                handleOnChange={handleChange}
                placeholder="Digite o cnpj sem caracteres especiais"
                value={registro.cnpj || ''}
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
                text="Data da venda"
                name="data_venda"
                handleOnChange={handleChange}
                min="1900-01-01"
                max="3000-12-31"
                value={registro.data_venda || ''}
            />
            <Input
                type="number"
                text="Digite a quantidade (Kg) do material triado"
                name="kg_material"
                handleOnChange={handleChange}
                min="0"
                step="0.1"
                value={registro.kg_material || ''}
            />
            {errorMsg && <Message type="error" msg={errorMsg} />}
            <SubmitButton text={btnText} disabled={!isFormValid}/>
        </form>
    )
}

export default FormVenda;