import { useState } from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatKey, setChatKey] = useState(0);

  const handleNewChat = () => {
    setChatKey((k) => k + 1);
    setSidebarOpen(false);
  };

  return (
    <div className="app">
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNewChat={handleNewChat}
      />
      <Chat key={chatKey} onMenuOpen={() => setSidebarOpen(true)} />
    </div>
  );
}
