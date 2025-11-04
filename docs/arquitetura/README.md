# Arquitetura do Projeto de Testes Automatizados - Frontend e API

Este projeto usa as melhores práticas para testes automatizados, com uma arquitetura **modular e organizada** que permite **reuso de classes e interfaces globais** entre os testes de frontend e backend.  

---

## 🏗️ Principais Decisões Arquiteturais

- **Classes e interfaces globais**:  
  Localizadas fora das pastas de frontend e backend, garantindo **reuso de código** e **coerência nos dados** entre os testes.  

- **Separação de responsabilidades**:  
  - `frontend/`: testes de interface.  
  - `backend/`: testes da API.  

- **Modularidade e manutenção**:  
  Alterações em classes/interfaces não impactam diretamente a estrutura de testes, permitindo evolução independente de cada camada.  

- **Uso de TypeScript**:  
  Garante **tipagem forte**, consistência de dados e melhores práticas de programação orientada a objetos.
