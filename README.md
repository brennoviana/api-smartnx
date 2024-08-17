# api-smartnx

SmartNx Desafio Técnico - Desenvolvedor Back-end Jr

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter as seguintes ferramentas instaladas:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Configuração e Execução com Docker

### 1. Clone o repositório

```bash
git clone https://github.com/brennoviana/api-smartnx.git
```

### 2. Construção e execução dos containers

```bash
docker-compose up --build
```

### 3. Acessando a aplicação

Após iniciar os containers, a aplicação estará acessível em http://localhost:3000.

### 4. Parar e remover os containers

```bash
docker-compose down
```

## Modelagem do Banco de Dados

[![Diagrama ERD](./docs/erd.png)](https://dbdiagram.io/d/66bf97728b4bb5230e533493)

### Observações

O arquivo `.env` foi incluído no repositório para facilitar o uso e configuração do projeto. Ele contém as variáveis de ambiente necessárias para a execução do banco de dados MySQL e configurações do Node.js.
