export const authConstants = {
  LOGIN_USER_REQUEST: "LOGIN_USER_REQUEST",
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  LOGIN_USER_ERROR: "LOGIN_USER_ERROR",

  FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST",
  FORGOT_PASSWORD_ERROR: "FORGOT_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_ERROR",

  RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_ERROR: "RESET_PASSWORD_ERROR",

  CONFIRM_ACCOUNT_REQUEST: "CONFIRM_ACCOUNT_REQUEST",
  CONFIRM_ACCOUNT_SUCCESS: "CONFIRM_ACCOUNT_SUCCESS",
  CONFIRM_ACCOUNT_ERROR: "CONFIRM_ACCOUNT_ERROR",

  AUTHENTICATION_USER_REQUEST: "VERIFY_USER_REQUEST",
  AUTHENTICATION_USER_SUCCESS: "VERIFY_USER_SUCCESS",
  AUTHENTICATION_USER_ERROR: "VERIFY_USER_ERROR",

  LOGOUT_USER_REQUEST: "LOGOUT_USER_REQUEST",
  LOGOUT_USER_SUCCESS: "LOGOUT_USER_SUCCESS",
  LOGOUT_USER_ERROR: "LOGOUT_USER_ERROR",
};

export const authActions = {
  loginUserRequest: () => ({
    type: authConstants.LOGIN_USER_REQUEST,
  }),
  loginUserSuccess: () => ({
    type: authConstants.LOGIN_USER_SUCCESS,
  }),
  loginUserError: (payload) => ({
    type: authConstants.LOGIN_USER_ERROR,
    payload,
  }),
  forgotPasswordRequest: () => ({
    type: authConstants.FORGOT_PASSWORD_REQUEST,
  }),
  forgotPasswordSuccess: (payload) => ({
    type: authConstants.FORGOT_PASSWORD_SUCCESS,
    payload,
  }),
  forgotPasswordError: (payload) => ({
    type: authConstants.FORGOT_PASSWORD_ERROR,
    payload,
  }),
  resetPasswordRequest: () => ({
    type: authConstants.RESET_PASSWORD_REQUEST,
  }),
  resetPasswordSuccess: (payload) => ({
    type: authConstants.RESET_PASSWORD_SUCCESS,
    payload,
  }),
  resetPasswordError: (payload) => ({
    type: authConstants.RESET_PASSWORD_ERROR,
    payload,
  }),
  confirmAccountRequest: () => ({
    type: authConstants.CONFIRM_ACCOUNT_REQUEST,
  }),
  confirmAccountSuccess: (payload) => ({
    type: authConstants.CONFIRM_ACCOUNT_SUCCESS,
    payload,
  }),
  confirmAccountError: (payload) => ({
    type: authConstants.CONFIRM_ACCOUNT_ERROR,
    payload,
  }),
  authenticateUserRequest: () => ({
    type: authConstants.AUTHENTICATION_USER_REQUEST,
  }),
  authenticateUserSuccess: () => ({
    type: authConstants.AUTHENTICATION_USER_SUCCESS,
  }),
  authenticateUserError: (payload) => ({
    type: authConstants.AUTHENTICATION_USER_ERROR,
    payload,
  }),
  logoutUserRequest: () => ({
    type: authConstants.LOGOUT_USER_REQUEST,
  }),
  logoutUserSuccess: () => ({
    type: authConstants.LOGOUT_USER_SUCCESS,
  }),
  logoutUserError: (payload) => ({
    type: authConstants.LOGOUT_USER_ERROR,
    payload,
  }),
};
