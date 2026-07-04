import FormTriagem from './FormTriagem.js'
import styles from './../Styles.module.css'; 

function Triagem() {
    return(
        <div className={styles.page_container}>
            <h1>Triagem</h1>
            <p>Cadastre o registro da triagem realizada.</p>
            <FormTriagem btnText="Cadastrar triagem"/>
        </div>
    )
}

export default Triagem