import { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadPDF = async () => {
    if (!file) {
      setUploadStatus("Please select a PDF first.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      setUploadStatus("Uploading and processing PDF...");

      const response = await fetch(
        "http://localhost:3000/api/chat/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Upload failed");
      }

      setUploadStatus("✓ PDF uploaded and processed successfully!");
    } catch (error) {
      setUploadStatus("Error: " + error.message);
    }
  };

  const askQuestion = async () => {
    if (!question.trim()) return;

    try {
      setLoading(true);
      setAnswer("");

      const response = await fetch(
        "http://localhost:3000/api/chat/ask",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to get answer");
      }

      setAnswer(data.answer);
    } catch (error) {
      setAnswer("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>AI PDF Chat Assistant</h1>

        <p className="subtitle">
          Upload a PDF and ask questions about your document.
        </p>

        <div className="card">
          <h2>Upload Document</h2>

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />

          {file && <p className="file-name">📄 {file.name}</p>}

          <button onClick={uploadPDF}>
            Upload PDF
          </button>

          {uploadStatus && (
            <p className="status">{uploadStatus}</p>
          )}
        </div>

        <div className="card">
          <h2>Ask your PDF</h2>

          <textarea
            placeholder="Ask a question about your document..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button onClick={askQuestion} disabled={loading}>
            {loading ? "Generating Answer..." : "Ask AI"}
          </button>
        </div>

        {answer && (
          <div className="card answer-card">
            <h2>AI Answer</h2>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;