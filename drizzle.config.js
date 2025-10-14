import 'dotenv/config';

export default {
  schema: './db/schema.js',
  out: './db/migrations',
  driver: 'pg',
  dbCredentials: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'postgres',
    ssl: true,
  },
};