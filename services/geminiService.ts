import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function translateText(texts: string[], targetLang: string): Promise<Record<string, string>> {
  if (!texts || texts.length === 0) return {};

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Translate the following list of strings to ${targetLang}. 
      Keep the tone professional, minimalist, and authentic for a Japanese creator portfolio.
      Return the results as a JSON array of objects, each having "original" and "translated" properties.
      
      Strings: ${JSON.stringify(texts)}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              original: { type: Type.STRING },
              translated: { type: Type.STRING }
            },
            required: ["original", "translated"]
          }
        }
      }
    });

    const jsonStr = response.text;
    if (!jsonStr) return {};
    
    const results = JSON.parse(jsonStr);
    const translations: Record<string, string> = {};
    
    if (Array.isArray(results)) {
      results.forEach((item: { original: string; translated: string }) => {
        translations[item.original] = item.translated;
      });
    }
    
    return translations;
  } catch (error) {
    console.error("Gemini Translation Error:", error);
    return {};
  }
}