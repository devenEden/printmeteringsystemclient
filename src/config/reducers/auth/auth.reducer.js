import { authConstants } from "../../actions/auth.actions";
import initialState from "../../initialState/auth/auth";

const authState = (state = initialState, { type, payload }) => {
  switch (type) {
    case authConstants.LOGIN_USER_REQUEST:
      return {
        ...state,
        loginLoading: true,
      };
    case authConstants.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginSuccess: true,
        authenticated: true,
      };
    case authConstants.LOGIN_USER_ERROR:
      return {
        ...state,
        authenticated: false,
        loginLoading: false,
        loginSuccess: false,
        loginError: payload,
      };
    case authConstants.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          loading: true,
          success: false,
        },
      };
    case authConstants.FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          loading: false,
          success: true,
          message: payload,
          error: "",
        },
      };
    }
    case authConstants.FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          loading: false,
          success: false,
          error: payload,
        },
      };
    case authConstants.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          loading: true,
        },
      };
    case authConstants.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          loading: false,
          success: true,
          message: payload,
        },
      };
    case authConstants.RESET_PASSWORD_ERROR:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          loading: false,
          success: false,
          error: payload,
        },
      };
    case authConstants.CONFIRM_ACCOUNT_REQUEST:
      return {
        ...state,
        confirmAccount: {
          ...state.confirmAccount,
          loading: false,
        },
      };
    case authConstants.CONFIRM_ACCOUNT_SUCCESS:
      return {
        ...state,
        confirmAccount: {
          ...state.confirmAccount,
          loading: false,
          success: true,
          message: payload,
        },
      };
    case authConstants.CONFIRM_ACCOUNT_ERROR:
      return {
        ...state,
        confirmAccount: {
          ...state.confirmAccount,
          loading: false,
          success: false,
          error: payload,
        },
      };
    case authConstants.AUTHENTICATION_USER_SUCCESS:
      return {
        ...state,
        authenticated: true,
        permissions: payload,
        authenticateUser: {
          ...state.authenticateUser,
          connection: true,
          success: true,
        },
      };
    case authConstants.AUTHENTICATION_USER_ERROR:
      return {
        ...state,
        authenticated: payload.authenticated,
        authenticateUser: {
          success: false,
          connection: payload.connection,
          error: payload.error,
        },
      };
    case authConstants.LOGOUT_USER_REQUEST:
      return {
        ...state,
        logoutUser: {
          ...state.logoutUser,
          loading: true,
        },
      };
    case authConstants.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        authenticated: false,
        logoutUser: {
          ...state.logoutUser,
          loading: false,
          success: true,
        },
      };
    case authConstants.LOGOUT_USER_ERROR:
      return {
        ...state,
        logoutUser: {
          loading: false,
          success: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};

export default authState;
