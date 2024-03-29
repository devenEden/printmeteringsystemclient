import ConfirmAccount from "../../containers/auth/ConfirmAccount";
import Login from "../../containers/auth/Login";
import Printers from "../../containers/printers/Printers";
import PrintOuts from "../../containers/printers/PrintOuts";
import Roles from "../../containers/roles/Roles";
import Profile from "../../containers/users/Profile";
import Users from "../../containers/users/Users";
import ResetPassword from "../../containers/auth/ResetPassword";
import Billing from "../../containers/Billing/Billing";

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
  billing: {
    path: "/billing",
    title: "BILLING",
    component: Billing,
  },
  roles: {
    path: "/roles",
    title: "ROLES",
    component: Roles,
  },
  printers: {
    path: "/printers",
    title: "PRINTERS",
    component: Printers,
  },
  printOuts: {
    path: "/",
    title: "PRINT OUTS",
    component: PrintOuts,
  },
  users: {
    path: "/users",
    title: "USERS",
    component: Users,
  },
  profile: {
    path: "/users/:id",
    title: "PROFILE",
    component: Profile,
  },
};

export default routes;
