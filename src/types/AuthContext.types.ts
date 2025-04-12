import { UserCourse } from "./Courses.types";

interface Notification {
  _id: string;
  text: string;
}

interface UserInfo {
  _id: string;
  createdAt: string;
  name: string;
  username: string;
  email: string;
  role: string;
  phone: string;
  updatedAt: string;
  courses?: UserCourse[];
  notifications?: Notification[];
}

interface AuthContextType {
  isLoggedIn: boolean;
  token: string | false | null;
  userInfos: UserInfo | null;
  login: (userInfo: UserInfo, token: string) => void;
  logout: () => void;
}

export type { AuthContextType, UserInfo };
