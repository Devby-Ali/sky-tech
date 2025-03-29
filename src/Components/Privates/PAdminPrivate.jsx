import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext";

export default function PAdminPrivate({ children }) {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authContext.userInfos.role !== "ADMIN") {
      navigate("/login");
    }
  }, [authContext.userInfos.role, navigate]);

  return <>{authContext.userInfos.role === "ADMIN" && children}</>;
}
