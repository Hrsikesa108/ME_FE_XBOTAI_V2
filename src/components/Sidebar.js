import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, onClose, onNewChat }) {
  const handleClose = () => onClose && onClose();

  const handleNewChat = () => {
    onNewChat && onNewChat();
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-top">
        <div className="sidebar-icon">🤖</div>
        <button className="sidebar-new-chat" onClick={handleNewChat}>
          New Chat
        </button>
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
