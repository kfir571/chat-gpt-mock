import { FaBars, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { TEXTS } from "../constants/texts";

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
    <div className={`left-side ${collapsed ? "collapsed" : ""}`}>
      <div className={`sidebar-header ${collapsed ? "collapsed" : ""}`} onClick={() => setCollapsed(!collapsed)}>
        <FaBars size={16} />
        {!collapsed && <span className="logo">{TEXTS.logo_name}</span>}
      </div>
      <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>

        <ul className={`sidebar-menu ${collapsed ? "collapsed" : ""}`}>

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

          <li key={messages.size} onClick={addChat}><FaPlus /></li>
        </ul>
      </aside>
    </div>

  );
}
