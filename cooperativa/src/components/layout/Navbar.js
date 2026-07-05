import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';
import logo from '../../img/logo.png';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <Link to="/">
                    <img src={logo} alt="Banner com a logo da coopperativa de reciclagem" />
                </Link>
                <ul class={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Início</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/cooperado">Cooperado</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/triagem">Triagem</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar