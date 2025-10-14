import { db } from './index.js';
import { users } from './schema.js';

const seed = async () => {
    console.log('Iniciando o processo de seeding...');

    console.log('Limpando a tabela de usuários...');
    await db.delete(users);

    console.log('Inserindo novos usuários...');
    await db.insert(users).values([
        { name: 'Alice Drizzle', email: 'alice@example.com' },
        { name: 'Bob Drizzle', email: 'bob@example.com' },
        { name: 'Kaique Drizzle', email: 'kaique@email.com'}
    ]);

    console.log('Seeding concluído com sucesso!');
    process.exit(0);
}

seed().catch(err => {
    console.error('Erro durante o seeding:', err);
    process.exit(1);
});