import { Link } from 'react-router-dom';

import Container from './Container';

import styles from './Navbar.module.css';
import logo from '../../img/logo.png';

function Navbar() {
    return (
        <nav class={styles.navbar}>
            <Container customClass="min-height">
                <Link to="/">
                    <img src={logo} alt="Banner com a logo da coopperativa de reciclagem" />
                </Link>
                <ul class={styles.list}>
                    <li class={styles.item}>
                        <Link to="/">Início</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/cooperado">Cooperado</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/estoque">Estoque</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/triagem">Triagem</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar