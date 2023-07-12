import { FC } from "react";
import style from "./chatMessage.module.css";

export const ChatMessage: FC<{ text: string }> = ({ text }) => {
  return (
    <div className={style.chatMessage}>
      <p>{text}</p>
    </div>
  );
};
