import { Header } from "components/Header";
import { Main } from "components/Main";
import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./layout.module.scss";

function Layout() {
  const location = useLocation();

  return (
    <div className={styles.layout}>
      {location.pathname !== "/register" && <Header />}

      <Main />
    </div>
  );
}

export default Layout;
