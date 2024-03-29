import { combineReducers } from "redux";
import authState from "./auth/auth.reducer";
import rolesState from "./roles/roles.reducer";
import printersState from "./printers/printers.reducer";
import printerTypesState from "./printers/printerTypes.reducer";
import printOutsState from "./printers/printOuts.reducer";
import usersState from "./users/users.reducer";
import billingState from "./billing/billing.reducer";

export default combineReducers({
  authState,
  rolesState,
  printersState,
  printerTypesState,
  printOutsState,
  usersState,
  billingState,
});
