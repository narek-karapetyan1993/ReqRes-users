import React from "react";
import { Link } from "react-router-dom";

import styles from "./nomatch.module.css";

export function NoMatch() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.error}>
        <span className={styles.text}>По вашему запросу ничего не нашлось</span>
        <Link className={styles.link} to={"/"}>
          Вернутся на главную
        </Link>
      </div>
    </div>
  );
}
