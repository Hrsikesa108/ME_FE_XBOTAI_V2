export default function Message({ msg, index, setMessages }) {
  const handleLike = (val) => {
    setMessages((prev) =>
      prev.map((m, i) => (i === index ? { ...m, liked: val } : m))
    );
  };

  return (
    <div className="message">
      {/* User row */}
      <div className="user-row">
        <div className="avatar avatar-user">👤</div>
        <div className="message-body">
          <span className="message-name">You</span>
          {msg.timestamp && (
            <span className="message-time">{msg.timestamp}</span>
          )}
          <div className="user-bubble">{msg.question}</div>
        </div>
      </div>

      {/* AI row */}
      <div className="ai-row">
        <div className="avatar avatar-ai">AI</div>
        <div className="message-body">
          <span className="message-name">
            <span>Soul AI</span>
          </span>
          {msg.timestamp && (
            <span className="message-time">{msg.timestamp}</span>
          )}
          <div className="ai-bubble">
            <p>{msg.answer}</p>
            <div className="hover-actions">
              <button
                onClick={() => handleLike(true)}
                className={msg.liked === true ? "liked" : ""}
                title="Like"
              >
                👍
              </button>
              <button
                onClick={() => handleLike(false)}
                className={msg.liked === false ? "disliked" : ""}
                title="Dislike"
              >
                👎
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
