# 📄 PDF Chat Assistant using Node.js + LangChain + Google Gemini

**Chat with your PDFs using AI!** This open-source project lets you upload any PDF file and ask natural language questions about its content using **Google Gemini LLM**, **LangChain**, and **Node.js**.

> Ideal for document analysis, contract review, resume Q&A, and building AI-powered document search systems.

---

## ⭐ Features

- Upload PDF files and parse content.
- Chunk and embed text using **Gemini Embeddings**.
- Store embeddings in-memory using LangChain’s `MemoryVectorStore`.
- Perform similarity search on user questions.
- Query **Google Gemini** to generate accurate contextual responses.


## 🚀 **Powered by**: 

`Google Gemini`, `LangChain`, `FAISS`, `Express.js`, and `pdf-parse`

## 📚 **Keywords**: 

`PDF Chat Assistant`, `LangChain Node.js`, `Gemini LLM`, `Document Q&A`, `RAG`, `AI Chatbot`, `PDF Parser`, `Semantic Search`

---

## 🧰 Tech Stack

| Component       | Technology                  |
|----------------|-----------------------------|
| Backend         | Node.js (Express)           |
| AI/LLM API      | Google Gemini (via LangChain)|
| PDF Parsing     | `pdf-parse`                 |
| Embedding Store | LangChain Memory Vector DB  |
| Chunking        | Manual with configurable size |

---

## 🛠️ Installation

```bash
git clone https://github.com/your-username/pdf-chat-gemini.git
cd pdf-chat-gemini
npm install

```

## 🔐 Environment Variables

Create a .env file in the root:

```
PORT=3000
GEMINI_API_KEY=your_google_gemini_api_key
```

##### ✅ You need access to Google AI Studio or Vertex AI to get your Gemini API key.

## 📦 Run the Project

```
node app.js
```

## 📬 API Endpoints

### 1. Upload PDF

```
POST /api/chat/upload
Content-Type: multipart/form-data
Form field: pdf (upload a .pdf file)
```

- Parses PDF
- Extracts text
- Chunks and embeds it into memory

### 2. Ask a Question

```
POST /api/chat/ask
Content-Type: application/json

{
  "question": "What is this PDF about?"
}
```

- Returns answer based on the most relevant chunks from the uploaded PDF

#

## 📁 Project Structure

```
pdf-chat-assistant/
├── app.js
├── .env
├── controllers/
│   └── chatController.js
├── routes/
│   └── chatRoutes.js
├── services/
│   ├── pdfService.js
│   ├── embeddingService.js
│   └── geminiService.js
├── utils/
│   └── chunkText.js
├── uploads/
└── vector-store/
```

##  🧠 How It Works

- Upload: PDF gets parsed and split into chunks.
- Embed: Each chunk is turned into a vector using Gemini Embeddings.
- Store: Vectors are stored in a temporary in-memory vector store.
- Query: User asks a question → similar chunks are retrieved.
- Answer: Gemini responds using those chunks as context.

## 🧪 Example Usage

Use Postman or Insomnia to:

1. Upload a PDF to `/api/chat/upload`

2. Then POST to `/api/chat/ask` with your question

## Demo Link

[Demo](https://jam.dev/c/b569bc2b-6417-49ad-87ce-5672bbc63a22)

## 📄 License
MIT License

## 🙌 Acknowledgements
LangChain

Google Generative AI (Gemini)

pdf-parse
