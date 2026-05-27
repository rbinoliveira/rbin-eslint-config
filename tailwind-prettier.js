// ────────────────────────────────
// Tailwind + Prettier (opcional, auto-detectado)
// ────────────────────────────────
//
// Retorna o trecho de configuração do Prettier relativo ao Tailwind,
// pronto para ser espalhado dentro de `prettier/prettier`:
//
//   - Se `prettier-plugin-tailwindcss` estiver instalado, adiciona o plugin
//     (ordenação de classes).
//   - No Tailwind v4 (CSS-first), o plugin precisa saber qual CSS contém o
//     `@import "tailwindcss"`. Procuramos esse arquivo em caminhos
//     convencionais e, se encontrado, setamos `tailwindStylesheet`.
//
// Tudo é resolvido a partir do diretório do projeto (process.cwd()), porque é
// onde o ESLint roda — não do diretório do pacote.

function getTailwindPrettierConfig() {
  try {
    // Apenas resolve (não dá require): o prettier-plugin-tailwindcss é ESM-only
    // e um require() em CommonJS lançaria. O próprio Prettier o carrega como ESM.
    require.resolve('prettier-plugin-tailwindcss')
    // Só ativa se o projeto realmente usa Tailwind — evita quebrar projetos sem ele.
    require.resolve('tailwindcss')
  } catch (e) {
    return {}
  }

  const config = { plugins: ['prettier-plugin-tailwindcss'] }

  try {
    const fs = require('fs')
    const path = require('path')

    const candidates = [
      'src/index.css',
      'src/styles/index.css',
      'src/styles/globals.css',
      'src/globals.css',
      'src/global.css',
      'src/app.css',
      'src/App.css',
      'app/globals.css',
      'styles/globals.css',
    ]

    for (const rel of candidates) {
      const abs = path.join(process.cwd(), rel)
      if (
        fs.existsSync(abs) &&
        /@import\s+["']tailwindcss["']/.test(fs.readFileSync(abs, 'utf8'))
      ) {
        config.tailwindStylesheet = './' + rel
        break
      }
    }
  } catch (e) {
    // Sem FS ou stylesheet não encontrado: mantém só o plugin.
    // (Tailwind v3 funciona via auto-detecção do tailwind.config.js.)
  }

  return config
}

module.exports = { getTailwindPrettierConfig }
