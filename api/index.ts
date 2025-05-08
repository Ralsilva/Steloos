import { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import { createServer } from 'http';
import { registerRoutes } from '../server/routes';
import { initializeDatabase } from '../server/storage';

// Inicializa o Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Inicializa o banco de dados
let dbInitialized = false;

// Cria um servidor HTTP para o Express
const server = createServer(app);

// Registra as rotas
registerRoutes(app);

// Handler para requisições do Vercel
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Inicializa o banco de dados apenas uma vez
  if (!dbInitialized) {
    try {
      await initializeDatabase();
      dbInitialized = true;
      console.log('Database initialized successfully');
    } catch (error) {
      console.error(`Error initializing database: ${error}`);
    }
  }

  // Processa a requisição com o Express
  return new Promise((resolve, reject) => {
    app(req, res, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve(undefined);
    });
  });
}