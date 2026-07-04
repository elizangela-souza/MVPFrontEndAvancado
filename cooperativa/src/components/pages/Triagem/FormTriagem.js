import Input from '../../Form/Input.js';
import Select from '../../Form/Select.js';
import SubmitButton from '../../Form/SubmitButton.js';

import styles from './../Styles.module.css';


function FormTriagem({btnText}) {
    return (
        <form className={styles.form}>
            <Input 
            type="text" 
            text="Matrícula do cooperado que realizou a triagem" 
            name="matricula" 
            placeholder="Digite a matrícula CXXXXX"
            />
            <Select 
            text="Selecione a categoria do material"
            name="categoria"
            />
            <Input 
            type="date" 
            text="Data da triagem" 
            name="data_triagem"
            min="1900-01-01" 
            max="3000-12-31"
            />
            <Input 
            type="number" 
            text="Digite a quantidade (Kg) do material triado" 
            name="kg_material" 
            min="0"
            step="0.1"
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default FormTriagem