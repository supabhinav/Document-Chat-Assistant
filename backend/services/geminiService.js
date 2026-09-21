// Import Google GenAI SDK
const { GoogleGenAI } = require("@google/genai");

// Initialize Gemini using API key from .env
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

/**
 * Generate an answer using retrieved PDF context
 * @param {string} context - Relevant text retrieved from the uploaded PDF
 * @param {string} question - User's question
 * @returns {Promise<string>} - Gemini generated answer
 */
exports.askGemini = async (context, question) => {
  try {
    const prompt = `
You are an AI PDF assistant.

Answer the user's question using ONLY the information provided
in the retrieved context from the uploaded PDF.

Context:
${context}

Question:
${question}

Instructions:
- Give a clear and concise answer.
- Use only information available in the context.
- Do not invent information.
- If the answer cannot be found in the provided context, say:
  "The requested information is not available in the uploaded document."
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
    });

    return response.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};