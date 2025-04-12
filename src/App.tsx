import React, { useCallback, useEffect, useState } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import AuthContext from "./context/authContext";
import routes from "./routes";
import { UserInfo } from "types/AuthContext.types";


const App = () => {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<false | null | string>(false);
  const [userInfos, setUserInfos] = useState<UserInfo>({} as UserInfo);

  const router = useRoutes(routes);

  const login = useCallback((userInfos: UserInfo, token: false | null | string) => {
    setToken(token);
    setIsLoggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserInfos({} as UserInfo);
    localStorage.removeItem("user");
  }, []);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user")!);
    if (localStorageData) {
      fetch(`http://localhost:4000/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setIsLoggedIn(true);
          setUserInfos(userData);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, [login, logout]);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          token,
          userInfos,
          login,
          logout,
        }}
      >
        {router}
      </AuthContext.Provider>
    </>
  );
};

export default App;
