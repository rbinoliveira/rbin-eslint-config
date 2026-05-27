# Projeto de Teste - @rbinflow/eslint-config

Este é um projeto de teste para validar o funcionamento do pacote `@rbinflow/eslint-config`.

## Como usar

1. Abra este projeto no VSCode
2. Instale as dependências: `npm install` (já feito)
3. **IMPORTANTE**: Certifique-se de ter a extensão ESLint instalada no VSCode
4. Recarregue a janela do VSCode: `Cmd+Shift+P` → "Developer: Reload Window"
5. Edite os arquivos em `src/` e veja o ESLint funcionando
6. Salve o arquivo (`Cmd+S`) - o ESLint deve corrigir automaticamente
7. Se não funcionar, use `Cmd+Shift+P` → "ESLint: Fix all auto-fixable Problems"

## Troubleshooting

Se o ESLint não funcionar ao salvar:

1. **Verifique se a extensão ESLint está instalada**:
   - Abra Extensions (`Cmd+Shift+X`)
   - Procure por "ESLint" (oficial da Microsoft)
   - Instale se não estiver instalada

2. **Recarregue a janela do VSCode**:
   - `Cmd+Shift+P` → "Developer: Reload Window"

3. **Verifique o Output do ESLint**:
   - `View` → `Output`
   - Selecione "ESLint" no dropdown
   - Veja se há erros

4. **Teste via CLI**:
   ```bash
   npm run lint        # Ver erros
   npm run lint:fix    # Corrigir automaticamente
   ```

## Arquivos de teste

- `src/App.tsx` - Componente React limpo (já corrigido pelo ESLint)
- `src/utils.ts` - Arquivo TypeScript limpo (já corrigido pelo ESLint)
- `src/TestProblems.tsx` - **Arquivo com problemas intencionais para testar!**
  - Importações desordenadas (React e useState separados)
  - Importação de CSS no meio das importações
  - Variável não usada (`unusedVar`)
  - Classes Tailwind desordenadas
  - **Edite este arquivo e salve para ver o ESLint funcionando!**

## Testar diferentes configurações

Para testar outras configurações, altere o `.eslintrc.js`:

```javascript
// Para Node.js (sem ponto e vírgula)
module.exports = {
  extends: ['@rbinflow/eslint-config/node'],
}

// Para Node.js (com ponto e vírgula)
module.exports = {
  extends: ['@rbinflow/eslint-config/node-with-semi'],
}

// Para Next.js
module.exports = {
  extends: ['@rbinflow/eslint-config/next'],
}

// Para Expo
module.exports = {
  extends: ['@rbinflow/eslint-config/expo'],
}
```

## Comandos úteis

```bash
# Verificar erros do ESLint
npm run lint

# Corrigir automaticamente
npm run lint:fix
```
