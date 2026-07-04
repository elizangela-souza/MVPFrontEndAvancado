import FormCooperado from './FormCooperado.js'
import styles from './../Styles.module.css'; 

function Cooperado() {
    return (
        <div className={styles.page_container}>
            <h1>Cooperado/a</h1>
            <p>Cadastre um cooperado/a para depois registrar suas triagens.</p>
            <FormCooperado btnText="Cadastrar Cooperado/a"/>
        </div>
    )
}

export default Cooperado