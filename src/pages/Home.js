import { useState } from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      />
      <Chat onMenuOpen={() => setSidebarOpen(true)} />
    </div>
  );
}
