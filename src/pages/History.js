import { useState } from "react";
import { Link } from "react-router-dom";

export default function History() {
  const chats = JSON.parse(localStorage.getItem("chats")) || [];
  const [filterRating, setFilterRating] = useState(0);

  const filtered = filterRating === 0
    ? chats
    : chats.filter((c) => c.rating === filterRating);

  return (
    <div className="history-page">
      <div className="history-page-inner">
        <div className="history-page-header">
          <Link to="/" className="back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h2>Conversation History</h2>
        </div>

        {/* Rating filter */}
        <div className="history-filter">
          <span className="filter-label">Filter by rating:</span>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filterRating === 0 ? "active" : ""}`}
              onClick={() => setFilterRating(0)}
            >
              All
            </button>
            {[1, 2, 3, 4, 5].map((r) => (
              <button
                key={r}
                className={`filter-btn ${filterRating === r ? "active" : ""}`}
                onClick={() => setFilterRating(r)}
              >
                {"★".repeat(r)}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="history-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p>
              {chats.length === 0
                ? "No conversation history yet"
                : "No conversations match this rating"}
            </p>
          </div>
        ) : (
          <>
            <div className="history-section-label">Today's Chats</div>
            <div className="history-cards">
              {filtered.map((chat, idx) => (
                <div key={idx} className="history-card">
                  {chat.messages.map((m, i) => (
                    <div key={i}>
                      {/* User message */}
                      <div className="history-message">
                        <div className="history-avatar history-avatar-user">👤</div>
                        <div className="history-message-body">
                          <span className="history-message-name">You</span>
                          {m.timestamp && (
                            <span className="history-message-time">{m.timestamp}</span>
                          )}
                          <div className="history-message-text">{m.question}</div>
                        </div>
                      </div>

                      {/* AI message */}
                      <div className="history-message">
                        <div className="history-avatar history-avatar-ai">AI</div>
                        <div className="history-message-body">
                          <span className="history-message-name">Soul AI</span>
                          {m.timestamp && (
                            <span className="history-message-time">{m.timestamp}</span>
                          )}
                          <div className="history-message-text">{m.answer}</div>
                          {m.liked !== null && m.liked !== undefined && (
                            <div className="history-card-like">
                              {m.liked ? "👍" : "👎"}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Conversation-level meta */}
                  <div className="history-card-meta">
                    <div className="history-card-rating">
                      Rating:{" "}
                      {chat.rating ? (
                        <span>
                          {"★".repeat(chat.rating)}{"☆".repeat(5 - chat.rating)}
                        </span>
                      ) : (
                        "N/A"
                      )}
                    </div>
                    {chat.feedback && (
                      <div className="history-card-feedback">
                        Feedback: {chat.feedback}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
