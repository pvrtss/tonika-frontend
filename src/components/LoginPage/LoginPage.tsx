import { userMock } from "mocks";
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
  const dispatch = useAppDispatch();
  const handleLogin = useCallback(() => {
    dispatch(setUser(userMock));
    navigate("/tonika-frontend/home/");
  }, [dispatch, navigate]);
  const handleKeypress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <LoginBackground>
      <Link to="/tonika-frontend/home">
        <Logo></Logo>
      </Link>
      <LoginCard>
        <LoginText>{login ? "Вход" : "Регистрация"}</LoginText>
        <LoginInput
          placeholder="Логин"
          onKeyDownCapture={handleKeypress}
          className="px-4"
        ></LoginInput>
        <LoginInput
          placeholder="Пароль"
          type="password"
          style={BottomInputStyle}
          onKeyDownCapture={handleKeypress}
          className="px-4"
        ></LoginInput>
        <LoginButton onClick={handleLogin}>
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
