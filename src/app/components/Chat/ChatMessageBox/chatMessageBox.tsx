import { ChatMessage } from "../ChatMessage/chatMessage";
import style from "./chatMessageBox.module.css";

export const ChatMessageBox = () => {
  return (
    <div className={style.chatMessageBox}>
      <ChatMessage />
      <ChatMessage />
    </div>
  );
};
