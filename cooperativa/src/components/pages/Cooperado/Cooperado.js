import Form from '../../Form/Form.js'
import styles from './Cooperado.module.css'; 

function Cooperado() {
    return (
        <div className={styles.cooperado_container}>
            <h1>Cadastrar Cooperado/a:</h1>
            <p>Cadastre um cooperado/a para depois registrar suas triagens.</p>
            <Form btnText="Cadastrar Cooperado/a"/>
        </div>
    )
}

export default Cooperado