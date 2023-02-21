import { useAppDispatch } from "app/hooks";
import { like } from "features/users/usersSlice";
import { EColor, EIcons } from "helpers/enumeration";
import { Icon } from "helpers/Icon";
import React from "react";
import { Link } from "react-router-dom";
import { UserProps } from "./";

import styles from "./User.module.scss";

export function User({ user }: UserProps) {
  const dispatch = useAppDispatch();

  return (
    <li className={styles.item}>
      <img
        className={styles.avatar}
        src={user.avatar}
        alt="Аватар пользователя"
      />
      <h2 className={styles.name}>
        {user.first_name} {user.last_name}
      </h2>

      <div className={styles.like}>
        <button
          className={styles.likeBtn}
          type="button"
          onClick={() => {
            dispatch(like(user.id));
          }}
        >
          <Icon
            name={EIcons.like}
            color={user.liked ? EColor.violet : EColor.none}
          />
        </button>
      </div>

      <Link className={styles.info} to={`/users/${user.id}`} />
    </li>
  );
}
