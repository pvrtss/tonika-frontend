import React, { useCallback, useState } from "react";
import {
  LoginBackground,
  LoginButton,
  LoginCard,
  LoginFootText,
  LoginInput,
  LoginSwitcher,
  LoginText,
  Logo,
} from "./LoginPage.style";

const BottomInputStyle = {
  marginTop: "16px",
};

export const LoginPage = () => {
  const [login, setLogin] = useState<boolean>(true);
  const handleLogin = useCallback(() => {
    fetch("/api/auth/", {
      method: "POST",
      body: JSON.stringify({ username: "admin", password: "pvrts" }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  const handleRegister = useCallback(() => {
    fetch("/api/user/create/", {
      method: "POST",
      body: JSON.stringify({ username: "admin", password: "pvrts" }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <LoginBackground>
      <Logo></Logo>
      <LoginCard>
        <LoginText>{login ? "Вход" : "Регистрация"}</LoginText>
        <LoginInput placeholder="Логин"></LoginInput>
        <LoginInput
          placeholder="Пароль"
          type="password"
          style={BottomInputStyle}
        ></LoginInput>
        <LoginButton onClick={login ? handleLogin : handleRegister}>{login ? "Войти" : "Зарегистрироваться"}</LoginButton>
        <LoginFootText>
          {login ? "Нет аккаунта?" : "Уже есть аккаунт?"}
          <LoginSwitcher onClick={() => setLogin(!login)}>
            {login ? "Регистрация" : "Войти"}
          </LoginSwitcher>
        </LoginFootText>
      </LoginCard>
      <button
        onClick={() => {
          fetch("/api/new-songs")
            .then((res) => res.json())
            .then((data) => console.log(data));
        }}
      >
        test
      </button>
    </LoginBackground>
  );
};
