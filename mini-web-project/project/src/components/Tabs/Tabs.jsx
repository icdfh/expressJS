import styles from "./Tabs.module.css";

function Tabs({ value, onChange }) {
  return (
    <div className={styles.tabs}>
      <button
        className={`${styles.tab} ${value === "feed" ? styles.active : ""}`}
        onClick={() => onChange("feed")}
      >
        Лента
      </button>

      <button
        className={`${styles.tab} ${value === "shop" ? styles.active : ""}`}
        onClick={() => onChange("shop")}
      >
        Магазин
      </button>

      <button
        className={`${styles.tab} ${value === "profile" ? styles.active : ""}`}
        onClick={() => onChange("profile")}
      >
        Профиль
      </button>
    </div>
  );
}

export default Tabs;
