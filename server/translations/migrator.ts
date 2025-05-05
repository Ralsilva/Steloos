import { migrateTranslations } from './translator';
import { fileURLToPath } from 'url';

// Executar a migração
async function runMigration() {
  try {
    await migrateTranslations();
    console.log("Migração de traduções executada com sucesso!");
  } catch (error) {
    console.error("Erro ao executar migração de traduções:", error);
  }
}

// Verificar se o arquivo está sendo executado diretamente (ESM não tem 'require.main')
const isMainModule = import.meta.url.endsWith('migrator.ts');

if (isMainModule) {
  runMigration()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error("Erro ao executar script:", error);
      process.exit(1);
    });
}