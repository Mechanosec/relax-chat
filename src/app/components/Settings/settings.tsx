import style from "./settings.module.css";

export const Settings = () => {
  return (
    <aside className={style.settings}>
      <ul>
        <li>
          <button>Background</button>
          <select>
            <option>Green</option>
            <option>Red</option>
          </select>
        </li>
        <li>
          <button>Message</button>
          <select>
            <option>Green</option>
            <option>Red</option>
          </select>
        </li>
      </ul>
    </aside>
  );
};
