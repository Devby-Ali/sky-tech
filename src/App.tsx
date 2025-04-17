import React, { useCallback, useEffect, useState } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import AuthContext from "./context/authContext";
import routes from "./routes";
import { UserInfo } from "./types/AuthContext.types";
import { getUserInfos } from "./Services/Axios/Requests/Auth";

const App = () => {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<false | null | string>(false);
  const [userInfos, setUserInfos] = useState<UserInfo>({} as UserInfo);

  const router = useRoutes(routes);

  const login = useCallback(
    (userInfos: UserInfo, token: false | null | string) => {
      setToken(token);
      setIsLoggedIn(true);
      setUserInfos(userInfos);
      localStorage.setItem("user", JSON.stringify({ token }));
    },
    []
  );

  const logout = useCallback(() => {
    setToken(null);
    setUserInfos({} as UserInfo);
    localStorage.removeItem("user");
  }, []);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user")!);
    if (localStorageData) {
      const userInfosHandler = async () => {
        try {
          const res = await getUserInfos();
          setIsLoggedIn(true);
          setUserInfos(res);
        } catch (error) {
          console.error("Error Auth Me (getUserInfos):", error);
        }
      };
      userInfosHandler();
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
