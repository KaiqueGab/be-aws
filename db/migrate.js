import 'dotenv/config';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const runMigrations = async () => {
  const migrationClient = postgres({
    host: process.env.DATABASE_URL,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
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
