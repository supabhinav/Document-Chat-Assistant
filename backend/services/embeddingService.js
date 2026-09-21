const { GoogleGenAI } = require("@google/genai");
const { MemoryVectorStore } = require("langchain/vectorstores/memory");
const { Document } = require("langchain/document");

// Initialize Google GenAI
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Custom Gemini Embeddings for LangChain
class GeminiEmbeddings {
  async embedDocuments(texts) {
    const embeddings = [];

    for (const text of texts) {
      const response = await ai.models.embedContent({
        model: "gemini-embedding-001",
        contents: text,
      });

      embeddings.push(response.embeddings[0].values);
    }

    return embeddings;
  }

  async embedQuery(text) {
    const response = await ai.models.embedContent({
      model: "gemini-embedding-001",
      contents: text,
    });

    return response.embeddings[0].values;
  }
}

/**
 * Create vector store from PDF text chunks
 */
exports.createStore = async (texts) => {
  console.log("\n========== PDF PROCESSING ==========");
  console.log("Total chunks created:", texts.length);

  const docs = texts.map(
    (text) =>
      new Document({
        pageContent: text,
      })
  );

  const embeddings = new GeminiEmbeddings();

  const store = await MemoryVectorStore.fromDocuments(
    docs,
    embeddings
  );

  console.log("Vector store created successfully.");

  return store;
};

/**
 * Retrieve top 3 most relevant chunks
 */
exports.queryStore = async (store, query) => {
  console.log("\n========== USER QUESTION ==========");
  console.log(query);

  const results = await store.similaritySearch(query, 3);

  console.log("\n========== RETRIEVED CHUNKS ==========");

  results.forEach((doc, index) => {
    console.log(`\n--- Chunk ${index + 1} ---`);
    console.log(doc.pageContent);
  });

  console.log("\n======================================");

  return results
    .map((doc) => doc.pageContent)
    .join("\n\n");
};