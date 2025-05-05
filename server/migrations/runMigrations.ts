import { migrateTranslations } from './addTranslations';
import { db } from '../db';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from "@shared/schema";
import { Pool } from '@neondatabase/serverless';
import { migrate } from 'drizzle-orm/neon-serverless/migrator';
import { sql } from 'drizzle-orm';

async function runMigrations() {
  console.log("=== Iniciando processo de migração ===");
  
  try {
    // 1. Push do schema atualizado para o banco de dados
    console.log("1. Aplicando alterações no schema...");

    // Verificar e adicionar colunas ausentes nas tabelas
    const addColumnIfNotExists = async (
      table: string, 
      column: string, 
      columnType: string
    ) => {
      try {
        // Verificar se a coluna já existe
        const result = await db.execute(sql`
          SELECT column_name 
          FROM information_schema.columns 
          WHERE table_name = ${table} 
          AND column_name = ${column}
        `);
        
        if (result.length === 0) {
          // A coluna não existe, então vamos criá-la
          console.log(`Adicionando coluna ${column} à tabela ${table}`);
          await db.execute(sql`
            ALTER TABLE ${sql.raw(table)} 
            ADD COLUMN ${sql.raw(column)} ${sql.raw(columnType)}
          `);
        } else {
          console.log(`Coluna ${column} já existe na tabela ${table}`);
        }
      } catch (error) {
        console.error(`Erro ao verificar/adicionar coluna ${column} na tabela ${table}:`, error);
        throw error;
      }
    };

    // Adicionar colunas para estórias
    await addColumnIfNotExists("stories", "title_en", "TEXT");
    await addColumnIfNotExists("stories", "excerpt_en", "TEXT");
    await addColumnIfNotExists("stories", "content_en", "TEXT");
    await addColumnIfNotExists("stories", "age_range_en", "TEXT");

    // Adicionar colunas para categorias
    await addColumnIfNotExists("categories", "name_en", "TEXT");
    await addColumnIfNotExists("categories", "description_en", "TEXT");

    // Adicionar colunas para testemunhos
    await addColumnIfNotExists("testimonials", "name_en", "TEXT");
    await addColumnIfNotExists("testimonials", "relation_en", "TEXT");
    await addColumnIfNotExists("testimonials", "content_en", "TEXT");
    
    console.log("Schema atualizado com sucesso!");

    // 2. Executar a migração de traduções
    console.log("2. Executando migração de traduções...");
    await migrateTranslations();

    console.log("=== Migração concluída com sucesso ===");
  } catch (error) {
    console.error("ERRO durante o processo de migração:", error);
    process.exit(1);
  }
}

// Executar as migrações se este arquivo for chamado diretamente
if (require.main === module) {
  runMigrations()
    .then(() => {
      console.log("Script finalizado!");
      process.exit(0);
    })
    .catch(err => {
      console.error("Erro no script principal:", err);
      process.exit(1);
    });
}