export const printersConstants = {
  SET_PRINTERS_REQUEST: "SET_PRINTERS_REQUEST",
  SET_PRINTERS_SUCCESS: "SET_PRINTERS_SUCCESS",
  SET_PRINTERS_ERROR: "SET_PRINTERS_ERROR",

  SET_PRINTERS_DETAILS_REQUEST: "SET_PRINTERS_DETAILS_REQUEST",
  SET_PRINTERS_DETAILS_SUCCESS: "SET_PRINTERS_DETAILS_SUCCESS",
  SET_PRINTERS_DETAILS_ERROR: "SET_PRINTERS_DETAILS_ERROR",

  ADD_PRINTERS_REQUEST: "ADD_PRINTERS_REQUEST",
  ADD_PRINTERS_SUCCESS: "ADD_PRINTERS_SUCCESS",
  ADD_PRINTERS_ERROR: "ADD_PRINTERS_ERROR",
  ADD_PRINTERS_COMPLETE: "ADD_PRINTERS_COMPLETE",

  EDIT_PRINTERS_REQUEST: "EDIT_PRINTERS_REQUEST",
  EDIT_PRINTERS_SUCCESS: "EDIT_PRINTERS_SUCCESS",
  EDIT_PRINTERS_ERROR: "EDIT_PRINTERS_ERROR",
  EDIT_PRINTERS_COMPLETE: "EDIT_PRINTERS_COMPLETE",
  EDIT_PRINTERS_DATA: "EDIT_PRINTERS_DATA",

  DELETE_PRINTERS_REQUEST: "DELETE_PRINTERS_REQUEST",
  DELETE_PRINTERS_SUCCESS: "DELETE_PRINTERS_SUCCESS",
  DELETE_PRINTERS_ERROR: "DELETE_PRINTERS_ERROR",
  DELETE_PRINTERS_COMPLETE: "DELETE_PRINTERS_COMPLETE",

  APPROVE_PRINTERS_SUCCESS: "APPROVE_PRINTERS_SUCCESS",
  APPROVE_PRINTERS_REQUEST: "APPROVE_PRINTERS_REQUEST",
  APPROVE_PRINTERS_ERROR: "APPROVE_PRINTERS_ERROR",
  APPROVE_PRINTERS_COMPLETE: "APPROVE_PRINTERS_COMPLETE",

  CHECK_PRINTERS_REQUEST: "CHECK_PRINTERS_REQUEST",
  CHECK_PRINTERS_SUCCESS: "CHECK_PRINTERS_SUCCESS",
  CHECK_PRINTERS_ERROR: "CHECK_PRINTERS_ERROR",
  CHECK_PRINTERS_COMPLETE: "CHECK_PRINTERS_COMPLETE",

  SET_PRINTERS_META_DATA_REQUEST: "SET_PRINTERS_META_DATA_REQUEST",
  SET_PRINTERS_META_DATA: "SET_PRINTERS_META_DATA",
};

export const printerActions = {
  setPrintersRequest: () => ({
    type: printersConstants.SET_PRINTERS_REQUEST,
  }),
  setPrintersSuccess: (payload) => ({
    type: printersConstants.SET_PRINTERS_SUCCESS,
    payload,
  }),
  setPrintersError: (payload) => ({
    type: printersConstants.SET_PRINTERS_ERROR,
    payload,
  }),
  setPrintersDetailsRequest: () => ({
    type: printersConstants.SET_PRINTERS_DETAILS_REQUEST,
  }),
  setPrintersDetailsSuccess: (payload) => ({
    type: printersConstants.SET_PRINTERS_DETAILS_SUCCESS,
    payload,
  }),
  setPrintersDetailsError: (payload) => ({
    type: printersConstants.SET_PRINTERS_DETAILS_ERROR,
    payload,
  }),
  addPrintersRequest: () => ({
    type: printersConstants.ADD_PRINTERS_REQUEST,
  }),
  addPrintersSuccess: (payload) => ({
    type: printersConstants.ADD_PRINTERS_SUCCESS,
    payload,
  }),
  addPrintersError: (payload) => ({
    type: printersConstants.ADD_PRINTERS_ERROR,
    payload,
  }),
  addPrintersComplete: () => ({
    type: printersConstants.ADD_PRINTERS_COMPLETE,
  }),
  editPrintersRequest: () => ({
    type: printersConstants.EDIT_PRINTERS_REQUEST,
  }),
  editPrintersSuccess: (payload) => ({
    type: printersConstants.EDIT_PRINTERS_SUCCESS,
    payload,
  }),
  editPrintersError: (payload) => ({
    type: printersConstants.EDIT_PRINTERS_ERROR,
    payload,
  }),
  editPrintersComplete: () => ({
    type: printersConstants.EDIT_PRINTERS_COMPLETE,
  }),
  editPrintersData: (payload) => ({
    type: printersConstants.EDIT_PRINTERS_DATA,
    payload,
  }),
  deletePrintersRequest: () => ({
    type: printersConstants.DELETE_PRINTERS_REQUEST,
  }),
  deletePrintersSuccess: (payload) => ({
    type: printersConstants.DELETE_PRINTERS_SUCCESS,
    payload,
  }),
  deletePrintersError: (payload) => ({
    type: printersConstants.DELETE_PRINTERS_ERROR,
    payload,
  }),
  deletePrintersComplete: () => ({
    type: printersConstants.DELETE_PRINTERS_COMPLETE,
  }),
  checkPrintersRequest: () => ({
    type: printersConstants.CHECK_PRINTERS_REQUEST,
  }),
  checkPrintersSuccess: (payload) => ({
    type: printersConstants.CHECK_PRINTERS_SUCCESS,
    payload,
  }),
  checkPrintersError: (payload) => ({
    type: printersConstants.CHECK_PRINTERS_ERROR,
    payload,
  }),
  checkPrintersComplete: () => ({
    type: printersConstants.CHECK_PRINTERS_COMPLETE,
  }),
  approvePrintersRequest: () => ({
    type: printersConstants.APPROVE_PRINTERS_REQUEST,
  }),
  approvePrintersSuccess: (payload) => ({
    type: printersConstants.APPROVE_PRINTERS_SUCCESS,
    payload,
  }),
  approvePrintersError: (payload) => ({
    type: printersConstants.APPROVE_PRINTERS_ERROR,
    payload,
  }),
  approvePrintersComplete: () => ({
    type: printersConstants.APPROVE_PRINTERS_COMPLETE,
  }),
  setPrintersMetaDataRequest: () => ({
    type: printersConstants.SET_PRINTERS_META_DATA_REQUEST,
  }),
  setPrintersMetaData: (payload) => ({
    type: printersConstants.SET_PRINTERS_META_DATA,
    payload,
  }),
};
