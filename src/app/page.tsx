import { ChatLayout } from "./components/Chat/ChatLayout/chatLayout";
import { Settings } from "./components/Settings/settings";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.layout}>
        <Settings />
        <ChatLayout />
      </div>
    </main>
  );
}
