import { ChatMessageBox } from "../ChatMessageBox/chatMessageBox";
import { ChatPanel } from "../ChatPanel/chatPanel";
import style from "./chatWindow.module.css";

export const ChatWindow = () => {
  return (
    <div className={style.chatWindow}>
      <ChatMessageBox />
      <ChatPanel />
    </div>
  );
};
