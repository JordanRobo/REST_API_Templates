import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

const sqlite = new Database('db.sqlite', { create: true});
const db = drizzle(sqlite);

export default db;
