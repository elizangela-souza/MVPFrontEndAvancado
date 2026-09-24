import LinkButton from '../../layout/LinkButton.js';

import Container from '../../layout/Container.js';
import BarChartComponent from '../../layout/BarChartComponent.js';

import styles from './Home.module.css';
import cooperados from '../../../img/cooperados.jpg'
import { useEffect, useState } from 'react';

function Home() {
    const [dataMateriais, setDataMateriais] = useState([]);
    const [dataVendas, setDataVendas] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/buscar_materiais")
            .then((resp) => resp.json())
            .then((json) => {
                const resultado = json.materiais.map((m) => ({
                    categoria: m.categoria,
                    quantidade: m.quantidade_kg,
                }));
                setDataMateriais(resultado);
            });

        fetch("http://127.0.0.1:5000/buscar_vendas")
            .then((resp) => resp.json())
            .then((json) => {
                const agrupado = {};

                json.vendas.forEach((venda) => {
                    // Extrai mês/ano da data
                    const dataVenda = new Date(venda.data_venda);
                    const chave = `${dataVenda.getMonth() + 1}/${dataVenda.getFullYear()}`;

                    if (!agrupado[chave]) {
                        agrupado[chave] = 0;
                    }
                    agrupado[chave] += venda.valor_venda || 0;
                });

                const resultado = Object.entries(agrupado).map(([mes, total]) => ({
                    mes,
                    total,
                }));

                setDataVendas(resultado);
            });
    }, []);

    return (
        <Container customClass="min-height">
            <section className={styles.home_container}>
                <h1>Bem-vindo <span>Cooperado/a</span></h1>
                <p>Comece a registrar as informações da sua cooperativa agora mesmo!</p>
                <p>Aqui você pode registrar e consultar as informações base para o gerenciamento da cooperativa de reciclagem.</p>
                <Container customClass="graficos">
                    <div>
                        <h2>Estoque de materiais</h2>
                        <BarChartComponent
                            data={dataMateriais}
                            xKey="categoria"
                            yKey="quantidade"
                            color="#8884d8"
                        />
                    </div>
                    <div>
                        <h2>Vendas por mês</h2>
                        <BarChartComponent
                            data={dataVendas}
                            xKey="mes"
                            yKey="total"
                            color="#82ca9d"
                        />
                    </div>
                </Container>
                <h2>O que você encontra aqui:</h2>
                <ul>
                    <li>Menu <span>Cooperados/as</span>: Incluir, consultar, editar e excluir registro do/a cooperado/a</li>
                    <li>Menu <span>Triagem</span>: Incluir e consultar os registros de triagem</li>
                </ul>
                <LinkButton to="/rotaInexistente" text="Entre em contato com o suporte" />
                <img src={cooperados} alt="Desenho de pessoas separando o lixo para reciclagem" />
                <h3>"Quando a pessoa encesta o lixo, e na lixeira certa, é ponto para a cidadania e vitória para todos".</h3>
            </section>
        </Container>
    )
}
export default Home;