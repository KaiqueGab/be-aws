import express from 'express';
import { db } from './db/index.js';

const app = express();
const port = 3001;

// Habilita o CORS para que o frontend possa acessar esta API
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Rota principal para buscar os usuários
app.get('/getUsers', async (req, res) => {
  try {
    const allUsers = await db.query.users.findMany();
    res.json(allUsers);
  } catch (error) {
    console.error('Erro no servidor:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
});

app.listen(port, () => {
  console.log(`Backend com Drizzle rodando em http://localhost:${port}`);
});
