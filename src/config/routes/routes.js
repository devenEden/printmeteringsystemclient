import ConfirmAccount from "../../containers/auth/ConfirmAccount";
import Login from "../../containers/auth/Login";
import ResetPassword from "../../containers/auth/ResetPassword";
import Dashboard from "../../containers/Dashboard/Dashboard";
import Roles from "../../containers/roles/Roles";

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
  dashboard: {
    path: "/",
    title: "DASHBOARD",
    component: Dashboard,
  },
  roles: {
    path: "/roles",
    title: "ROLES",
    component: Roles,
  },
};

export default routes;
