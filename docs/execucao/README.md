# Como Rodar o Projeto Localmente

Este documento descreve os passos necessários para configurar e executar o projeto de **testes automatizados** localmente, tanto para o frontend quanto para a API.

---

## Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)  
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)  
- Navegador moderno (Chrome, Edge, Firefox)  
- Git (para clonar o repositório)  

---

## Passo 1: Clonar o repositório

Clone o repositório público e acesse a pasta do projeto:

```bash
git clone https://github.com/RafaelEstefanCristoiu/moutsTI.git
cd moutsTI
````

## Passo 2: Instalar dependências

Instale todas as dependências do Node.js necessárias para executar os testes:

```bash
npm install
`````

## Passo 3: Configurar o Cypress

O projeto já possui o arquivo cypress.config.ts. Nenhuma configuração adicional é necessária para execução básica.

Para abrir a interface interativa do Cypress:

```bash
npx cypress open
````

Isso abrirá a interface do Cypress, onde você poderá selecionar e executar testes individualmente ou em grupos.

## Passo 4: Executar os testes no terminal

Para rodar todos os testes em modo headless (linha de comando):

```bash
npx cypress run
````