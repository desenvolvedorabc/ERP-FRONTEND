# ERP Frontend

Frontend do sistema ERP financeiro, construido com [Next.js](https://nextjs.org/) 13 (App Router) e [TypeScript](https://www.typescriptlang.org/).

## Funcionalidades

- Gestao de contas a pagar com fluxo de aprovacao/rejeicao
- Gestao de contratos, fornecedores e centros de custo
- Planos orcamentarios e acompanhamento financeiro
- Importacao de dados via Excel
- Dashboards com graficos e indicadores
- Gestao de usuarios e perfis de acesso
- Exportacao de relatorios (PDF, CSV)

## Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Linguagem:** TypeScript
- **UI:** Material UI + TailwindCSS
- **Formularios:** React Hook Form + Zod
- **Data Fetching:** TanStack Query (React Query) + Axios
- **Autenticacao:** NextAuth.js
- **Graficos:** Recharts, Chart.js, Highcharts
- **Package Manager:** Yarn

## Pre-requisitos

- [Node.js](https://nodejs.org/) v20+
- [Yarn](https://yarnpkg.com/)
- Backend rodando (veja o repositorio [ERP-BACKEND](https://github.com/desenvolvedorabc/ERP-BACKEND))

## Instalacao

1. Clone o repositorio:

```bash
git clone https://github.com/desenvolvedorabc/ERP-FRONTEND.git
cd ERP-FRONTEND
```

2. Instale as dependencias:

```bash
yarn install
```

3. Configure as variaveis de ambiente:

```bash
cp .env.example .env.local
```

Edite o `.env.local` com as configuracoes do seu ambiente:

| Variavel | Descricao | Exemplo |
|----------|-----------|---------|
| `NODE_ENV` | Ambiente de execucao | `development` |
| `NEXT_PUBLIC_API_URL` | URL do backend | `http://localhost:3003` |
| `NEXTAUTH_URL` | URL do frontend (para NextAuth) | `http://localhost:3000` |
| `NEXTAUTH_SECRET` | Chave secreta do NextAuth | Gere com `openssl rand -base64 32` |
| `NEXT_PUBLIC_DOMAIN_URL` | Dominio para otimizacao de imagens | `localhost` |
| `NEXT_PUBLIC_MAX_UPLOAD_MB` | Tamanho maximo de upload (MB) | `10` |
| `NEXT_PUBLIC_MAX_IMPORT_MB` | Tamanho maximo de importacao (MB) | `10` |

4. Certifique-se de que o **backend esta rodando** antes de iniciar o frontend.

## Executando

```bash
# Desenvolvimento (com hot-reload)
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000).

```bash
# Producao
yarn build
yarn start
```

## Scripts disponiveis

| Comando | Descricao |
|---------|-----------|
| `yarn dev` | Inicia servidor de desenvolvimento |
| `yarn build` | Compila para producao |
| `yarn start` | Inicia servidor de producao |
| `yarn lint` | Executa o linter |

## Docker

```bash
docker build -t erp-frontend .
docker run -p 3000:3000 --env-file .env.local erp-frontend
```

## Estrutura do Projeto

```
src/
  app/
    (auth)/              # Paginas de autenticacao (login, recuperar senha)
    (main)/              # Paginas principais (protegidas)
      (financeiro)/      # Modulo financeiro (cartao, conciliacao)
      (contracts)/       # Gestao de contratos
      (reports)/         # Relatorios
      (configuracoes)/   # Configuracoes do sistema
    api/                 # API routes (NextAuth)
  components/            # Componentes reutilizaveis
  services/              # Servicos de comunicacao com a API (Axios)
  lib/                   # Configuracao de bibliotecas (React Query)
  utils/                 # Funcoes utilitarias
public/
  images/                # Imagens estaticas
```

## Licenca

Este projeto e open source.
