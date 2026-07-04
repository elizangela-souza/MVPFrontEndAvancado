import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Message from '../../layout/Message.js';
import Container from '../../layout/Container.js';
import LinkButton from '../../layout/LinkButton.js';
import RegistrosCard from './RegistrosCard.js';

import styles from './RegistrosEstoque.module.css';

function Registros() {
  const [records, setRecords] = useState([]);

  const location = useLocation();
  const message = location.state?.message;

  useEffect(() => {
    fetch('http://localhost:5000/records', {
      method: 'GET',
      headers: {
        'Content-Type': 'aplication/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecords(data);
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.registro_container}>
      <div className={styles.title_container}>
        <h1> Estoque da Coperativa</h1>
        <LinkButton to="/Estoque" text="Novo registro" />
      </div>
      {message && <Message type="sucess" msg={message} />}
      <Container customClass="start">
        {records.length > 0 &&  
            <RegistrosCard records={records}/>
        }
      </Container>
    </div>
  )
}

export default Registros;
