import ConfirmAccount from "../../containers/auth/ConfirmAccount";
import Login from "../../containers/auth/Login";
import ResetPassword from "../../containers/auth/ResetPassword";

const routes = {
  authentication: {
    login: {
      path: "/login",
      title: "AUTH | LOGIN",
      component: Login,
    },
    resetPassword: {
      path: "/resetPassword/:resetToken",
      title: "AUTH | RESET PASSWORD",
      component: ResetPassword,
    },
    confirmAccount: {
      path: "/confirmAccount/:confirmToken",
      title: "AUTH | CONFIRM ACCOUNT",
      component: ConfirmAccount,
    },
  },
};

export default routes;
