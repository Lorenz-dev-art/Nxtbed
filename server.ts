import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.post("/api/analyze", async (req, res) => {
    try {
      const { wins, beds, kdr } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey) {
        return res.status(500).json({ error: "A chave da API do Gemini (GEMINI_API_KEY) não está configurada." });
      }

      const ai = new GoogleGenAI({ apiKey });

      const prompt = `Você é o Analista de Desempenho da Nexus Bedwars Academy. Seu trabalho é analisar os status do jogador e dar um diagnóstico divertido, usando gírias do Minecraft.

Dados do jogador:
- Vitórias: ${wins}
- Camas Destruídas: ${beds}
- KDR: ${kdr}

Com base nisso:
1. Dê um diagnóstico divertido sobre o jogador usando gírias do Minecraft (ex: noob, pro, tryhard, rush, void, lag).
2. Defina o Estilo de Jogo dele (ex: "Rushador Destruidor" para muitas camas, "Monstro do PvP" para alto KDR e poucas camas, "Estrategista Lendário" para muitas vitórias e status equilibrados, ou invente outro adequado).
3. Dê uma nota de S (Melhor) até F (Iniciante).
4. Dê 2 dicas práticas de como ele pode melhorar no Bedwars, relacionadas aos status baixos se houverem.

Formate a resposta em JSON válido com a seguinte estrutura exata:
{
  "diagnostic": "...",
  "playstyle": "...",
  "rank": "...",
  "tips": ["...", "..."]
}
Responda APENAS com o JSON. Nenhuma outra palavra.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
      });
      
      const rawText = response.text || "{}";
      const cleanText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
      res.json(JSON.parse(cleanText));
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: error.message || "Falha ao analisar os status." });
    }
  });

  app.post("/api/explain", async (req, res) => {
    try {
      const { title, context } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Chave da API do Gemini não configurada." });
      }

      const ai = new GoogleGenAI({ apiKey });

      const prompt = `Você é o Instrutor Chefe da Nexus Bedwars Academy. O aluno pediu para você explicar a seguinte tática/dica de forma extremamente detalhada, passo a passo, usando gírias do Minecraft Bedwars e de um jeito didático:

Tópico: ${title}
Contexto Base: ${context}

Responda APENAS com a explicação detalhada. Formate usando quebras de linha e tópicos para ficar fácil de ler. Seja animado e profissional!`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: prompt,
      });
      
      res.json({ explanation: response.text });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: error.message || "Falha ao gerar explicação detalhada." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
