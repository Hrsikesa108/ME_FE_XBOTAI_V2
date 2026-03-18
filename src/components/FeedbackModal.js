import { useState } from "react";

export default function FeedbackModal({ onClose }) {
  const [text, setText] = useState("");

  const submit = () => {
    const chats = JSON.parse(localStorage.getItem("chats")) || [];
    if (chats.length > 0) {
      chats[chats.length - 1].feedback = text;
      localStorage.setItem("chats", JSON.stringify(chats));
    }
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="modal-icon">💡</span>
          <h3>Provide Additional Feedback</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share your thoughts about this conversation..."
        />
        <button className="submit-btn" onClick={submit}>Submit</button>
      </div>
    </div>
  );
}
