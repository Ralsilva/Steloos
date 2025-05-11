import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// Verificar se o banco de dados está desabilitado para desenvolvimento local
if (process.env.NEXT_PUBLIC_DISABLE_DATABASE === 'true') {
  console.log('Database disabled for local development');
  // Criar mocks para pool e db para evitar erros
  export const pool = {} as Pool;
  export const db = {} as any;
} else {
  // Configuração normal do banco de dados
  if (!process.env.DATABASE_URL) {
    throw new Error(
      "DATABASE_URL must be set. Did you forget to provision a database?",
    );
  }

  export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  export const db = drizzle({ client: pool, schema });
}