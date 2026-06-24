import { FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (<footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>
                <FaEnvelope />
            </li>
            <li>
                <FaInstagram />
            </li>
            <li>
                <FaWhatsapp />
            </li>
        </ul>
        <p className={styles.copy_right}>
            <span>Cooperativa de Reciclagem</span> &copy; 2026
        </p>
    </footer>)
}

export default Footer