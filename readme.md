Execution:
# 1. Instala todas as dependências do package.json
npm install

# 2. Gera o arquivo SQL da migração com base no seu schema
npm run db:generate

# 3. Executa a migração no seu banco de dados no AWS RDS
npm run db:migrate

# 4. Popula o banco com os dois usuários de exemplo
npm run db:seed

# 5. Inicia o servidor backend
npm run start