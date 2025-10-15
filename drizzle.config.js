import 'dotenv/config';

export default {
  schema: './db/schema.js',
  out: './db/migrations',
  driver: 'pg',
  dbCredentials: {
    host: process.env.DATABASE_URL,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    ssl: 'require',
  },
};
