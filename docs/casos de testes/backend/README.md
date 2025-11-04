# Casos de Teste - Backend (API)

Este documento descreve os cenários de teste automatizados para a **API** da aplicação utilizando **Cypress** e **TypeScript**.

---

## 1. POST Request Call - Success

- **Descrição:**  
  Testa a criação de um usuário via API (`POST /users`) garantindo que o registro seja realizado com sucesso.  

- **Objetivo:**  
  Validar se a API responde corretamente ao criar um novo usuário, retornando o status correto, mensagem de sucesso e campos obrigatórios preenchidos.  

- **Passos do Teste:**
  1. Chamar a função `createUserGeneralAuthentication()` para criar um usuário autenticado.
  2. Verificar o **status HTTP** da resposta:
     - Esperado: `201`
     - Validação extra de falha HTTP via `utils.validateHttpFailed`.
  3. Validar os campos do corpo da resposta usando `utils.validateField`.
  4. Confirmar que a **mensagem de sucesso** retornada é `"Cadastro realizado com sucesso"`.
  5. Garantir que o campo `_id` do usuário esteja presente e válido.

- **Funções/Classes Utilizadas:**
  - `Requests.createUserGeneralAuthentication()` – Classe responsável pela chamada à API.
  - `utils.validateField()` – Valida campos presentes na resposta.
  - `utils.validateHttpFailed()` – Verifica falhas HTTP inesperadas.

- **Resultado Esperado:**  
  - Status HTTP: `201 Created`  
  - Mensagem: `"Cadastro realizado com sucesso"`  
  - Presença do `_id` no corpo da resposta.  
  - Nenhum erro HTTP inesperado.

---

## 2. POST Request Call - Failed - User is already registered

- **Descrição:**  
  Testa a criação de um usuário já existente via API (`POST /users`), garantindo que a API retorne o erro correto quando o email já está registrado.  

- **Objetivo:**  
  Validar que a API impede duplicidade de registro e retorna o status e mensagem de erro adequados.  

- **Passos do Teste:**
  1. Chamar a função `createUserGeneralAuthenticationFailed()` para tentar criar um usuário com email já registrado.
  2. Verificar o **status HTTP** da resposta:
     - Esperado: `400`
     - Validação extra de sucesso HTTP via `utils.validateHttpSuccess`.
  3. Validar os campos do corpo da resposta usando `utils.validateField`.
  4. Confirmar que a **mensagem de erro** retornada é `"Este email já está sendo usado"`.

- **Funções/Classes Utilizadas:**
  - `Requests.createUserGeneralAuthenticationFailed()` – Classe responsável pela chamada à API que deve falhar.
  - `utils.validateField()` – Valida campos presentes na resposta.
  - `utils.validateHttpSuccess()` – Valida ausência de erros inesperados.

- **Resultado Esperado:**  
  - Status HTTP: `400 Bad Request`  
  - Mensagem: `"Este email já está sendo usado"`  
  - Nenhum campo obrigatório faltando no corpo da resposta.

---

## 3. POST Request Call - Failed - Empty Admin

- **Descrição:**  
  Testa a criação de um usuário via API (`POST /users`) sem informar o campo `administrador`, garantindo que a API retorne o erro correto.  

- **Objetivo:**  
  Validar que o campo obrigatório `administrador` é exigido pela API e que a ausência dele gera o status e mensagem de erro adequado.  

- **Passos do Teste:**
  1. Chamar a função `createUserGeneralAuthenticationFailedEmptyAdmin()` para tentar criar um usuário sem o campo `administrador`.
  2. Verificar o **status HTTP** da resposta:
     - Esperado: `400`
     - Validação extra de sucesso HTTP via `utils.validateHttpSuccess`.
  3. Validar os campos do corpo da resposta usando `utils.validateField`.
  4. Confirmar que a **mensagem de erro** retornada é `"administrador é obrigatório"`.

- **Funções/Classes Utilizadas:**
  - `Requests.createUserGeneralAuthenticationFailedEmptyAdmin()` – Classe responsável pela chamada à API que deve falhar.
  - `utils.validateField()` – Valida campos presentes na resposta.
  - `utils.validateHttpSuccess()` – Valida ausência de erros inesperados.

- **Resultado Esperado:**  
  - Status HTTP: `400 Bad Request`  
  - Mensagem: `"administrador é obrigatório"`  
  - Nenhum campo obrigatório faltando no corpo da resposta.

