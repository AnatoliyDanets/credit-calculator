import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { getAuth } from "../redux/auth/auth-selectors";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/",
}) {
  const isAuth = useSelector(getAuth);
  const shouldRedirect = isAuth && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}
