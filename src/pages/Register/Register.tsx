import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectAuth, setMeData } from "features/auth/authSlice";
import { userRegister } from "features/auth/authThunk";
import { EIcons } from "helpers/enumeration";
import { Icon } from "helpers/Icon";
import React, { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styles from "./Register.module.scss";

export default function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [passType, setPassType] = useState(true);
  const [confirmType, setConfirmType] = useState(true);

  const { token, status } = useAppSelector(selectAuth);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    if (token.token !== "" && status === "succeeded") {
      navigate("/ReqRes-users/users");
    }
  }, [navigate, token, status]);

  function submitForm(data: FieldValues) {
    const { confirmPassword, ...meData } = data;

    dispatch(setMeData(meData));
    localStorage.setItem("meData", JSON.stringify(meData));

    const { username, ...meAuthData } = data;

    dispatch(userRegister(meAuthData));
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.formBlock}>
        <h2 className={styles.heading}>Регистрация</h2>

        <form onSubmit={handleSubmit(submitForm)}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Имя</label>
            <input
              type="text"
              className={styles.formInput}
              style={
                errors.username
                  ? { border: "1px solid red" }
                  : { border: "1px solid transparent" }
              }
              {...register("username", {
                required: "Обязательное поле",
                minLength: 2,
                maxLength: 20,
                validate: {
                  matchesTwoSymbol: (value) => {
                    const { username } = getValues();
                    return username === value || "Минимум 2 буквы!";
                  },
                },
              })}
            />
            {errors.username && (
              <p className={styles.error}>{errors.username.message}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Электронная почта</label>
            <input
              style={
                errors.email
                  ? { border: "1px solid red" }
                  : { border: "1px solid transparent" }
              }
              type="email"
              className={styles.formInput}
              {...register("email", {
                required: "Обязательное поле",
                pattern: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
              })}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Пароль</label>
            <input
              style={
                errors.password
                  ? { border: "1px solid red" }
                  : { border: "1px solid transparent" }
              }
              type={passType ? "password" : "text"}
              className={styles.formInput}
              {...register("password", {
                required: "Пароль обязателен",
                minLength: 6,
              })}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
            <button
              className={styles.showHide}
              type="button"
              onClick={() => setPassType(!passType)}
            >
              {passType ? (
                <Icon name={EIcons.hidePass} />
              ) : (
                <Icon name={EIcons.showPass} />
              )}
            </button>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Подтвердите пароль</label>
            <input
              style={
                errors.confirmPassword
                  ? { border: "1px solid red" }
                  : { border: "1px solid transparent" }
              }
              type={confirmType ? "password" : "text"}
              className={styles.formInput}
              {...register("confirmPassword", {
                required: "Пожалуйста подтвердите пароль",
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || "Пароли должны совпасть!";
                  },
                },

                minLength: 6,
              })}
            />
            {errors.confirmPassword && (
              <p className={styles.error}>{errors.confirmPassword.message}</p>
            )}
            <button
              className={styles.showHide}
              type="button"
              onClick={() => setConfirmType(!confirmType)}
            >
              {confirmType ? (
                <Icon name={EIcons.hidePass} />
              ) : (
                <Icon name={EIcons.showPass} />
              )}
            </button>
          </div>
          <button type="submit" className={styles.btn}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}
