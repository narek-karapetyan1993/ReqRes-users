import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectAuth } from "features/auth/authSlice";
import { userLogout } from "features/auth/authThunk";
import { selectUsers } from "features/users/usersSlice";
import { getUsers } from "features/users/usersThunk";
import { EColor, EIcons } from "helpers/enumeration";
import { Icon } from "helpers/Icon";
import { useResize } from "hooks/useResize";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import styles from "./header.module.scss";

export function Header() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { width } = useResize();

  const users = useAppSelector(selectUsers);
  const { token } = useAppSelector(selectAuth);
  const { id } = useParams();

  useEffect(() => {
    if (
      users.users.data.length === 0 &&
      token.token !== "" &&
      localStorage.usersData === undefined &&
      location.pathname !== "/ReqRes-users/users"
    ) {
      dispatch(getUsers(0));
    }
  }, [dispatch, users.users.data, token.token, location.pathname]);

  function logout() {
    localStorage.clear();
    dispatch(userLogout());
    navigate("/ReqRes-users/register");
  }

  const user = users.users.data.find((element) => element.id === Number(id));

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          {location.pathname === "/ReqRes-users/users" ? (
            <div className={styles.home}>
              <div className={styles.logout}>
                <button type="button" className={styles.logoutBtn}>
                  <Link
                    to="/"
                    onClick={() => logout()}
                    className={styles.logoutLink}
                  >
                    {width >= 700 ? "Выход" : <Icon name={EIcons.logout} />}
                  </Link>
                </button>
              </div>
              <h1 className={styles.heading}>Наша команда</h1>
              <span className={styles.description}>
                Это опытные специалисты, хорошо разбирающиеся во всех задачах,
                которые ложатся на их плечи, и умеющие находить выход из любых,
                даже самых сложных ситуаций.
              </span>
            </div>
          ) : (
            <div className={styles.user}>
              <div className={styles.back}>
                <button type="button" className={styles.backBtn}>
                  <Link to="/ReqRes-users/users" className={styles.backLink}>
                    {width >= 700 ? (
                      "Назад"
                    ) : (
                      <Icon name={EIcons.arrow} color={EColor.white} />
                    )}
                  </Link>
                </button>
              </div>

              <div className={styles.logout}>
                <button type="button" className={styles.logoutBtn}>
                  <Link
                    to="/"
                    onClick={() => logout()}
                    className={styles.logoutLink}
                  >
                    {width >= 700 ? "Выход" : <Icon name={EIcons.logout} />}
                  </Link>
                </button>
              </div>

              <img
                className={styles.avatar}
                src={user?.avatar}
                alt="Аватар пользователя"
              />
              <div className={styles.info}>
                <h1 className={styles.heading}>
                  {user?.first_name} {user?.last_name}
                </h1>
                <span className={styles.description}>Партнёр</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
