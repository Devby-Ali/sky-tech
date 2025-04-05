import { createContext } from "react";

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

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  token: null,
  userInfos: null,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
