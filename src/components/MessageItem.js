function MessageItem({ type, message }) {
    return (
        <div  className={`message-item ${type}`}>
            {message}
        </div>
    );
} export default MessageItem;