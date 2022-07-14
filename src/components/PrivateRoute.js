import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAuth } from "../redux/auth/auth-selectors";

export default function PrivateRoute({ children, redirect}) {
  const isAuth = useSelector(getAuth);
  return isAuth ? children : <Navigate to={redirect} />;
}
