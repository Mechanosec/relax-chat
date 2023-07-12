import { ChangeEvent, FC } from "react";
import style from "./chatPanel.module.css";

interface IChatPanel {
  addMessage: () => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

export const ChatPanel: FC<IChatPanel> = ({
  addMessage,
  handleInputChange,
  inputValue,
}) => {
  return (
    <div className={style.chatPanel}>
      <button type="submit" onClick={addMessage}>
        Send
      </button>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
};
