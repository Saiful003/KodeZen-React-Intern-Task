import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <div className={styles.headerArea}>
        <div className={styles.headerLeft}>
          <h2>KodeZen Page Builder</h2>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.headerBtn}>Sign in</button>
          <button className={styles.headerBtn}>Sign out</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
