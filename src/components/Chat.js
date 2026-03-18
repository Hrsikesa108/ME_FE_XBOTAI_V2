import { useState } from "react";
import { getAnswer } from "../data";
import Message from "./Message";
import FeedbackModal from "./FeedbackModal";
import Rating from "./Rating";

const SUGGESTIONS = [
  { title: "Hi, what is the weather", subtitle: "Get immediate AI generated response" },
  { title: "Hi, what is my location", subtitle: "Get immediate AI generated response" },
  { title: "Hi, what is the temperature", subtitle: "Get immediate AI generated response" },
  { title: "Hi, how are you", subtitle: "Get immediate AI generated response" },
];

function now() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function Chat({ onMenuOpen }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [rating, setRating] = useState(0);

  const handleAsk = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const answer = getAnswer(input);
    setMessages((prev) => [
      ...prev,
      { question: input, answer, liked: null, timestamp: now() },
    ]);
    setInput("");
  };

  const handleSuggestion = (question) => {
    const answer = getAnswer(question);
    setMessages((prev) => [
      ...prev,
      { question, answer, liked: null, timestamp: now() },
    ]);
  };

  const handleSave = () => {
    if (messages.length === 0) return;

    const chats = JSON.parse(localStorage.getItem("chats")) || [];
    chats.push({
      rating,
      feedback: "",
      savedAt: new Date().toLocaleDateString(),
      messages: messages.map((m) => ({ ...m })),
    });
    localStorage.setItem("chats", JSON.stringify(chats));

    setMessages([]);
    setRating(0);
    setShowFeedback(true);
  };

  return (
    <div className="chat">
      {/* Mobile top bar — hidden on desktop */}
      <div className="mobile-header">
        <button className="hamburger-btn" onClick={onMenuOpen} aria-label="Open menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <h1 className="mobile-title">Bot AI</h1>
      </div>

      {/* Desktop header — hidden on mobile */}
      <div className="chat-header">
        <h1 className="app-title">Bot AI</h1>
      </div>

      {messages.length === 0 ? (
        <div className="empty-state">
          <h2 className="empty-state-heading">How Can I Help You Today?</h2>
          <div className="empty-state-icon">🧠</div>
          <div className="suggestions-grid">
            {SUGGESTIONS.map((s, i) => (
              <div
                key={i}
                className="suggestion-card"
                onClick={() => handleSuggestion(s.title)}
              >
                <div className="suggestion-title">{s.title}</div>
                <div className="suggestion-subtitle">{s.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="messages">
          {messages.map((msg, i) => (
            <Message key={i} msg={msg} index={i} setMessages={setMessages} />
          ))}
        </div>
      )}

      <form className="chat-form" onSubmit={handleAsk}>
        <input
          className="chat-input"
          placeholder="Message Bot AI…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Ask</button>
        <button type="button" className="secondary" onClick={handleSave}>
          Save
        </button>
      </form>

      {messages.length > 0 && (
        <Rating rating={rating} setRating={setRating} />
      )}

      {showFeedback && (
        <FeedbackModal onClose={() => setShowFeedback(false)} />
      )}
    </div>
  );
}
