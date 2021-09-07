export const rolesConstants = {
  SET_ROLES_REQUEST: "SET_ROLES_REQUEST",
  SET_ROLES_SUCCESS: "SET_ROLES_SUCCESS",
  SET_ROLES_ERROR: "SET_ROLES_ERROR",

  SET_ROLES_DETAILS_REQUEST: "SET_ROLES_DETAILS_REQUEST",
  SET_ROLES_DETAILS_SUCCESS: "SET_ROLES_DETAILS_SUCCESS",
  SET_ROLES_DETAILS_ERROR: "SET_ROLES_DETAILS_ERROR",

  ADD_ROLES_REQUEST: "ADD_ROLES_REQUEST",
  ADD_ROLES_SUCCESS: "ADD_ROLES_SUCCESS",
  ADD_ROLES_ERROR: "ADD_ROLES_ERROR",
  ADD_ROLES_COMPLETE: "ADD_ROLES_COMPLETE",

  EDIT_ROLES_REQUEST: "EDIT_ROLES_REQUEST",
  EDIT_ROLES_SUCCESS: "EDIT_ROLES_SUCCESS",
  EDIT_ROLES_ERROR: "EDIT_ROLES_ERROR",
  EDIT_ROLES_COMPLETE: "EDIT_ROLES_COMPLETE",
  EDIT_ROLES_DATA: "EDIT_ROLES_DATA",

  DELETE_ROLES_REQUEST: "DELETE_ROLES_REQUEST",
  DELETE_ROLES_SUCCESS: "DELETE_ROLES_SUCCESS",
  DELETE_ROLES_ERROR: "DELETE_ROLES_ERROR",
  DELETE_ROLES_COMPLETE: "DELETE_ROLES_COMPLETE",

  APPROVE_ROLES_SUCCESS: "APPROVE_ROLES_SUCCESS",
  APPROVE_ROLES_REQUEST: "APPROVE_ROLES_REQUEST",
  APPROVE_ROLES_ERROR: "APPROVE_ROLES_ERROR",
  APPROVE_ROLES_COMPLETE: "APPROVE_ROLES_COMPLETE",

  CHECK_ROLES_REQUEST: "CHECK_ROLES_REQUEST",
  CHECK_ROLES_SUCCESS: "CHECK_ROLES_SUCCESS",
  CHECK_ROLES_ERROR: "CHECK_ROLES_ERROR",
  CHECK_ROLES_COMPLETE: "CHECK_ROLES_COMPLETE",

  SET_ROLES_META_DATA_REQUEST: "SET_ROLES_META_DATA_REQUEST",
  SET_ROLES_META_DATA: "SET_ROLES_META_DATA",
};

export const roleActions = {
  setRolesRequest: () => ({
    type: rolesConstants.SET_ROLES_REQUEST,
  }),
  setRolesSuccess: (payload) => ({
    type: rolesConstants.SET_ROLES_SUCCESS,
    payload,
  }),
  setRolesError: (payload) => ({
    type: rolesConstants.SET_ROLES_ERROR,
    payload,
  }),
  setRolesDetailsRequest: () => ({
    type: rolesConstants.SET_ROLES_DETAILS_REQUEST,
  }),
  setRolesDetailsSuccess: (payload) => ({
    type: rolesConstants.SET_ROLES_DETAILS_SUCCESS,
    payload,
  }),
  setRolesDetailsError: (payload) => ({
    type: rolesConstants.SET_ROLES_DETAILS_ERROR,
    payload,
  }),
  addRolesRequest: () => ({
    type: rolesConstants.ADD_ROLES_REQUEST,
  }),
  addRolesSuccess: (payload) => ({
    type: rolesConstants.ADD_ROLES_SUCCESS,
    payload,
  }),
  addRolesError: (payload) => ({
    type: rolesConstants.ADD_ROLES_ERROR,
    payload,
  }),
  addRolesComplete: () => ({
    type: rolesConstants.ADD_ROLES_COMPLETE,
  }),
  editRolesRequest: () => ({
    type: rolesConstants.EDIT_ROLES_REQUEST,
  }),
  editRolesSuccess: (payload) => ({
    type: rolesConstants.EDIT_ROLES_SUCCESS,
    payload,
  }),
  editRolesError: (payload) => ({
    type: rolesConstants.EDIT_ROLES_ERROR,
    payload,
  }),
  editRolesComplete: () => ({
    type: rolesConstants.EDIT_ROLES_COMPLETE,
  }),
  editRolesData: (payload) => ({
    type: rolesConstants.EDIT_ROLES_DATA,
    payload,
  }),
  deleteRolesRequest: () => ({
    type: rolesConstants.DELETE_ROLES_REQUEST,
  }),
  deleteRolesSuccess: (payload) => ({
    type: rolesConstants.DELETE_ROLES_SUCCESS,
    payload,
  }),
  deleteRolesError: (payload) => ({
    type: rolesConstants.DELETE_ROLES_ERROR,
    payload,
  }),
  deleteRolesComplete: () => ({
    type: rolesConstants.DELETE_ROLES_COMPLETE,
  }),
  checkRolesRequest: () => ({
    type: rolesConstants.CHECK_ROLES_REQUEST,
  }),
  checkRolesSuccess: (payload) => ({
    type: rolesConstants.CHECK_ROLES_SUCCESS,
    payload,
  }),
  checkRolesError: (payload) => ({
    type: rolesConstants.CHECK_ROLES_ERROR,
    payload,
  }),
  checkRolesComplete: () => ({
    type: rolesConstants.CHECK_ROLES_COMPLETE,
  }),
  approveRolesRequest: () => ({
    type: rolesConstants.APPROVE_ROLES_REQUEST,
  }),
  approveRolesSuccess: (payload) => ({
    type: rolesConstants.APPROVE_ROLES_SUCCESS,
    payload,
  }),
  approveRolesError: (payload) => ({
    type: rolesConstants.APPROVE_ROLES_ERROR,
    payload,
  }),
  approveRolesComplete: () => ({
    type: rolesConstants.APPROVE_ROLES_COMPLETE,
  }),
  setRolesMetaDataRequest: () => ({
    type: rolesConstants.SET_ROLES_META_DATA_REQUEST,
  }),
  setRolesMetaData: (payload) => ({
    type: rolesConstants.SET_ROLES_META_DATA,
    payload,
  }),
};
