import { combineReducers } from "redux";
import authState from "./auth/auth.reducer";
import rolesState from "./roles/roles.reducer";

export default combineReducers({ authState, rolesState });
