import 'dotenv/config';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const runMigrations = async () => {
  console.log('Conectando ao banco de dados para migração...');
  const migrationClient = postgres({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'postgres',
    ssl: 'require',
    max: 1,
  });

  const db = drizzle(migrationClient);

  console.log('Executando migrações...');
  await migrate(db, { migrationsFolder: './db/migrations' });
  
  console.log('Migrações concluídas com sucesso!');
  await migrationClient.end();
  process.exit(0);
};

runMigrations().catch(err => {
  console.error('Erro ao executar migrações:', err);
  process.exit(1);
});