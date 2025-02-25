import { useContext } from "react";
import { AuthContext, IAuthContext } from "../providers/AuthProvider";

export const initialAuth: IAuthContext = {
  isAuthenticated: false,
  secret: {
    id: "",
    email: "",
    iat: 0,
    exp: 0,
  },
  setSecret: () => {},
};

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export default useAuth;
