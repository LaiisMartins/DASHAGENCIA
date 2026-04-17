#!/bin/sh
# build.sh — executado pelo Netlify antes do deploy
# Gera config.js com as variáveis de ambiente

cat > config.js << EOF
// Gerado automaticamente pelo build — não editar
var __SB_URL__ = "${SUPABASE_URL}";
var __SB_KEY__ = "${SUPABASE_ANON_KEY}";
EOF

echo "✅ config.js gerado com sucesso"
