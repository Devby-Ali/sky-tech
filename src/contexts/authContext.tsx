import { createContext } from "react";
import { AuthContextType } from "types/AuthContext.types";


const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  token: null,
  userInfos: null,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
