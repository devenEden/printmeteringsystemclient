import { authActions } from "../../actions/auth.actions";
import apiRequests from "../../api/api";

const authThunks = {
  loginUser: (body) => async (dispatch) => {
    dispatch(authActions.loginUserRequest());
    const res = await apiRequests.postRequest("/auth/login", body);
    if (res.success) {
      dispatch(authActions.loginUserSuccess());
      localStorage.setItem("authToken", res.data.user_credentials);
    } else dispatch(authActions.loginUserError(res.error));
  },
  forgotPassword: (body) => async (dispatch) => {
    const res = await apiRequests.postRequest("/auth/forgotPassword", body);
    if (res.success) {
      dispatch(authActions.forgotPasswordSuccess(res.data));
    } else dispatch(authActions.forgotPasswordError(res.error));
  },
  resetPassword: (body, token) => async (dispatch) => {
    const res = await apiRequests.patchRequest(
      `auth/resetPassword/${token}`,
      body
    );
    if (res.success) dispatch(authActions.resetPasswordSuccess(res.data));
    else dispatch(authActions.resetPasswordError(res.error));
  },
  confirmAccount: (token) => async (dispatch) => {
    const res = await apiRequests.patchRequest(
      `/auth/confirmAccount/${token}`,
      token
    );
    if (res.success) dispatch(authActions.confirmAccountSuccess(res.data));
    else
      dispatch(
        authActions.confirmAccountError(
          "Sorry it seems your request code has expired. Please request another to confirm your account"
        )
      );
  },
  authenticateUser: () => async (dispatch) => {
    const res = await apiRequests.getRequest("/auth/verifyToken");
    if (res.success)
      console.info("Action", dispatch(authActions.authenticateUserSuccess()));
    else if (res.connectionError)
      dispatch(
        authActions.authenticateUserError({
          connection: false,
          authenticated: true,
          error: "There seems to be a connection problem ....",
        })
      );
    else if (!res.connectionError && !res.success)
      dispatch(
        authActions.authenticateUserError({
          authenticated: res.success,
          success: res.success,
          connection: true,
          error: "Sorry your session has expired",
        })
      );
  },
};

export default authThunks;
