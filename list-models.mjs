import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: "AIzaSyBrTIqjIT2ZY46Kzq6NxBmxFOvDxA0Gyn8" });
const models = [];
for await (const m of await ai.models.list()) {
  models.push(m.name);
}
console.log(models.join("\n"));
