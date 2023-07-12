"use client";
import { FC } from "react";
import { ChatMessage } from "../ChatMessage/chatMessage";
import style from "./chatMessageBox.module.css";
import { IMessage } from "../ChatWindow/chatWindow";

interface IChatMessageBox {
  messages: IMessage[];
}

export const ChatMessageBox: FC<IChatMessageBox> = ({ messages }) => {
  return (
    <div className={style.chatMessageBox}>
      {messages.map(({ id, text }) => (
        <ChatMessage key={id} text={text} />
      ))}
    </div>
  );
};
