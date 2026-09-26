import { useEffect, useState } from 'react';

import Message from '../../layout/Message.js';

import Input from '../../Form/Input.js';
import Select from '../../Form/Select.js';
import SubmitButton from '../../Form/SubmitButton.js';

import styles from './../Styles.module.css';

import { MATERIAL_CATEGORIAS } from '../../utils/materialCategorias.js';


function FormTriagem({ handleSubmit, btnText, recordData }) {


    const [categorias, setCategorias] = useState([]);
    const [registro, setRegistro] = useState(recordData || {});
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (recordData) {
            setRegistro(recordData);
        }
    }, [recordData]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000//buscar_materiais", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                const backendCategorias = (data.materiais || []).map((cat) => ({
                    id: cat.codigo,
                    name: cat.categoria,
                    valor_kg: cat.valor_kg
                }));

                const merged = [
                    ...MATERIAL_CATEGORIAS,
                    ...backendCategorias.filter(
                        (cat) => !MATERIAL_CATEGORIAS.some((fixed) => fixed.id === cat.id)
                    )
                ];

                setCategorias(merged);
            })
            .catch(err => console.log(err));
    }, []);

    const submit = (e) => {
        e.preventDefault();

        if (!registro.matricula || !registro.categoria || !registro.data_triagem || !registro.kg_material) {
            setErrorMsg("Por favor, preencha todos os campos antes de enviar.");
            return;
        }

        setErrorMsg("");
        handleSubmit(registro);
    };

    function handleChange(e) {
        setRegistro({ ...registro, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        const selectedId = e.target.value;
        
        const selectedOption = categorias.find(cat => String(cat.id) === String(selectedId));

        const selected = {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
            valor_kg: selectedOption ? selectedOption.valor_kg : 0
        };

        setRegistro({
            ...registro,
            categoria: selected,
        });

        fetch("http://127.0.0.1:5000/cadastrar_material", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                codigo: selected.id,
                categoria:selected.name,
                quantidade_kg: 0,
                valor_kg: selected.valor_kg
            })
        })
            .then((resp) => resp.json())
            .then((data) => {
                if(data.error) {
                    console.log("Categoria já cadastrada:", data.error);
                } else {
                    console.log("Material cadastrado:", data);
                }
            })
            .catch((err) => console.error("Erro ao cadastrar material", err));
    }

        const isFormValid = registro.matricula && registro.categoria && registro.data_triagem && registro.kg_material;

        return (
            <form onSubmit={submit} className={styles.form}>
                <Input
                    type="text"
                    text="Matrícula do cooperado que realizou a triagem"
                    name="matricula"
                    handleOnChange={handleChange}
                    placeholder="Digite a matrícula CXXXXX"
                    value={registro.matricula || ''}
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
                    value={registro.data_triagem || ''}
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
                <SubmitButton text={btnText} disabled={!isFormValid} />
            </form>
        )
    }

    export default FormTriagem;