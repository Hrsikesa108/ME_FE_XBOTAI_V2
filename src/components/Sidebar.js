import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-top">
        <div className="sidebar-icon">🤖</div>
        <Link to="/" className="sidebar-new-chat">
          New Chat
        </Link>
      </div>

      <Link to="/history" className="history-link" onClick={handleClose}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Past Conversations
      </Link>
    </div>
  );
}
