# Casos de Teste - Frontend

Este documento descreve os cenários de teste automatizados para o **frontend** da aplicação utilizando **Cypress** e **TypeScript**.

---

## 1. Testing Login User Failed - All Fields Empty

- **Descrição:**  
  Testa a tentativa de login com todos os campos vazios, garantindo que a aplicação exiba mensagens de validação apropriadas.  

- **Objetivo:**  
  Validar que o frontend impede login quando os campos obrigatórios (`Email` e `Password`) não são preenchidos e apresenta as mensagens corretas de erro.

- **Passos do Teste:**
  1. Acessar a página inicial.
  2. Interceptar a requisição de login (`POST /login`) com `cy.intercept`.
  3. Chamar a função `General.loginGeneralFailed()` para simular o envio do formulário vazio.
  4. Clicar no botão de login (`[data-testid="entrar"]`).
  5. Aguardar a resposta da requisição interceptada.
  6. Validar que as mensagens exibidas na tela sejam:
     - `"Email é obrigatório"`
     - `"Password é obrigatório"`

- **Funções/Classes Utilizadas:**
  - `General.loginGeneralFailed()` – Classe responsável por simular o login com falha.
  - `cy.intercept()` – Intercepta e monitora a requisição de login.
  - `cy.contains()` – Valida que as mensagens de erro estão visíveis na tela.

- **Resultado Esperado:**  
  - Mensagens de validação aparecem corretamente: `"Email é obrigatório"` e `"Password é obrigatório"`.  
  - Nenhum login é realizado.

---

## 2. Testing Empty User Email

- **Descrição:**  
  Testa a tentativa de login sem informar o campo `Email`, garantindo que a aplicação exiba a mensagem de erro correta.  

- **Objetivo:**  
  Validar que o frontend impede login quando o campo `Email` está vazio e apresenta a mensagem de erro apropriada.

- **Passos do Teste:**
  1. Acessar a página inicial.
  2. Interceptar a requisição de login (`POST /login`) com `cy.intercept`.
  3. Chamar a função `General.loginGeneralFailedEmptyUser(pass)` fornecendo apenas a senha.
  4. Clicar no botão de login (`[data-testid="entrar"]`).
  5. Aguardar a resposta da requisição interceptada.
  6. Validar que a mensagem exibida na tela seja:
     - `"Email é obrigatório"`

- **Funções/Classes Utilizadas:**
  - `General.loginGeneralFailedEmptyUser(pass)` – Classe responsável por simular o login sem email.
  - `cy.intercept()` – Intercepta e monitora a requisição de login.
  - `cy.contains()` – Valida que a mensagem de erro está visível na tela.

- **Resultado Esperado:**  
  - Mensagem de validação aparece corretamente: `"Email é obrigatório"`.  
  - Nenhum login é realizado.

---

## 3. Testing Empty Password

- **Descrição:**  
  Testa a tentativa de login sem informar o campo `Password`, garantindo que a aplicação exiba a mensagem de erro correta.  

- **Objetivo:**  
  Validar que o frontend impede login quando o campo `Password` está vazio e apresenta a mensagem de erro apropriada.

- **Passos do Teste:**
  1. Acessar a página inicial.
  2. Interceptar a requisição de login (`POST /login`) com `cy.intercept`.
  3. Chamar a função `General.loginGeneralFailedEmptyPass(email)` fornecendo apenas o email.
  4. Clicar no botão de login (`[data-testid="entrar"]`).
  5. Aguardar a resposta da requisição interceptada.
  6. Validar que a mensagem exibida na tela seja:
     - `"Password é obrigatório"`

- **Funções/Classes Utilizadas:**
  - `General.loginGeneralFailedEmptyPass(email)` – Classe responsável por simular o login sem senha.
  - `cy.intercept()` – Intercepta e monitora a requisição de login.
  - `cy.contains()` – Valida que a mensagem de erro está visível na tela.

- **Resultado Esperado:**  
  - Mensagem de validação aparece corretamente: `"Password é obrigatório"`.  
  - Nenhum login é realizado.

---

## 4. Testing Create User Success

- **Descrição:**  
  Testa o cadastro de um novo usuário com todos os campos válidos, garantindo que o processo seja concluído com sucesso.  

- **Objetivo:**  
  Validar que o frontend consegue realizar o cadastro de usuário corretamente e exibir as mensagens e elementos da interface após o sucesso do cadastro.

- **Passos do Teste:**
  1. Acessar a página inicial.
  2. Interceptar todas as requisições da aplicação (`cy.intercept('https://serverest.dev/*')`).
  3. Clicar no botão de cadastro (`[data-testid="cadastrar"]`).
  4. Chamar a função `General.userGeneralSucess()` para preencher o formulário com dados válidos.
  5. Aguardar a resposta das requisições interceptadas.
  6. Validar que a mensagem `"Cadastro realizado com sucesso"` seja exibida.
  7. Validar que os elementos da interface estejam presentes:
     - `"Serverest Store"`
     - `"Home"`
     - `"Lista de Compras"`
     - `"Carrinho"`

- **Funções/Classes Utilizadas:**
  - `General.userGeneralSucess()` – Classe responsável por simular o cadastro de usuário com sucesso.
  - `cy.intercept()` – Intercepta e monitora todas as requisições da aplicação.
  - `cy.contains()` – Valida que mensagens e elementos estão visíveis na tela.

- **Resultado Esperado:**  
  - Cadastro é realizado com sucesso.  
  - Mensagem de sucesso e elementos da interface são exibidos corretamente.
