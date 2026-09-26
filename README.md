# Projeto Cooperativa de Reciclagem

>Este projeto é o módulo Interface do MVP da Sprint: Desenvolvimento Back-end Avançado. Ele buscou atender a necessidade de armazenamento e consulta das informações de uma cooperativa de reciclagem.

## Funcionalidades

- Gráficos: estoque e vendas por mês em tempo real.

- Formulários: inclusão e edição de cooperados, clientes, triagens e vendas.

- Tabelas dinâmicas: consulta detalhada de registros.

- Opção de gerar PDF para imprimir etique de envio com informações dos clientes.

## Tecnologias utilizadas

As principais ferramentas utilizadas foram:

- React
- React Router
- Recharts
- React-icons
- Jspdf
- jspdf-autoTable

## Fontes, icones e imagens utilizadas
- Fontes: [Google Fonts](https://fonts.google.com/)
- Imagem "logo.png": Desenvolvida com a ferramenta [Canva](https://www.canva.com/)
- Imagem "cooperados.jpg": [Freepik](https://br.freepik.com/vetores-gratis/pessoas-felizes-reciclando_16409640.htm#fromView=keyword&page=4&position=19&uuid=a8574400-6f60-40d3-b699-de7a294e3dc9&query=Cooperativa+reciclagem)
- Gif "loading_gif.gif": [Pixabay](https://pixabay.com/pt/gifs/fiandeira-flor-carregando-carga-8565/)

## Como executar com Dockerfile

### 1. Utilizar o comando no terminal `docker build -t interface .`
Para construir a imagem a partir do Dockerfile.

Caso esteja utilizando Windows, deve primeiro abrir o aplicativo [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/?uuid=BBEA0E54-C959-4598-A02E-B324AE057A35#system-requirements) no seu computador e ter instalado o WSL2 ou uma máquina virtual interna.

### 2. Utilizar o comando no terminal `docker run -p 3000:80 interface`
Para criar e inicializar o container a partir da imagem interface já construída.

### 3. Acessar aplicação no link [http://localhost:3000](http://localhost:3000) no navegador

### 4. Executar a aplicação back-end 
Clone o [repositório da API Back-end](https://github.com/elizangela-souza/MVPback-end.git) e siga as orientações no arquivo README.md para execução.

## Como executar sem Dockerfile

### 1. Utilizar o comando no terminal `npm install`
Para instalar as dependências utilizadas na aplicação.

### 2. Utilizar o comando no terminal `npm start`
Para executar o aplicativo em modo de desenvolvimento.
Abra http://localhost:3000 para visualizar no seu navegador.

A página será recarregada automaticamente quando você fizer alterações.
Você também poderá ver quaisquer erros de lint no console.

### 3. Executar a aplicação back-end 
Clone o [repositório da API Back-end](https://github.com/elizangela-souza/MVPback-end.git) e siga as orientações no arquivo README.md para execução.

## Fluxograma
![fluxograma](./src/img/fluxograma.png)