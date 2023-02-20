import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./main.module.scss";

export function Main() {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
}
