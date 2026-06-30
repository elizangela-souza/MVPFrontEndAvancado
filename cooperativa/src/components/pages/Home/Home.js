import styles from './Home.module.css';
import cooperados from '../../../img/cooperados.jpg'
import LinkButton from '../../layout/LinkButton.js';

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo <span>Cooperado/a</span></h1>
            <p>Comece a registrar as informações da sua cooperativa agora mesmo!</p>
            <p>Aqui você pode registrar e consultar as informações base para o gerenciamento da cooperativa de reciclagem.</p>

            <h2>O que você encontra aqui:</h2>
            <ul>
                <li>Menu <span>Cooperados/as</span>: Incluir, consultar, editar e excluir registro do/a cooperado/a</li>
                <li>Menu <span>Estoque</span>: Incluir, consultar, editar e excluir registro do material reciclável</li>
                <li>Menu <span>Triagem</span>: Incluir e consultar os registros de triagem</li>
            </ul>
            <LinkButton to="/Triagem" text="Registrar triagem"/>
            <img src={cooperados} alt="Desenho de pessoas separando o lixo para reciclagem"/>
            <h3>"Quando a pessoa encesta o lixo, e na lixeira certa, é ponto para a cidadania e vitória para todos".</h3>
        </section>
    )
}
export default Home