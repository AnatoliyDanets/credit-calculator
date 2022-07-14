import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthRefresh } from "./redux/auth/auth-selectors";
import { fetchCurrentUser } from "./redux/auth/auth-operations";
import { useEffect, Suspense, lazy } from "react";
import LoaderComponent from "./components/LoaderComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RemotePage = lazy(() => import("./pages/RemotePage"));
const MainPage = lazy(() => import("./pages/MainPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const VerifyPage = lazy(() => import("./pages/VerifyPage"));

function App() {
  const isAuthRefresh = useSelector(getAuthRefresh);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    !isAuthRefresh && (
      <>
        <ToastContainer autoClose={3000} />
        <Suspense fallback={<LoaderComponent />}>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/calculate"
              element={
                <PrivateRoute children={<RemotePage />} redirect="/login" />
              }
            />
            <Route
              path="/signup"
              element={<PublicRoute children={<SignupPage />} restricted />}
            />
            <Route
              path="/login"
              element={
                <PublicRoute
                  children={<LoginPage />}
                  redirectTo="/calculate"
                  restricted
                />
              }
            />
            <Route path="verify/:verificationToken" element={<VerifyPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </>
    )
  );
}

export default App;
