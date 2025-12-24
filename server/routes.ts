import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          error: "Naam, email en bericht zijn verplicht"
        });
      }

      const submission = await storage.createContactSubmission({
        name,
        email,
        company,
        message
      });

      return res.status(201).json({
        success: true,
        id: submission.id
      });
    } catch {
      return res.status(500).json({
        error: "Interne serverfout"
      });
    }
  });

  app.get("/api/contact", async (_req, res) => {
    const submissions = await storage.getContactSubmissions();
    res.json(submissions);
  });

  return createServer(app);
}
