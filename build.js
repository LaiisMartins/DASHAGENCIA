// build.js — executado pelo Netlify durante o build
// Lê as variáveis de ambiente e gera config.js com as credenciais embutidas

const fs = require('fs');

const url = process.env.SUPABASE_URL || '';
const key = process.env.SUPABASE_ANON_KEY || '';

if (!url || !key) {
  console.warn('⚠️  SUPABASE_URL ou SUPABASE_ANON_KEY não definidas. config.js gerado vazio.');
} else {
  console.log('✅ Variáveis encontradas. Gerando config.js...');
}

const content = `// Gerado automaticamente pelo build — não editar manualmente
var __SB_URL__ = "${url}";
var __SB_KEY__ = "${key}";
`;

fs.writeFileSync('config.js', content, 'utf8');
console.log('✅ config.js gerado com sucesso.');
