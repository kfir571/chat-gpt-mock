import { useEffect, useState } from "react";

import './App.css';
import MainSidebar from './components/MainSidebar';
import ChatBox from './components/ChatBox';

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const [messages, setMessages] = useState([[], [], []]);
  const [historyChat, setHistoryChat] = useState(0);

  useEffect(() => {
    const setRealVh = () => {
      const vh = window.visualViewport?.height || window.innerHeight;
      document.documentElement.style.setProperty("--vh", `${vh * 0.01}px`);
    };

    setRealVh();

    window.visualViewport?.addEventListener('resize', setRealVh);
    window.visualViewport?.addEventListener('scroll', setRealVh);
    window.addEventListener('resize', setRealVh);

    return () => {
      window.visualViewport?.removeEventListener('resize', setRealVh);
      window.visualViewport?.removeEventListener('scroll', setRealVh);
      window.removeEventListener('resize', setRealVh);
    };
  }, []);

  const handleToggleSidebar = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className="App">
      <header className="App-header">
        <MainSidebar
          collapsed={collapsed}
          setCollapsed={handleToggleSidebar}
          setHistoryChat={setHistoryChat}
          messages={messages}
          setMessages={setMessages}
        />
        <ChatBox
          collapsed={collapsed}
          messages={messages[historyChat]}
          setMessages={setMessages}
          historyChat={historyChat}
        />
      </header>
    </div>
  );
}

export default App;
