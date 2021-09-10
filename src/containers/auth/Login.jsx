import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../../components/Auth/forms/LoginForm";
import routes from "../../config/routes/routes";
import authThunks from "../../config/thunks/auth/auth.thunks";
import { Modal } from "antd";
import { useHistory } from "react-router";
import { getAuthToken } from "../../config/helpers/authToken";
import ForgotPasswordForm from "../../components/Auth/forms/ForgotPassword";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authToken = getAuthToken();
  const { authenticated, loginSuccess } = useSelector(
    (state) => state.authState
  );
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const { message, success } = useSelector(
    (state) => state.authState.forgotPassword
  );
  //ui
  const toggleForgotPasswordModal = (value) => setForgotPasswordModal(value);
  //thunks
  const loginUser = (values) => {
    dispatch(authThunks.loginUser(values));
    if (loginSuccess) window.location = "/";
  };
  const forgotPassword = (values) =>
    dispatch(authThunks.forgotPassword(values));

  useEffect(() => {
    if (authenticated && loginSuccess) {
      window.location = "/";
    }
    document.title = routes.authentication.login.title;
    authToken && history.push("/");
  }, [authenticated, loginSuccess, history, authToken]);

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
        <LoginForm
          handleOpenForgotPasswordModal={toggleForgotPasswordModal}
          handleLogin={loginUser}
        />
        <ForgotPasswordForm
          handleForgotPassword={forgotPassword}
          visible={forgotPasswordModal}
          handleCloseModal={toggleForgotPasswordModal}
        />
      </div>
    </div>
  );
};

export default Login;
