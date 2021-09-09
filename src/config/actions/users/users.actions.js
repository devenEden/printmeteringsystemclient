export const usersConstants = {
  SET_USERS_REQUEST: "SET_USERS_REQUEST",
  SET_USERS_SUCCESS: "SET_USERS_SUCCESS",
  SET_USERS_ERROR: "SET_USERS_ERROR",

  SET_USERS_DETAILS_REQUEST: "SET_USERS_DETAILS_REQUEST",
  SET_USERS_DETAILS_SUCCESS: "SET_USERS_DETAILS_SUCCESS",
  SET_USERS_DETAILS_ERROR: "SET_USERS_DETAILS_ERROR",

  ADD_USERS_REQUEST: "ADD_USERS_REQUEST",
  ADD_USERS_SUCCESS: "ADD_USERS_SUCCESS",
  ADD_USERS_ERROR: "ADD_USERS_ERROR",
  ADD_USERS_COMPLETE: "ADD_USERS_COMPLETE",

  EDIT_USERS_REQUEST: "EDIT_USERS_REQUEST",
  EDIT_USERS_SUCCESS: "EDIT_USERS_SUCCESS",
  EDIT_USERS_ERROR: "EDIT_USERS_ERROR",
  EDIT_USERS_COMPLETE: "EDIT_USERS_COMPLETE",
  EDIT_USERS_DATA: "EDIT_USERS_DATA",

  DELETE_USERS_REQUEST: "DELETE_USERS_REQUEST",
  DELETE_USERS_SUCCESS: "DELETE_USERS_SUCCESS",
  DELETE_USERS_ERROR: "DELETE_USERS_ERROR",
  DELETE_USERS_COMPLETE: "DELETE_USERS_COMPLETE",
};

export const userActions = {
  setUsersRequest: () => ({
    type: usersConstants.SET_USERS_REQUEST,
  }),
  setUsersSuccess: (payload) => ({
    type: usersConstants.SET_USERS_SUCCESS,
    payload,
  }),
  setUsersError: (payload) => ({
    type: usersConstants.SET_USERS_ERROR,
    payload,
  }),
  setUsersDetailsRequest: () => ({
    type: usersConstants.SET_USERS_DETAILS_REQUEST,
  }),
  setUsersDetailsSuccess: (payload) => ({
    type: usersConstants.SET_USERS_DETAILS_SUCCESS,
    payload,
  }),
  setUsersDetailsError: (payload) => ({
    type: usersConstants.SET_USERS_DETAILS_ERROR,
    payload,
  }),
  addUsersRequest: () => ({
    type: usersConstants.ADD_USERS_REQUEST,
  }),
  addUsersSuccess: (payload) => ({
    type: usersConstants.ADD_USERS_SUCCESS,
    payload,
  }),
  addUsersError: (payload) => ({
    type: usersConstants.ADD_USERS_ERROR,
    payload,
  }),
  addUsersComplete: () => ({
    type: usersConstants.ADD_USERS_COMPLETE,
  }),
  editUsersRequest: () => ({
    type: usersConstants.EDIT_USERS_REQUEST,
  }),
  editUsersSuccess: (payload) => ({
    type: usersConstants.EDIT_USERS_SUCCESS,
    payload,
  }),
  editUsersError: (payload) => ({
    type: usersConstants.EDIT_USERS_ERROR,
    payload,
  }),
  editUsersComplete: () => ({
    type: usersConstants.EDIT_USERS_COMPLETE,
  }),
  editUsersData: (payload) => ({
    type: usersConstants.EDIT_USERS_DATA,
    payload,
  }),
  deleteUsersRequest: () => ({
    type: usersConstants.DELETE_USERS_REQUEST,
  }),
  deleteUsersSuccess: (payload) => ({
    type: usersConstants.DELETE_USERS_SUCCESS,
    payload,
  }),
  deleteUsersError: (payload) => ({
    type: usersConstants.DELETE_USERS_ERROR,
    payload,
  }),
  deleteUsersComplete: () => ({
    type: usersConstants.DELETE_USERS_COMPLETE,
  }),
};
