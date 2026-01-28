# 🛒 Store Frontends — Vue.js E-commerce Template

Um **template profissional de frontend para lojas online**, construído com **Vue 3 + Vite**, focado em **arquitetura escalável, reutilização entre MFEs e alta qualidade de código**.

Este projeto foi pensado para servir como **base de produto real**, podendo ser utilizado tanto em ambientes corporativos quanto em projetos SaaS ou white‑label.

---

## ✨ Principais Características

* ⚡ **Vue 3 (Composition API)**
* ⚡ **Vite**
* 🧩 **Arquitetura escalável (inspirada em Clean Architecture + SOLID)**
* 🏗️ **Separação em camadas (Domain / Data / Infra / Main / Presentation)**
* 🎨 **Design System reutilizável**
* 🔐 **Autenticação JWT com refresh automático**  / Basta adaptar
* ⏳ **Controle de tempo de inatividade (auto logout)**  / Basta adaptar
* 🔄 **CRUD completo de produtos (API real DummyJSON)**
* 📦 **TanStack Query (vue-query)**
* 🧪 **Testes unitários com Vitest + Testing Library**
* 🧹 **Husky + Lint Staged**
* 💅 **Estilização moderna (CSS Modules / Vuetify)**
* 📊 **Feedbacks visuais (toasts, loaders e estados de erro)**
* 🔌 **Gateway HTTP centralizado**  / Basta adaptar

---

## 🧱 Arquitetura

O projeto segue uma arquitetura inspirada nos princípios do **SOLID** e da **Clean Architecture**, mantendo domínio desacoplado do framework:

```text
src/
├── domain/        # Regras de negócio, entidades e contratos
├── data/          # Casos de uso e implementação de repositórios
├── infra/         # Comunicação externa (HTTP, gateways, storage)
├── main/          # Factories, providers e bootstrap da aplicação
├── presentation/  # Views, componentes, hooks/composables
```

### 🎯 Benefícios

* Facilidade de manutenção
* Alto nível de testabilidade
* Troca de framework sem impacto no domínio
* Reutilização entre projetos e MFEs

---

## 🔐 Autenticação

* Login via **Bearer Token (JWT)** / Basta adaptar
* Refresh automático de token / Basta adaptar
* Interceptor HTTP centralizado / Basta adaptar
* Controle de sessão por inatividade / Basta adaptar
* Logout automático e manual / Basta adaptar

---

## 🛍️ Produtos (CRUD)

* API real: **[https://dummyjson.com](https://dummyjson.com)**
* Implementação usando **@tanstack/vue-query**
* Cache automático
* Refetch inteligente
* Estados de loading, error e success
* Separação clara entre domínio, caso de uso e infraestrutura

---

## 🎨 UI & Estilo

* Componentes desacoplados do domínio
* Layout reutilizável
* Sistema de feedback visual (toast de sucesso/erro)
* Componentes focados em responsabilidade única

---

## 🧪 Testes

* **Vitest**
* **@testing-library/vue**
* **Happy DOM**
* **MSW (Mock Service Worker)** para mocks de API
* Testes focados em comportamento e regras de negócio

```bash
npm run test
npm run test:watch
npm run test:coverage
```

---

## 🧹 Qualidade de Código

* **Husky**
* **Lint Staged**
* Hooks de pré‑commit e pré‑push

```json
"scripts": {
  "prepare": "husky",
  "pre:commit": "lint-staged",
  "pre:push": "npm run test:coverage && npm run lint"
}
```

---

## 📜 Scripts Disponíveis

```bash
npm run dev           # Ambiente de desenvolvimento
npm run build         # Build para produção
npm run test          # Testes unitários
npm run test:coverage # Cobertura de testes
```

---

## 📦 Principais Dependências

* `vue`
* `vite`
* `@tanstack/vue-query`
* `axios`
* `pinia`
* `vue-router`
* `vitest`
* `@testing-library/vue`
* `msw`
* `husky`
* `lint-staged`

---

## 🚀 Requisitos

* Node.js **>= 18**
* npm **>= 10.7.0**

---

## 📌 Objetivo do Projeto

Este projeto serve como:

* Template profissional de e‑commerce em Vue
* Base para múltiplos MFEs
* Boilerplate corporativo
* Portfólio técnico avançado
* Base sólida para produtos SaaS

---

## 👨‍💻 Autor

**João Paulo Seixas da Silva**
Frontend Engineer
Especialista em Vue.js, React, Arquitetura Frontend e Clean Architecture

---

## 📝 Licença

Este projeto é privado e destinado para fins educacionais, comerciais ou internos.
