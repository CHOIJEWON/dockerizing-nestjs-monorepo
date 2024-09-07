### ## NestJS Monorepo CI / CD Boilerplate

### 🚀 Architecture

<img src="https://github.com/user-attachments/assets/4d5179d6-1d4d-4bc9-8690-7ce9f14b415e" alt="architecture">

### 📁 folder tree

```
dockerizing-nestjs-monorepo
├─ .dockerignore
├─ .eslintrc.js
├─ .git
│  ├─ AUTO_MERGE
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ ORIG_HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
├─ .github
│  └─ workflows
│     ├─ auth-api-push.yml
│     └─ cats-api-push.yml
├─ .gitignore
├─ .prettierrc
├─ README.md
├─ apps
│  ├─ auth-api
│  │  ├─ Dockerfile
│  │  ├─ src
│  │  │  ├─ auth-api.controller.spec.ts
│  │  │  ├─ auth-api.controller.ts
│  │  │  ├─ auth-api.module.ts
│  │  │  ├─ auth-api.service.ts
│  │  │  └─ main.ts
│  │  ├─ test
│  │  │  ├─ app.e2e-spec.ts
│  │  │  └─ jest-e2e.json
│  │  └─ tsconfig.app.json
│  └─ cats
│     ├─ Dockerfile
│     ├─ src
│     │  ├─ app.controller.spec.ts
│     │  ├─ app.controller.ts
│     │  ├─ app.module.ts
│     │  ├─ app.service.ts
│     │  └─ main.ts
│     ├─ test
│     │  ├─ app.e2e-spec.ts
│     │  └─ jest-e2e.json
│     └─ tsconfig.app.json
├─ docker-compose.yml
├─ libs
│  └─ entity
│     ├─ src
│     │  ├─ entity.module.ts
│     │  ├─ entity.service.spec.ts
│     │  ├─ entity.service.ts
│     │  └─ index.ts
│     └─ tsconfig.lib.json
├─ nest-cli.json
├─ package-lock.json
├─ package.json
├─ tsconfig.build.json
└─ tsconfig.json
```
