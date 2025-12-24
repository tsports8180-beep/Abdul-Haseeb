
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const translateBatch = async (texts: string[], targetLang: 'English' | 'Japanese') => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Translate the following array of strings into ${targetLang}. 
      Keep the tone sophisticated, modern, and authentic to a Japanese lifestyle creator's media kit. 
      Return ONLY a JSON array of strings in the same order.
      
      Texts: ${JSON.stringify(texts)}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });

    const result = JSON.parse(response.text || "[]");
    return result;
  } catch (error) {
    console.error("Translation error:", error);
    return texts; // Fallback to original
  }
};
