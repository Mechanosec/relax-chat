"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { ChatMessageBox } from "../ChatMessageBox/chatMessageBox";
import { ChatPanel } from "../ChatPanel/chatPanel";
import style from "./chatWindow.module.css";

export interface IMessage {
  id: string;
  text: string;
}

export const ChatWindow = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setMessages([
      { id: "1", text: "asdasdasd" },
      { id: "2", text: "cxvcxvcxv" },
    ]);
  }, []);

  const addMessage = (): void => {
    setMessages((prevState) => [
      ...prevState,
      { id: inputValue, text: inputValue },
    ]);
    setInputValue("");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  return (
    <div className={style.chatWindow}>
      <ChatMessageBox messages={messages} />
      <ChatPanel
        addMessage={addMessage}
        handleInputChange={handleInputChange}
        inputValue={inputValue}
      />
    </div>
  );
};
