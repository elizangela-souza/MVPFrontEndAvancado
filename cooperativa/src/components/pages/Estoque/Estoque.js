import FormEstoque from './FormEstoque.js'
import styles from './../Styles.module.css';

function Estoque() {
    return (
        <div className={styles.page_container}>
            <h1>Estoque</h1>
            <p>Cadastre os materiais recicláveis que compõem o estoque e sua quantidade inicial.</p>
            <FormEstoque btnText="Cadastrar Material" />
        </div>
    )
}

export default Estoque



