import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

interface UserInfo {
  name: string;
  username: string;
  email: string;
  role: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  token: string | false | null;
  userInfos: UserInfo | null;
  login: (userInfo: UserInfo, token: string) => void;
  logout: () => void;
}

interface PAdminPrivateProps {
  children: React.ReactNode;
}

const PAdminPrivate = ({ children }: PAdminPrivateProps) => {
  const authContext = useContext<AuthContextType>(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authContext.userInfos?.role !== "ADMIN") {
      navigate("/login");
    }
  }, [authContext.userInfos?.role, navigate]);

  return authContext.userInfos?.role === "ADMIN" && children;
};

export default PAdminPrivate;
