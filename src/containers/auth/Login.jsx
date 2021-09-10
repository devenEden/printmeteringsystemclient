import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../../components/Auth/forms/LoginForm";
import routes from "../../config/routes/routes";
import authThunks from "../../config/thunks/auth/auth.thunks";
import { Modal } from "antd";
import { useHistory } from "react-router";
import { getAuthToken } from "../../config/helpers/authToken";

const Login = () => {
  const { authenticated, loginSuccess } = useSelector(
    (state) => state.authState
  );
  const { message, success } = useSelector(
    (state) => state.authState.forgotPassword
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const authToken = getAuthToken();
  useEffect(() => {
    if (authenticated && loginSuccess) {
      window.location = "/";
    }
    document.title = routes.authentication.login.title;
    authToken && history.push("/");
  }, [authenticated, loginSuccess, history, authToken]);
  const loginUser = (values) => {
    dispatch(authThunks.loginUser(values));
    if (loginSuccess) window.location = "/";
  };
  useEffect(() => {
    if (message && success) {
      //dispatch(appUiActions.toggleForgotPasswordModal(false));
      Modal.success({
        title: "Email Verified",
        content: <p> {message} </p>,
      });
    }
  }, [message, dispatch, success]);

  // const forgotPassword = (values) => {
  //   dispatch(authThunks.forgotPassword(values));
  // };
  return (
    <div className="container fluid p-2">
      <div className="d-flex justify-content-center align-items-center w-100 my-5">
        <LoginForm handleLogin={loginUser} />
      </div>
    </div>
  );
};

export default Login;
