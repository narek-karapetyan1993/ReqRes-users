import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectAuth } from "features/auth/authSlice";
import { selectUsers } from "features/users/usersSlice";
import { getUsers } from "features/users/usersThunk";
import { EIcons } from "helpers/enumeration";
import { Icon } from "helpers/Icon";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Home.module.scss";
import { User } from "./User";

export default function Home() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { users } = useAppSelector(selectUsers);
  const { token } = useAppSelector(selectAuth);

  useEffect(() => {
    if (token.token === "") {
      navigate("register");
    } else if (
      localStorage.usersData === undefined &&
      users.data.length === 0
    ) {
      dispatch(getUsers(0));
    }
  }, [navigate, dispatch, token.token, users]);

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <ul className={styles.usersList}>
          {users.data.map((user) => {
            return <User key={user.id} user={user} />;
          })}
        </ul>

        {users.page < users.total_pages && (
          <div className={styles.moreBlock}>
            <button
              className={styles.moreBtn}
              onClick={() => dispatch(getUsers(users.page + 1))}
            >
              Показать еще <Icon name={EIcons.arrow} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
