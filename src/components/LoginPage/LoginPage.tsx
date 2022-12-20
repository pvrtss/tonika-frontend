import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [login, setLogin] = useState<boolean>(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = useCallback(() => {
    fetch("/api/auth/", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => res.json())
      .then((res) => JSON.parse(res))
      .then((data) =>
        data.status === "ok"
          ? navigate("/home")
          : alert("Неверный логин и/или пароль")
      );
  }, [username, password, navigate]);
  const handleRegister = useCallback(() => {
    fetch("/api/user/create/", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [username, password]);

  const handleKeypress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") login ? handleLogin() : handleRegister();
  };

  return (
    <LoginBackground>
      <Logo></Logo>
      <LoginCard>
        <LoginText>{login ? "Вход" : "Регистрация"}</LoginText>
        <LoginInput
          placeholder="Логин"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDownCapture={handleKeypress}
          className="px-4"
        ></LoginInput>
        <LoginInput
          placeholder="Пароль"
          type="password"
          style={BottomInputStyle}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDownCapture={handleKeypress}
          className="px-4"
        ></LoginInput>
        <LoginButton onClick={login ? handleLogin : handleRegister}>
          {login ? "Войти" : "Зарегистрироваться"}
        </LoginButton>
        <LoginFootText>
          {login ? "Нет аккаунта?" : "Уже есть аккаунт?"}
          <LoginSwitcher onClick={() => setLogin(!login)}>
            {login ? "Регистрация" : "Войти"}
          </LoginSwitcher>
        </LoginFootText>
      </LoginCard>
    </LoginBackground>
  );
};
