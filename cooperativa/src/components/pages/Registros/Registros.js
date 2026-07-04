import { useLocation } from "react-router-dom";

import  Message  from "../../layout/Message.js";
import Container from "../../layout/Container.js";
import LinkButton from '../../layout/LinkButton.js';

import styles from "./Registros.module.css";

function Registros() {
  const location = useLocation();
  const message = location.state?.message;

  return (
    <div className={styles.registro_container}>
      <div className={styles.title_container}>
        <h1>Registros da Cooperativa</h1>
        <LinkButton to="/Estoque" text="Registrar estoque"/>
      </div>      
      {message && <Message type="sucess" msg={message} />}
      <Container customClass="start">

      </Container>
    </div>
  );
}

export default Registros;
