import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "slices/userSlice";
import { useAppDispatch } from "utils/hooks";
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
  const dispatch = useAppDispatch();
  const handleLogin = useCallback(() => {
    fetch("/api/auth/", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => (res.status === 204 ? res : res.json()))
      .then((res) => {
        if (res["status"]) {
          alert("Неверный логин и/или пароль");
        } else {
          dispatch(setUser(res));
          navigate("/home/");
        }
      });
  }, [username, password, navigate, dispatch]);
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
      <Link to="/home">
        <Logo></Logo>
      </Link>
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
