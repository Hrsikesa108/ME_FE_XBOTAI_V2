import { useNavigate } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
  const nav = useNavigate();

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-top">
        <div className="sidebar-icon">🤖</div>
        <span className="sidebar-new-chat">New Chat</span>
        <button
          className="sidebar-edit-btn"
          onClick={() => { window.location.reload(); }}
          title="New Chat"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
      </div>

      <div
        className="history-link"
        onClick={() => { nav("/history"); onClose && onClose(); }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Past Conversations
      </div>
    </div>
  );
}
