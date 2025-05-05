import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool } from '@neondatabase/serverless';
import { sql } from 'drizzle-orm';

async function addColumns() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL must be set");
  }

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle({ client: pool });

  console.log("Iniciando migração do banco de dados...");
  
  try {
    // Adicionar colunas para tabela de estórias
    await db.execute(sql`
      ALTER TABLE stories 
      ADD COLUMN IF NOT EXISTS title_en TEXT,
      ADD COLUMN IF NOT EXISTS excerpt_en TEXT,
      ADD COLUMN IF NOT EXISTS content_en TEXT,
      ADD COLUMN IF NOT EXISTS age_range_en TEXT
    `);
    console.log("Colunas adicionadas à tabela 'stories'");

    // Adicionar colunas para tabela de categorias
    await db.execute(sql`
      ALTER TABLE categories 
      ADD COLUMN IF NOT EXISTS name_en TEXT,
      ADD COLUMN IF NOT EXISTS description_en TEXT
    `);
    console.log("Colunas adicionadas à tabela 'categories'");

    // Adicionar colunas para tabela de testemunhos
    await db.execute(sql`
      ALTER TABLE testimonials 
      ADD COLUMN IF NOT EXISTS name_en TEXT,
      ADD COLUMN IF NOT EXISTS relation_en TEXT,
      ADD COLUMN IF NOT EXISTS content_en TEXT
    `);
    console.log("Colunas adicionadas à tabela 'testimonials'");

    console.log("Migração concluída com sucesso!");
  } catch (error) {
    console.error("Erro durante a migração:", error);
    throw error;
  } finally {
    await pool.end();
  }
}

// Executar a função principal
addColumns()
  .then(() => {
    console.log("Script finalizado com sucesso");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Erro no script:", error);
    process.exit(1);
  });