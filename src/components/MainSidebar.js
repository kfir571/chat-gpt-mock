import { FaBars, FaPlus } from "react-icons/fa";
import { useState } from "react";

export default function MainSidebar({ collapsed, setCollapsed, setHistoryChat, messages, setMessages }) {
  const [selectedChat, setSelectedChat] = useState(0);

  const changeChat = (e) => {
    setSelectedChat(Number(e.currentTarget.id));
    setHistoryChat(Number(e.currentTarget.id));
  }

  const addChat = () => {
    setMessages((prevMessages) => {
      let update = [...prevMessages];
      update = [...update, []];
      return update;
    })
  }

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header" onClick={() => setCollapsed(!collapsed)}>
        <FaBars size={16} />
        {!collapsed && <span className="logo">K-GPT</span>}
      </div>
      <ul className="sidebar-menu">

        {messages.map((_, index) => (
          <li 
            id={index} 
            key={index} 
            onClick={changeChat}
            className={(selectedChat === index && !collapsed) ? "selected-chat-collapsed" : ""} 
            
            >
              {!collapsed && <span>chat {index + 1}</span>}
          </li>
        ))}

        <li key={messages.size} onClick={addChat}><FaPlus/></li>
      </ul>
    </aside>
  );
}
