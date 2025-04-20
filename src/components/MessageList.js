import MessageItem from "./MessageItem";
import { useEffect, useRef } from "react";

function MessageList({ messages }) {
    const bottomRef = useRef(null);
    
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);

    return (
        <div className="message-list">
            {messages.map((message, index) => (
                <MessageItem type={message.type} message={message.message} key={index}></MessageItem>
            ))}
            <div ref={bottomRef} />
        </div>
    );
} export default MessageList;