import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve the HTML portfolio as the main page
  app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });

  // Serve the profile image
  app.get('/john-profile.png', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'john-profile.png'));
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
