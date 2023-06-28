import style from "./chatPanel.module.css";

export const ChatPanel = () => {
  return (
    <div className={style.chatPanel}>
      <button type="submit">Send</button>
      <input type="text" />
    </div>
  );
};
