# @rbinflow/eslint-config

<div align="center">

![npm version](https://img.shields.io/npm/v/@rbinflow/eslint-config?style=for-the-badge)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

**ESLint and Prettier configurations for Node.js, React, Next.js, and Expo projects**

[English](#english) | [Português](#português)

</div>

---

## English

### Overview

A comprehensive ESLint and Prettier configuration package that provides standardized code quality and formatting rules for JavaScript and TypeScript projects. Includes support for Node.js, React, Next.js, and Expo with industry best practices, automatic import sorting, Tailwind CSS class ordering, and accessibility rules.

### Installation

```bash
npm install --save-dev @rbinflow/eslint-config
```

### Available Configurations

#### Node.js

This package offers two variants for Node.js projects:

**`node.js` - Without semicolons (modern standard)**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/node'],
}
```

**`node-with-semi.js` - With semicolons (traditional standard)**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/node-with-semi'],
}
```

**Difference:** The only difference between the two variants is the Prettier configuration:
- `node.js`: `semi: false` (without semicolons)
- `node-with-semi.js`: `semi: true` (with semicolons)

All other settings are identical.

#### React

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
}
```

#### Vite

Same as `react`, plus the Vite Fast Refresh rule (`eslint-plugin-react-refresh`).
Use this in Vite + React projects.

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/vite'],
}
```

#### Next.js

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/next'],
}
```

#### Expo

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/expo'],
}
```

### Usage

#### Quick Start

**You only need ONE file to configure everything:**

Create a file named **`.eslintrc.js`** in your project root and add the configuration for your project type.

**Important Notes:**
- ✅ **Prettier is already included** - No need to create `.prettierrc` or `.prettierrc.js`
- ✅ **TypeScript is already configured** - No need for separate `tsconfig.json` ESLint settings
- ✅ **All dependencies are included** - Just install this package and you're ready

---

#### Complete Setup Examples

##### Node.js Project (without semicolons)

**Step 1: Install the package**
```bash
npm install --save-dev @rbinflow/eslint-config
```

**Step 2: Create configuration file**

**File: `.eslintrc.js`** (create this file in your project root)
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/node'],
}
```

**Your project structure:**
```
my-node-project/
├── .eslintrc.js          ← Create this file with the config above
├── package.json
├── src/
│   └── index.js
└── ...
```

**Additional dependencies:** None required (ESLint and Prettier are included)

---

##### Node.js Project (with semicolons)

**Step 1: Install the package**
```bash
npm install --save-dev @rbinflow/eslint-config
```

**Step 2: Create configuration file**

**File: `.eslintrc.js`** (create this file in your project root)
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/node-with-semi'],
}
```

**Your project structure:**
```
my-node-project/
├── .eslintrc.js          ← Create this file with the config above
├── package.json
├── src/
│   └── index.js
└── ...
```

**Additional dependencies:** None required (ESLint and Prettier are included)

---

##### React Project

**Step 1: Install the package**
```bash
npm install --save-dev @rbinflow/eslint-config
```

**Step 2: Install React (if not already installed)**
```bash
npm install react react-dom
```

**Step 3: Create configuration file**

**File: `.eslintrc.js`** (create this file in your project root)
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
}
```

**Your project structure:**
```
my-react-app/
├── .eslintrc.js          ← Create this file with the config above
├── package.json
├── src/
│   ├── App.tsx
│   └── index.tsx
└── ...
```

**Required dependencies:**
- ✅ `react` and `react-dom` (you must install these)

**Features included:**
- ✅ Automatic import sorting
- ✅ Tailwind CSS class ordering
- ✅ React hooks rules
- ✅ Accessibility (a11y) rules

---

##### Next.js Project

**Step 1: Install the package**
```bash
npm install --save-dev @rbinflow/eslint-config
```

**Step 2: Install Next.js (if not already installed)**
```bash
npm install next react react-dom
```

**Step 3: Create configuration file**

**File: `.eslintrc.js`** (create this file in your project root)
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/next'],
}
```

**Your project structure:**
```
my-next-app/
├── .eslintrc.js          ← Create this file with the config above
├── package.json
├── next.config.js
├── app/
│   └── page.tsx
└── ...
```

**Required dependencies:**
- ✅ `next`, `react`, and `react-dom` (you must install these)

---

##### Expo/React Native Project

**Step 1: Install the package**
```bash
npm install --save-dev @rbinflow/eslint-config
```

**Step 2: Install Expo (if not already installed)**
```bash
npm install expo react react-native
```

**Step 3: Create configuration file**

**File: `.eslintrc.js`** (create this file in your project root)
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/expo'],
}
```

**Your project structure:**
```
my-expo-app/
├── .eslintrc.js          ← Create this file with the config above
├── package.json
├── app.json
├── App.tsx
└── ...
```

**Required dependencies:**
- ✅ `expo`, `react`, and `react-native` (you must install these)

### Semicolon Policy

**Important:** Only Node.js configurations can have semicolon options.

- ✅ **Node.js**: Two variants available (`node.js` without `;` and `node-with-semi.js` with `;`)
- ❌ **React, Next.js, Expo**: Only without semicolons (`semi: false`)

This policy ensures consistency across frontend projects while allowing flexibility for Node.js projects.

### Frequently Asked Questions (FAQ)

#### Do I need to create a `.prettierrc` file?

**No!** Prettier is already configured and integrated. You don't need any separate Prettier configuration file.

The package handles all Prettier settings automatically. Just create the `.eslintrc.js` file and you're done.

#### Do I need to install ESLint and Prettier separately?

**No!** All dependencies are included in this package:
- ✅ ESLint
- ✅ Prettier
- ✅ TypeScript ESLint
- ✅ All plugins (React, Import, etc.)

Just install `@rbinflow/eslint-config` and everything works.

#### How do I run ESLint?

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

Then run:
```bash
npm run lint        # Check for errors
npm run lint:fix    # Fix errors automatically
```

#### Does it work with VSCode?

**Yes!** Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and it will automatically:
- Show errors in the editor
- Format on save (if configured)
- Apply fixes on demand

---

### Advanced Configuration

#### Customize Rules

You can extend and customize the rules:

**File: `.eslintrc.js`**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
  rules: {
    // Your custom rules here
    'no-console': 'warn',
    'react/prop-types': 'off',
  },
}
```

#### Override Prettier Settings (Advanced)

If you really need to override Prettier settings:

**File: `.eslintrc.js`**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,  // Override default 80
        semi: true,       // Override default false (for React)
      },
    ],
  },
}
```

**Note:** This is not recommended unless you have specific requirements.

#### TypeScript

All configurations include full TypeScript support through `@typescript-eslint`. No additional setup required.

### VSCode Integration

This package works seamlessly with the official VSCode ESLint extension.

#### Prerequisites

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) in VSCode
2. Install the package in your project:
   ```bash
   npm install --save-dev @rbinflow/eslint-config
   ```

#### Configuration

1. Create a `.eslintrc.js` file in the root of your project:
   ```javascript
   module.exports = {
     extends: ['@rbinflow/eslint-config/react'],
   }
   ```

2. The VSCode ESLint extension will automatically detect the configuration
3. You'll see ESLint errors and warnings directly in the editor
4. Use `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux) and type "ESLint: Fix all auto-fixable Problems" to auto-fix

#### Supported Configuration Formats

The VSCode ESLint extension supports the following formats:
- `.eslintrc.js` (JavaScript) ✅
- `.eslintrc.json` (JSON) ✅
- `.eslintrc.yaml` (YAML) ✅
- `eslintConfig` in `package.json` ✅

This package uses `.js` which is fully compatible.

#### Troubleshooting

**Problem**: Extension doesn't detect the configuration
- **Solution**: Ensure the `.eslintrc.js` file is in the project root
- **Solution**: Restart VSCode after installing the package

**Problem**: "Cannot find module" errors
- **Solution**: Run `npm install` in the project directory
- **Solution**: Ensure all package dependencies are installed

**Problem**: Auto-fix doesn't work
- **Solution**: Check if the ESLint extension is enabled
- **Solution**: Use the "ESLint: Fix all auto-fixable Problems" command from the Command Palette

### Features

- ✅ **ESLint 8.57.1** - Stable and tested version
- ✅ **Prettier 3.7.4** - Automatic code formatting
- ✅ **TypeScript** - Full support via @typescript-eslint
- ✅ **Import Sorting** - Automatic import sorting
- ✅ **Tailwind CSS** - Automatic class sorting (React/Next.js)
- ✅ **Accessibility** - jsx-a11y rules for React/Next.js/Expo
- ✅ **Best Practices** - Configurations based on industry standards
- ✅ **VSCode Ready** - Works perfectly with official ESLint extension

### Additional Documentation

- [Publishing Guide](./PUBLISHING.md) - How to publish and update the package on npm

### Contributing

This is a private package used internally. For suggestions or improvements, please open an issue in the repository.

### License

MIT © Rubens Oliveira

### Links

- [npm](https://www.npmjs.com/package/@rbinflow/eslint-config)
- [Repository](https://github.com/rbinoliveira/rbin-eslint-config)

---

<div align="center">

**Developed with ❤️ by Rubens Oliveira**

</div>

---

## Português

### Sobre

Este pacote fornece configurações ESLint e Prettier padronizadas para projetos Node.js, React, Next.js e Expo. Inclui as melhores práticas do mercado, suporte a TypeScript, ordenação automática de importações, formatação de classes Tailwind CSS e regras de acessibilidade.

### Instalação

```bash
npm install --save-dev @rbinflow/eslint-config
```

### Configurações Disponíveis

#### Node.js

Este pacote oferece duas variantes para projetos Node.js:

**`node.js` - Sem ponto e vírgula (padrão moderno)**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/node'],
}
```

**`node-with-semi.js` - Com ponto e vírgula (padrão tradicional)**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/node-with-semi'],
}
```

**Diferença:** A única diferença entre as duas variantes é a configuração do Prettier:
- `node.js`: `semi: false` (sem ponto e vírgula)
- `node-with-semi.js`: `semi: true` (com ponto e vírgula)

Todas as outras configurações são idênticas.

#### React

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
}
```

#### Vite

Igual ao `react`, mais a regra de Fast Refresh do Vite
(`eslint-plugin-react-refresh`). Use em projetos Vite + React.

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/vite'],
}
```

#### Next.js

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/next'],
}
```

#### Expo

```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/expo'],
}
```

### Uso

#### Início Rápido

**Você precisa de apenas UM arquivo para configurar tudo:**

Crie um arquivo chamado **`.eslintrc.js`** na raiz do seu projeto e adicione a configuração para o seu tipo de projeto.

**Notas Importantes:**
- ✅ **Prettier já está incluído** - Não precisa criar `.prettierrc` ou `.prettierrc.js`
- ✅ **TypeScript já está configurado** - Não precisa de configurações separadas de ESLint no `tsconfig.json`
- ✅ **Todas as dependências estão incluídas** - Basta instalar este pacote e está pronto

---

#### Exemplos de Configuração Completa

##### Projeto Node.js (sem ponto e vírgula)

**Passo 1: Instale o pacote**
```bash
npm install --save-dev @rbinflow/eslint-config
```

**Passo 2: Crie o arquivo de configuração**

**Arquivo: `.eslintrc.js`** (crie este arquivo na raiz do seu projeto)
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/node'],
}
```

**Estrutura do seu projeto:**
```
meu-projeto-node/
├── .eslintrc.js          ← Crie este arquivo com a config acima
├── package.json
├── src/
│   └── index.js
└── ...
```

**Dependências adicionais:** Nenhuma necessária (ESLint e Prettier já incluídos)

---

##### Projeto Node.js (com ponto e vírgula)

**Passo 1: Instale o pacote**
```bash
npm install --save-dev @rbinflow/eslint-config
```

**Passo 2: Crie o arquivo de configuração**

**Arquivo: `.eslintrc.js`** (crie este arquivo na raiz do seu projeto)
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/node-with-semi'],
}
```

**Estrutura do seu projeto:**
```
meu-projeto-node/
├── .eslintrc.js          ← Crie este arquivo com a config acima
├── package.json
├── src/
│   └── index.js
└── ...
```

**Dependências adicionais:** Nenhuma necessária (ESLint e Prettier já incluídos)

---

##### Projeto React

**Passo 1: Instale o pacote**
```bash
npm install --save-dev @rbinflow/eslint-config
```

**Passo 2: Instale o React (se ainda não estiver instalado)**
```bash
npm install react react-dom
```

**Passo 3: Crie o arquivo de configuração**

**Arquivo: `.eslintrc.js`** (crie este arquivo na raiz do seu projeto)
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
}
```

**Estrutura do seu projeto:**
```
meu-app-react/
├── .eslintrc.js          ← Crie este arquivo com a config acima
├── package.json
├── src/
│   ├── App.tsx
│   └── index.tsx
└── ...
```

**Dependências obrigatórias:**
- ✅ `react` e `react-dom` (você deve instalar estes)

**Recursos incluídos:**
- ✅ Ordenação automática de imports
- ✅ Ordenação de classes Tailwind CSS
- ✅ Regras do React hooks
- ✅ Regras de acessibilidade (a11y)

---

##### Projeto Next.js

**Passo 1: Instale o pacote**
```bash
npm install --save-dev @rbinflow/eslint-config
```

**Passo 2: Instale o Next.js (se ainda não estiver instalado)**
```bash
npm install next react react-dom
```

**Passo 3: Crie o arquivo de configuração**

**Arquivo: `.eslintrc.js`** (crie este arquivo na raiz do seu projeto)
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/next'],
}
```

**Estrutura do seu projeto:**
```
meu-app-next/
├── .eslintrc.js          ← Crie este arquivo com a config acima
├── package.json
├── next.config.js
├── app/
│   └── page.tsx
└── ...
```

**Dependências obrigatórias:**
- ✅ `next`, `react` e `react-dom` (você deve instalar estes)

---

##### Projeto Expo/React Native

**Passo 1: Instale o pacote**
```bash
npm install --save-dev @rbinflow/eslint-config
```

**Passo 2: Instale o Expo (se ainda não estiver instalado)**
```bash
npm install expo react react-native
```

**Passo 3: Crie o arquivo de configuração**

**Arquivo: `.eslintrc.js`** (crie este arquivo na raiz do seu projeto)
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/expo'],
}
```

**Estrutura do seu projeto:**
```
meu-app-expo/
├── .eslintrc.js          ← Crie este arquivo com a config acima
├── package.json
├── app.json
├── App.tsx
└── ...
```

**Dependências obrigatórias:**
- ✅ `expo`, `react` e `react-native` (você deve instalar estes)

### Política de Ponto e Vírgula

**Importante:** Apenas as configurações Node.js podem ter opção de ponto e vírgula.

- ✅ **Node.js**: Duas variantes disponíveis (`node.js` sem `;` e `node-with-semi.js` com `;`)
- ❌ **React, Next.js, Expo**: Apenas sem ponto e vírgula (`semi: false`)

Esta política garante consistência entre projetos frontend enquanto permite flexibilidade para projetos Node.js.

### Perguntas Frequentes (FAQ)

#### Preciso criar um arquivo `.prettierrc`?

**Não!** O Prettier já está configurado e integrado. Você não precisa de nenhum arquivo de configuração separado do Prettier.

O pacote cuida de todas as configurações do Prettier automaticamente. Apenas crie o arquivo `.eslintrc.js` e está pronto.

#### Preciso instalar ESLint e Prettier separadamente?

**Não!** Todas as dependências estão incluídas neste pacote:
- ✅ ESLint
- ✅ Prettier
- ✅ TypeScript ESLint
- ✅ Todos os plugins (React, Import, etc.)

Basta instalar `@rbinflow/eslint-config` e tudo funciona.

#### Como executar o ESLint?

Adicione estes scripts ao seu `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

Depois execute:
```bash
npm run lint        # Verificar erros
npm run lint:fix    # Corrigir erros automaticamente
```

#### Funciona com VSCode?

**Sim!** Instale a [extensão ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e ela automaticamente:
- Mostra erros no editor
- Formata ao salvar (se configurado)
- Aplica correções sob demanda

---

### Configurações Avançadas

#### Personalizar Regras

Você pode estender e personalizar as regras:

**Arquivo: `.eslintrc.js`**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
  rules: {
    // Suas regras personalizadas aqui
    'no-console': 'warn',
    'react/prop-types': 'off',
  },
}
```

#### Sobrescrever Configurações do Prettier (Avançado)

Se você realmente precisar sobrescrever as configurações do Prettier:

**Arquivo: `.eslintrc.js`**
```javascript
module.exports = {
  extends: ['@rbinflow/eslint-config/react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,  // Sobrescrever padrão 80
        semi: true,       // Sobrescrever padrão false (para React)
      },
    ],
  },
}
```

**Nota:** Isso não é recomendado a menos que você tenha requisitos específicos.

#### TypeScript

Todas as configurações incluem suporte completo para TypeScript através de `@typescript-eslint`. Nenhuma configuração adicional necessária.

### Integração com VSCode

Este pacote funciona perfeitamente com a extensão ESLint oficial do VSCode.

#### Pré-requisitos

1. Instale a extensão [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) no VSCode
2. Instale o pacote no seu projeto:
   ```bash
   npm install --save-dev @rbinflow/eslint-config
   ```

#### Configuração

1. Crie um arquivo `.eslintrc.js` na raiz do seu projeto:
   ```javascript
   module.exports = {
     extends: ['@rbinflow/eslint-config/react'],
   }
   ```

2. A extensão ESLint do VSCode detectará automaticamente a configuração
3. Você verá erros e avisos do ESLint diretamente no editor
4. Use `Cmd+Shift+P` (Mac) ou `Ctrl+Shift+P` (Windows/Linux) e digite "ESLint: Fix all auto-fixable Problems" para corrigir automaticamente

#### Formato de Configuração Suportado

A extensão ESLint do VSCode suporta os seguintes formatos:
- `.eslintrc.js` (JavaScript) ✅
- `.eslintrc.json` (JSON) ✅
- `.eslintrc.yaml` (YAML) ✅
- `eslintConfig` no `package.json` ✅

Este pacote usa `.js` que é totalmente compatível.

#### Troubleshooting

**Problema**: A extensão não detecta a configuração
- **Solução**: Certifique-se de que o arquivo `.eslintrc.js` está na raiz do projeto
- **Solução**: Reinicie o VSCode após instalar o pacote

**Problema**: Erros de "Cannot find module"
- **Solução**: Execute `npm install` no diretório do projeto
- **Solução**: Certifique-se de que todas as dependências do pacote estão instaladas

**Problema**: Auto-fix não funciona
- **Solução**: Verifique se a extensão ESLint está habilitada
- **Solução**: Use o comando "ESLint: Fix all auto-fixable Problems" do Command Palette

### Características

- ✅ **ESLint 8.57.1** - Versão estável e testada
- ✅ **Prettier 3.7.4** - Formatação automática de código
- ✅ **TypeScript** - Suporte completo via @typescript-eslint
- ✅ **Import Sorting** - Ordenação automática de importações
- ✅ **Tailwind CSS** - Ordenação automática de classes (React/Next.js)
- ✅ **Acessibilidade** - Regras jsx-a11y para React/Next.js/Expo
- ✅ **Melhores Práticas** - Configurações baseadas em padrões do mercado
- ✅ **VSCode Ready** - Funciona perfeitamente com extensão ESLint oficial

### Documentação Adicional

- [Guia de Publicação](./PUBLISHING.md) - Como publicar e atualizar o pacote no npm

### Contribuindo

Este é um pacote privado usado internamente. Para sugestões ou melhorias, abra uma issue no repositório.

### Licença

MIT © Rubens Oliveira

### Links

- [npm](https://www.npmjs.com/package/@rbinflow/eslint-config)
- [Repositório](https://github.com/rbinoliveira/rbin-eslint-config)

---

<div align="center">

**Desenvolvido com ❤️ por Rubens Oliveira**

</div>
