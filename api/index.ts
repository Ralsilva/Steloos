import { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../server/db';
import { storage } from '../server/storage';

// Handler principal para a API
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Responder a requisições OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // Roteamento básico
    const path = req.url?.split('?')[0] || '';
    
    // Exemplo de rota
    if (path.startsWith('/api/stories') && req.method === 'GET') {
      const stories = await storage.getStories();
      return res.status(200).json(stories);
    }
    
    // Rota padrão
    return res.status(404).json({ error: 'Not Found' });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}




