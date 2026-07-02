import Input from './Input.js'
import SubmitButton from './SubmitButton.js';

import styles from './Form.module.css';


function Form({btnText}) {
    return (
        <form className={styles.form}>
            <Input 
            type="text" 
            text="Nome" 
            name="nome" 
            placeholder="Digite o nome completo"
            />
            <Input 
            type="text" 
            text="Matrícula" 
            name="matricula" 
            placeholder="Digite a matrícula CXXXXX"
            />
            <Input 
            type="text" 
            text="CPF" 
            name="cpf" 
            placeholder="Digite somente números"
            />
            <Input 
            type="date" 
            text="Data de nascimento" 
            name="data_nasc" 
            />
            <Input 
            type="text" 
            text="Número do celular" 
            name="celular" 
            placeholder="(99)99999-9999"
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default Form