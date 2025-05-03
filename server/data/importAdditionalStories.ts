import { additionalStoriesParte1 } from './additionalStories-parte1';
import { additionalStoriesParte2 } from './additionalStories-parte2';
import { additionalStoriesParte3 } from './additionalStories-parte3';
import { additionalStoriesParte4 } from './additionalStories-parte4';
import { db } from '../db';
import { stories, Story } from '@shared/schema';

/**
 * Importa todas as estórias adicionais para o banco de dados.
 */
export async function importAdditionalStories() {
  const allStories = [
    ...additionalStoriesParte1,
    ...additionalStoriesParte2,
    ...additionalStoriesParte3,
    ...additionalStoriesParte4
  ];

  console.log(`Importando ${allStories.length} estórias adicionais...`);

  try {
    // Inserindo estórias em lotes para melhor performance
    const results = await db.insert(stories).values(allStories);
    console.log(`Importação concluída com sucesso! ${results.rowCount} estórias adicionadas.`);
    return results.rowCount;
  } catch (error) {
    console.error('Erro ao importar estórias adicionais:', error);
    throw error;
  }
}

// Este código não é mais necessário, a importação será feita pelo storage.ts
// Código abaixo foi removido devido à compatibilidade com ES modules
/*
if (import.meta.url === `file://${process.argv[1]}`) {
  (async () => {
    try {
      await importAdditionalStories();
      process.exit(0);
    } catch (error) {
      console.error('Falha na importação de estórias:', error);
      process.exit(1);
    }
  })();
}
*/