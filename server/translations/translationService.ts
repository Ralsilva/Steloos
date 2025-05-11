import { db } from "../db";
import { translations } from "@shared/schema";
import { eq, and } from "drizzle-orm";

export class TranslationService {
  // Obter tradução
  async getTranslation(entityType: string, entityId: string | number, field: string, language: string): Promise<string | null> {
    const result = await db.select({ value: translations.value })
      .from(translations)
      .where(
        and(
          eq(translations.entityType, entityType),
          eq(translations.entityId, String(entityId)),
          eq(translations.field, field),
          eq(translations.language, language)
        )
      )
      .limit(1);
    
    return result.length > 0 ? result[0].value : null;
  }

  // Salvar tradução
  async saveTranslation(entityType: string, entityId: string | number, field: string, language: string, value: string): Promise<void> {
    // Verificar se já existe
    const existing = await db.select({ id: translations.id })
      .from(translations)
      .where(
        and(
          eq(translations.entityType, entityType),
          eq(translations.entityId, String(entityId)),
          eq(translations.field, field),
          eq(translations.language, language)
        )
      )
      .limit(1);
    
    if (existing.length > 0) {
      // Atualizar
      await db.update(translations)
        .set({ 
          value,
          updatedAt: new Date()
        })
        .where(eq(translations.id, existing[0].id));
    } else {
      // Inserir
      await db.insert(translations)
        .values({
          entityType,
          entityId: String(entityId),
          field,
          language,
          value
        });
    }
  }

  // Obter todas as traduções para uma entidade
  async getAllTranslations(entityType: string, entityId: string | number, language: string): Promise<Record<string, string>> {
    const results = await db.select({
      field: translations.field,
      value: translations.value
    })
    .from(translations)
    .where(
      and(
        eq(translations.entityType, entityType),
        eq(translations.entityId, String(entityId)),
        eq(translations.language, language)
      )
    );
    
    return results.reduce((acc, item) => {
      acc[item.field] = item.value;
      return acc;
    }, {} as Record<string, string>);
  }
}