import { Modal } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ResetPasswordForm from "../../components/Auth/forms/ResetPasswordForm";
import { authActions } from "../../config/actions/auth.actions";
import authThunks from "../../config/thunks/auth/auth.thunks";

const ResetPassword = () => {
  const history = useHistory();
  const pathArray = history.location.pathname.split("/");
  const token = pathArray[pathArray.length - 1];
  const dispatch = useDispatch();
  const { success, message } = useSelector(
    (state) => state.authState.resetPassword
  );

  useEffect(() => {
    if (message && success) {
      Modal.success({
        title: "You password has been Reset Successfully",
        content: <p>{message}</p>,
        onOk() {
          history.push("/login");
        },
      });
    }
  }, [message, history, success]);
  const resetPassword = (values) => {
    dispatch(authActions.resetPasswordRequest());
    dispatch(authThunks.resetPassword(values, token));
  };
  return (
    <div className="container fluid p-2">
      <div className="d-flex justify-content-center align-items-center w-100 my-5">
        <ResetPasswordForm handlePasswordReset={resetPassword} />
      </div>
    </div>
  );
};

export default ResetPassword;
