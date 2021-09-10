export const printOutsConstants = {
  SET_PRINT_OUTS_REQUEST: "SET_PRINT_OUTS_REQUEST",
  SET_PRINT_OUTS_SUCCESS: "SET_PRINT_OUTS_SUCCESS",
  SET_PRINT_OUTS_ERROR: "SET_PRINT_OUTS_ERROR",

  SET_PRINT_OUTS_DETAILS_REQUEST: "SET_PRINT_OUTS_DETAILS_REQUEST",
  SET_PRINT_OUTS_DETAILS_SUCCESS: "SET_PRINT_OUTS_DETAILS_SUCCESS",
  SET_PRINT_OUTS_DETAILS_ERROR: "SET_PRINT_OUTS_DETAILS_ERROR",

  ADD_PRINT_OUTS_REQUEST: "ADD_PRINT_OUTS_REQUEST",
  ADD_PRINT_OUTS_SUCCESS: "ADD_PRINT_OUTS_SUCCESS",
  ADD_PRINT_OUTS_ERROR: "ADD_PRINT_OUTS_ERROR",
  ADD_PRINT_OUTS_COMPLETE: "ADD_PRINT_OUTS_COMPLETE",

  IMPORT_PRINT_OUTS_REQUEST: "IMPORT_PRINT_OUTS_REQUEST",
  IMPORT_PRINT_OUTS_SUCCESS: "IMPORT_PRINT_OUTS_SUCCESS",
  IMPORT_PRINT_OUTS_ERROR: "IMPORT_PRINT_OUTS_ERROR",
  IMPORT_PRINT_OUTS_COMPLETE: "IMPORT_PRINT_OUTS_COMPLETE",

  EDIT_PRINT_OUTS_REQUEST: "EDIT_PRINT_OUTS_REQUEST",
  EDIT_PRINT_OUTS_SUCCESS: "EDIT_PRINT_OUTS_SUCCESS",
  EDIT_PRINT_OUTS_ERROR: "EDIT_PRINT_OUTS_ERROR",
  EDIT_PRINT_OUTS_COMPLETE: "EDIT_PRINT_OUTS_COMPLETE",
  EDIT_PRINT_OUTS_DATA: "EDIT_PRINT_OUTS_DATA",

  DELETE_PRINT_OUTS_REQUEST: "DELETE_PRINT_OUTS_REQUEST",
  DELETE_PRINT_OUTS_SUCCESS: "DELETE_PRINT_OUTS_SUCCESS",
  DELETE_PRINT_OUTS_ERROR: "DELETE_PRINT_OUTS_ERROR",
  DELETE_PRINT_OUTS_COMPLETE: "DELETE_PRINT_OUTS_COMPLETE",

  APPROVE_PRINT_OUTS_SUCCESS: "APPROVE_PRINT_OUTS_SUCCESS",
  APPROVE_PRINT_OUTS_REQUEST: "APPROVE_PRINT_OUTS_REQUEST",
  APPROVE_PRINT_OUTS_ERROR: "APPROVE_PRINT_OUTS_ERROR",
  APPROVE_PRINT_OUTS_COMPLETE: "APPROVE_PRINT_OUTS_COMPLETE",

  CHECK_PRINT_OUTS_REQUEST: "CHECK_PRINT_OUTS_REQUEST",
  CHECK_PRINT_OUTS_SUCCESS: "CHECK_PRINT_OUTS_SUCCESS",
  CHECK_PRINT_OUTS_ERROR: "CHECK_PRINT_OUTS_ERROR",
  CHECK_PRINT_OUTS_COMPLETE: "CHECK_PRINT_OUTS_COMPLETE",

  SET_PRINT_OUTS_META_DATA_REQUEST: "SET_PRINT_OUTS_META_DATA_REQUEST",
  SET_PRINT_OUTS_META_DATA: "SET_PRINT_OUTS_META_DATA",
};

export const printOutActions = {
  setPrintOutsRequest: () => ({
    type: printOutsConstants.SET_PRINT_OUTS_REQUEST,
  }),
  setPrintOutsSuccess: (payload) => ({
    type: printOutsConstants.SET_PRINT_OUTS_SUCCESS,
    payload,
  }),
  setPrintOutsError: (payload) => ({
    type: printOutsConstants.SET_PRINT_OUTS_ERROR,
    payload,
  }),
  setPrintOutsDetailsRequest: () => ({
    type: printOutsConstants.SET_PRINT_OUTS_DETAILS_REQUEST,
  }),
  setPrintOutsDetailsSuccess: (payload) => ({
    type: printOutsConstants.SET_PRINT_OUTS_DETAILS_SUCCESS,
    payload,
  }),
  setPrintOutsDetailsError: (payload) => ({
    type: printOutsConstants.SET_PRINT_OUTS_DETAILS_ERROR,
    payload,
  }),
  addPrintOutsRequest: () => ({
    type: printOutsConstants.ADD_PRINT_OUTS_REQUEST,
  }),
  addPrintOutsSuccess: (payload) => ({
    type: printOutsConstants.ADD_PRINT_OUTS_SUCCESS,
    payload,
  }),
  addPrintOutsError: (payload) => ({
    type: printOutsConstants.ADD_PRINT_OUTS_ERROR,
    payload,
  }),
  addPrintOutsComplete: () => ({
    type: printOutsConstants.ADD_PRINT_OUTS_COMPLETE,
  }),
  importPrintOutsRequest: () => ({
    type: printOutsConstants.IMPORT_PRINT_OUTS_REQUEST,
  }),
  importPrintOutsSuccess: (payload) => ({
    type: printOutsConstants.IMPORT_PRINT_OUTS_SUCCESS,
    payload,
  }),
  importPrintOutsError: (payload) => ({
    type: printOutsConstants.IMPORT_PRINT_OUTS_ERROR,
    payload,
  }),
  importPrintOutsComplete: () => ({
    type: printOutsConstants.IMPORT_PRINT_OUTS_COMPLETE,
  }),
  editPrintOutsRequest: () => ({
    type: printOutsConstants.EDIT_PRINT_OUTS_REQUEST,
  }),
  editPrintOutsSuccess: (payload) => ({
    type: printOutsConstants.EDIT_PRINT_OUTS_SUCCESS,
    payload,
  }),
  editPrintOutsError: (payload) => ({
    type: printOutsConstants.EDIT_PRINT_OUTS_ERROR,
    payload,
  }),
  editPrintOutsComplete: () => ({
    type: printOutsConstants.EDIT_PRINT_OUTS_COMPLETE,
  }),
  editPrintOutsData: (payload) => ({
    type: printOutsConstants.EDIT_PRINT_OUTS_DATA,
    payload,
  }),
  deletePrintOutsRequest: () => ({
    type: printOutsConstants.DELETE_PRINT_OUTS_REQUEST,
  }),
  deletePrintOutsSuccess: (payload) => ({
    type: printOutsConstants.DELETE_PRINT_OUTS_SUCCESS,
    payload,
  }),
  deletePrintOutsError: (payload) => ({
    type: printOutsConstants.DELETE_PRINT_OUTS_ERROR,
    payload,
  }),
  deletePrintOutsComplete: () => ({
    type: printOutsConstants.DELETE_PRINT_OUTS_COMPLETE,
  }),
  checkPrintOutsRequest: () => ({
    type: printOutsConstants.CHECK_PRINT_OUTS_REQUEST,
  }),
  checkPrintOutsSuccess: (payload) => ({
    type: printOutsConstants.CHECK_PRINT_OUTS_SUCCESS,
    payload,
  }),
  checkPrintOutsError: (payload) => ({
    type: printOutsConstants.CHECK_PRINT_OUTS_ERROR,
    payload,
  }),
  checkPrintOutsComplete: () => ({
    type: printOutsConstants.CHECK_PRINT_OUTS_COMPLETE,
  }),
  approvePrintOutsRequest: () => ({
    type: printOutsConstants.APPROVE_PRINT_OUTS_REQUEST,
  }),
  approvePrintOutsSuccess: (payload) => ({
    type: printOutsConstants.APPROVE_PRINT_OUTS_SUCCESS,
    payload,
  }),
  approvePrintOutsError: (payload) => ({
    type: printOutsConstants.APPROVE_PRINT_OUTS_ERROR,
    payload,
  }),
  approvePrintOutsComplete: () => ({
    type: printOutsConstants.APPROVE_PRINT_OUTS_COMPLETE,
  }),
  setPrintOutsMetaDataRequest: () => ({
    type: printOutsConstants.SET_PRINT_OUTS_META_DATA_REQUEST,
  }),
  setPrintOutsMetaData: (payload) => ({
    type: printOutsConstants.SET_PRINT_OUTS_META_DATA,
    payload,
  }),
};
