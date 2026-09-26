import Container from '../../layout/Container.js';

import styles from './OrientacoesCard.module.css';

function OrientacoesCard() {
    return (
        <Container customClass="card">
            <section className={styles.card_container}>
                <h2 className={styles.title}>Orientações de Uso</h2>
                <ul>
                    <li>Consulte os gráficos abaixo para acompanhar o estoque dos materiais e as vendas.</li>
                    <li>Menu <span>Cooperado</span>: Incluir, consultar, editar e excluir registro do/a cooperado/a</li>
                    <li>Menu <span>Triagem</span>: Incluir e consultar os registros de triagem</li>
                    <li>Menu <span>Cliente</span>: Incluir, consultar, editar e excluir registro de cliente</li>
                    <li>Menu Cliente em <span>Consultar Clientes</span>: Gerar PDF para imprimir Etique de envio dos materiais</li>
                    <li>Menu <span>Triagem</span>: Incluir e consultar os registros de venda</li>
                </ul>
            </section>
        </Container>
    );
}
export default OrientacoesCard;