# 📄 Document Chat Assistant

An AI-powered document question-answering application that allows users to upload PDF documents and ask questions about their content using a Retrieval-Augmented Generation (RAG) workflow.

The application uses **React.js** for the frontend, **Node.js & Express.js** for the backend, **LangChain** for document retrieval, and **Google Gemini** for embeddings and context-aware answer generation.

---

## ⭐ Features

* 📄 Upload and process PDF documents
* 🔍 Extract and chunk text from uploaded PDFs
* 🧠 Generate semantic embeddings using Google Gemini
* 💾 Store document embeddings using LangChain `MemoryVectorStore`
* 🔎 Retrieve relevant document chunks using semantic similarity search
* 🤖 Generate context-aware answers using Google Gemini
* 💬 Interactive React-based user interface
* 🔗 REST API communication between frontend and backend
* 🛡️ Reduces hallucinations by answering from retrieved PDF context

---

## 🧰 Tech Stack

| Component        | Technology                  |
| ---------------- | --------------------------- |
| Frontend         | React.js, Vite, CSS         |
| Backend          | Node.js, Express.js         |
| AI / LLM         | Google Gemini               |
| Embeddings       | Gemini Embedding            |
| RAG Framework    | LangChain                   |
| Vector Store     | LangChain MemoryVectorStore |
| PDF Processing   | pdf-parse                   |
| API Architecture | REST APIs                   |
| File Upload      | Multer                      |

---

## 🧠 How It Works

```text
User Uploads PDF
        ↓
React Frontend
        ↓
Node.js + Express API
        ↓
PDF Text Extraction
        ↓
Text Chunking
        ↓
Gemini Embeddings
        ↓
LangChain MemoryVectorStore
        ↓
Semantic Similarity Search
        ↓
Relevant Document Context
        ↓
Gemini LLM
        ↓
Context-Aware Answer
```

The system follows a **Retrieval-Augmented Generation (RAG)** approach. Instead of sending the entire document to the language model, it retrieves the most relevant chunks for the user's question and provides them as context to Gemini.

---

## 📁 Project Structure

```text
Document-Chat-Assistant/

│
├── backend/
│   ├── controllers/
│   │   └── chatController.js
│   ├── routes/
│   │   └── chatRoutes.js
│   ├── services/
│   │   ├── pdfService.js
│   │   ├── embeddingService.js
│   │   └── geminiService.js
│   ├── utils/
│   │   └── chunkText.js
│   ├── uploads/
│   ├── app.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/supabhinav/Document-Chat-Assistant.git

cd Document-Chat-Assistant
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` directory:

```env
PORT=3000

GEMINI_API_KEY=your_google_gemini_api_key
```

You can obtain a Gemini API key from Google AI Studio.

> ⚠️ Never commit your `.env` file or API key to GitHub.

---

## 🚀 Run the Application

### Start Backend

Open a terminal:

```bash
cd backend
node app.js
```

Backend runs on:

```text
http://localhost:3000
```

### Start Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

Open the frontend URL in your browser, upload a PDF, and start asking questions.

---

## 📬 API Endpoints

### Upload PDF

```http
POST /api/chat/upload
```

Request type:

```text
multipart/form-data
```

Form field:

```text
pdf
```

The backend extracts the PDF text, creates chunks, generates embeddings, and stores them in the vector store.

### Ask Question

```http
POST /api/chat/ask
```

Request body:

```json
{
  "question": "What is the main objective of this document?"
}
```

The system retrieves relevant document chunks and uses them as context for generating the answer.

---

## 🔄 RAG Workflow

1. User uploads a PDF.
2. `pdf-parse` extracts text from the document.
3. Extracted text is divided into smaller chunks.
4. Gemini generates embeddings for the chunks.
5. LangChain stores the embeddings in `MemoryVectorStore`.
6. The user's question is converted into an embedding.
7. Semantic similarity search retrieves the most relevant chunks.
8. Retrieved context and the question are sent to Gemini.
9. Gemini generates a context-aware response.
10. The answer is displayed on the React frontend.

---

## 🎯 Use Cases

* Research paper analysis
* Resume and document Q&A
* Study material exploration
* Report summarization and querying
* Knowledge-base document search
* AI-powered document assistance

---

## 🔮 Future Improvements

* Support multiple PDF documents
* Add persistent vector database storage
* Add chat history
* Improve document retrieval and chunking
* Add source/page citations in answers
* Add user authentication
* Deploy frontend and backend to cloud platforms

---

## 👨‍💻 Author

**Abhinav Jha**

GitHub: [supabhinav](https://github.com/supabhinav)

---

## 📄 License

This project is intended for educational and development purposes.
