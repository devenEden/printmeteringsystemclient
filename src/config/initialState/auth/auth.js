const intialState = {
  authenticated: false,
  loginLoading: false,
  loginSuccess: false,
  loginError: "",

  logoutUser: {
    loading: false,
    success: false,
    error: "",
  },
  authUser: {
    imgUrl: "",
    firstName: "",
    othernames: "",
    email: "",
  },
  authenticateUser: {
    success: false,
    connection: false,
    error: "",
  },

  forgotPassword: {
    loading: false,
    success: false,
    message: "",
    error: "",
  },

  resetPassword: {
    loading: false,
    success: false,
    error: "",
    message: "",
  },

  confirmAccount: {
    loading: true,
    success: false,
    error: "",
    message: "",
  },
  permissions: {},
};

export default intialState;
