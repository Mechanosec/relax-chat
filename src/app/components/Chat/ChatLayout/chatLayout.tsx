import { ChatWindow } from "../ChatWindow/chatWindow";
import style from "./chatLayout.module.css";

export const ChatLayout = () => {
  return (
    <div className={style.chatLayout}>
      <ChatWindow />
    </div>
  );
};
