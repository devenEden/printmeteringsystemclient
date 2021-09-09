import { usersConstants } from "../../actions/users/users.actions";
import users from "../../initialState/users/users";

const usersState = (state = users, { type, payload }) => {
  switch (type) {
    case usersConstants.SET_USERS_REQUEST:
      return {
        ...state,
        usersLoading: true,
      };
    case usersConstants.SET_USERS_SUCCESS:
      return {
        ...state,
        usersLoading: false,
        users: payload,
        usersSuccess: true,
      };
    case usersConstants.SET_USERS_ERROR:
      return {
        ...state,
        usersSuccess: false,
        usersError: payload,
        usersLoading: false,
      };
    case usersConstants.SET_USERS_DETAILS_REQUEST:
      return {
        ...state,
        usersDetailsLoading: true,
      };
    case usersConstants.SET_USERS_DETAILS_SUCCESS:
      return {
        ...state,
        usersDetailsSuccess: true,
        usersDetails: payload,
        usersDetailsError: "",
        usersDetailsLoading: false,
      };
    case usersConstants.SET_USERS_DETAILS_ERROR:
      return {
        ...state,
        usersDetailsSuccess: false,
        usersDetailsError: payload,
        usersDetailsLoading: false,
      };
    case usersConstants.ADD_USERS_REQUEST:
      return {
        ...state,
        addUsersLoading: true,
      };
    case usersConstants.ADD_USERS_SUCCESS:
      return {
        ...state,
        addUsersLoading: false,
        addUsersSuccess: true,
        addUsersError: "",
        addUsersMessage: payload.message,
        users: payload.data,
      };
    case usersConstants.ADD_USERS_ERROR:
      return {
        ...state,
        addUsersLoading: false,
        addUsersSuccess: false,
        addUsersMessage: "",
        addUsersError: payload,
      };
    case usersConstants.ADD_USERS_COMPLETE:
      return {
        ...state,
        addUsersSuccess: false,
      };
    case usersConstants.EDIT_USERS_DATA:
      return {
        ...state,
        editUsersData: payload,
      };
    case usersConstants.EDIT_USERS_REQUEST:
      return {
        ...state,
        editUsersLoading: true,
      };
    case usersConstants.EDIT_USERS_SUCCESS:
      return {
        ...state,
        editUsersSuccess: true,
        editUsersLoading: false,
        editUsersMessage: payload.message,
        editUsersError: "",
        users: payload.data,
      };
    case usersConstants.EDIT_USERS_ERROR:
      return {
        ...state,
        editUsersSuccess: false,
        editUsersLoading: false,
        editUsersMessage: "",
        editUsersError: payload,
      };
    case usersConstants.EDIT_USERS_COMPLETE:
      return {
        ...state,
        editUsersSuccess: false,
      };
    case usersConstants.DELETE_USERS_REQUEST:
      return {
        ...state,
        deleteUsersLoading: true,
      };
    case usersConstants.DELETE_USERS_SUCCESS:
      return {
        ...state,
        deleteUsersLoading: false,
        deleteUsersSuccess: true,
        deleteUsersMessage: payload.message,
        users: payload.data,
      };
    case usersConstants.DELETE_USERS_ERROR:
      return {
        ...state,
        deleteUsersLoading: false,
        deleteUsersSuccess: false,
        deleteUsersError: payload,
      };
    case usersConstants.DELETE_USERS_COMPLETE:
      return {
        ...state,
        deleteUsersSuccess: false,
        deleteUsersError: "",
      };
    default:
      return state;
  }
};

export default usersState;
