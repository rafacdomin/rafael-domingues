# Rafael Domingues - Portfolio

## 🚀 Tecnologias Usadas

- **Framework**: Next.js 16
- **Linguagem**: TypeScript
- **Interface**: React 19
- **Estilização**: Tailwind CSS v4 e `lightswind`
- **Animações**: Framer Motion
- **Efeitos**: tsParticles
- **Testes**: Vitest e React Testing Library

## 🏗️ Arquitetura do Projeto

```text
📦 rafael-domingues
├── 📂 app/         # Rotas principais, layouts e páginas (App Router)
├── 📂 components/  # Componentes visuais modulares e isolados
├── 📂 hooks/       # Hooks customizados para lógica reutilizável
├── 📂 lib/         # Funções utilitárias e helpers
└── 📜 vitest.*     # Configuração e setup do ambiente de testes
```

O projeto foca em modularidade com componentes isolados e uma forte cultura de testes visando 100% de cobertura.

## 🛠️ Comandos para Executar

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos

Certifique-se de ter o **Node.js** (versão 20+) instalado na sua máquina.

### Instalação de Dependências

Clone este repositório (caso não tenha feito) e instale os pacotes:

```bash
npm install
```

### Executar em Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação rodando. As edições nos arquivos farão um hot-reload automático na página.

### Outros Scripts Disponíveis

Você pode rodar os seguintes comandos conforme a necessidade:

- `npm run build`: Compila e otimiza a versão de produção da aplicação.
- `npm run start`: Inicia o servidor utilizando o pacote de produção gerado no comando `build`.
- `npm run lint`: Executa o ESLint para análise estática e verificação de boas práticas no código.
- `npm run test`: Roda toda a suíte de testes unitários de forma rápida com o Vitest.
- `npm run coverage`: Executa os testes e gera um relatório detalhado de cobertura de código no final.
