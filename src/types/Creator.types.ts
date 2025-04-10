export default interface Creator {
    _id: string;
    createdAt: string;
    email: string;
    name: string;
    phone: string;
    profile: string;
    role: "ADMIN" | "USER";
    updatedAt: string;
    username: string;
  }