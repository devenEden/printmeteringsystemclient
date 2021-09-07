export const printerTypesConstants = {
  SET_PRINTER_TYPES_REQUEST: "SET_PRINTER_TYPES_REQUEST",
  SET_PRINTER_TYPES_SUCCESS: "SET_PRINTER_TYPES_SUCCESS",
  SET_PRINTER_TYPES_ERROR: "SET_PRINTER_TYPES_ERROR",

  SET_PRINTER_TYPES_DETAILS_REQUEST: "SET_PRINTER_TYPES_DETAILS_REQUEST",
  SET_PRINTER_TYPES_DETAILS_SUCCESS: "SET_PRINTER_TYPES_DETAILS_SUCCESS",
  SET_PRINTER_TYPES_DETAILS_ERROR: "SET_PRINTER_TYPES_DETAILS_ERROR",

  ADD_PRINTER_TYPES_REQUEST: "ADD_PRINTER_TYPES_REQUEST",
  ADD_PRINTER_TYPES_SUCCESS: "ADD_PRINTER_TYPES_SUCCESS",
  ADD_PRINTER_TYPES_ERROR: "ADD_PRINTER_TYPES_ERROR",
  ADD_PRINTER_TYPES_COMPLETE: "ADD_PRINTER_TYPES_COMPLETE",

  EDIT_PRINTER_TYPES_REQUEST: "EDIT_PRINTER_TYPES_REQUEST",
  EDIT_PRINTER_TYPES_SUCCESS: "EDIT_PRINTER_TYPES_SUCCESS",
  EDIT_PRINTER_TYPES_ERROR: "EDIT_PRINTER_TYPES_ERROR",
  EDIT_PRINTER_TYPES_COMPLETE: "EDIT_PRINTER_TYPES_COMPLETE",
  EDIT_PRINTER_TYPES_DATA: "EDIT_PRINTER_TYPES_DATA",

  DELETE_PRINTER_TYPES_REQUEST: "DELETE_PRINTER_TYPES_REQUEST",
  DELETE_PRINTER_TYPES_SUCCESS: "DELETE_PRINTER_TYPES_SUCCESS",
  DELETE_PRINTER_TYPES_ERROR: "DELETE_PRINTER_TYPES_ERROR",
  DELETE_PRINTER_TYPES_COMPLETE: "DELETE_PRINTER_TYPES_COMPLETE",

  APPROVE_PRINTER_TYPES_SUCCESS: "APPROVE_PRINTER_TYPES_SUCCESS",
  APPROVE_PRINTER_TYPES_REQUEST: "APPROVE_PRINTER_TYPES_REQUEST",
  APPROVE_PRINTER_TYPES_ERROR: "APPROVE_PRINTER_TYPES_ERROR",
  APPROVE_PRINTER_TYPES_COMPLETE: "APPROVE_PRINTER_TYPES_COMPLETE",

  CHECK_PRINTER_TYPES_REQUEST: "CHECK_PRINTER_TYPES_REQUEST",
  CHECK_PRINTER_TYPES_SUCCESS: "CHECK_PRINTER_TYPES_SUCCESS",
  CHECK_PRINTER_TYPES_ERROR: "CHECK_PRINTER_TYPES_ERROR",
  CHECK_PRINTER_TYPES_COMPLETE: "CHECK_PRINTER_TYPES_COMPLETE",

  SET_PRINTER_TYPES_META_DATA_REQUEST: "SET_PRINTER_TYPES_META_DATA_REQUEST",
  SET_PRINTER_TYPES_META_DATA: "SET_PRINTER_TYPES_META_DATA",
};

export const printerTypeActions = {
  setPrinterTypesRequest: () => ({
    type: printerTypesConstants.SET_PRINTER_TYPES_REQUEST,
  }),
  setPrinterTypesSuccess: (payload) => ({
    type: printerTypesConstants.SET_PRINTER_TYPES_SUCCESS,
    payload,
  }),
  setPrinterTypesError: (payload) => ({
    type: printerTypesConstants.SET_PRINTER_TYPES_ERROR,
    payload,
  }),
  setPrinterTypesDetailsRequest: () => ({
    type: printerTypesConstants.SET_PRINTER_TYPES_DETAILS_REQUEST,
  }),
  setPrinterTypesDetailsSuccess: (payload) => ({
    type: printerTypesConstants.SET_PRINTER_TYPES_DETAILS_SUCCESS,
    payload,
  }),
  setPrinterTypesDetailsError: (payload) => ({
    type: printerTypesConstants.SET_PRINTER_TYPES_DETAILS_ERROR,
    payload,
  }),
  addPrinterTypesRequest: () => ({
    type: printerTypesConstants.ADD_PRINTER_TYPES_REQUEST,
  }),
  addPrinterTypesSuccess: (payload) => ({
    type: printerTypesConstants.ADD_PRINTER_TYPES_SUCCESS,
    payload,
  }),
  addPrinterTypesError: (payload) => ({
    type: printerTypesConstants.ADD_PRINTER_TYPES_ERROR,
    payload,
  }),
  addPrinterTypesComplete: () => ({
    type: printerTypesConstants.ADD_PRINTER_TYPES_COMPLETE,
  }),
  editPrinterTypesRequest: () => ({
    type: printerTypesConstants.EDIT_PRINTER_TYPES_REQUEST,
  }),
  editPrinterTypesSuccess: (payload) => ({
    type: printerTypesConstants.EDIT_PRINTER_TYPES_SUCCESS,
    payload,
  }),
  editPrinterTypesError: (payload) => ({
    type: printerTypesConstants.EDIT_PRINTER_TYPES_ERROR,
    payload,
  }),
  editPrinterTypesComplete: () => ({
    type: printerTypesConstants.EDIT_PRINTER_TYPES_COMPLETE,
  }),
  editPrinterTypesData: (payload) => ({
    type: printerTypesConstants.EDIT_PRINTER_TYPES_DATA,
    payload,
  }),
  deletePrinterTypesRequest: () => ({
    type: printerTypesConstants.DELETE_PRINTER_TYPES_REQUEST,
  }),
  deletePrinterTypesSuccess: (payload) => ({
    type: printerTypesConstants.DELETE_PRINTER_TYPES_SUCCESS,
    payload,
  }),
  deletePrinterTypesError: (payload) => ({
    type: printerTypesConstants.DELETE_PRINTER_TYPES_ERROR,
    payload,
  }),
  deletePrinterTypesComplete: () => ({
    type: printerTypesConstants.DELETE_PRINTER_TYPES_COMPLETE,
  }),
  checkPrinterTypesRequest: () => ({
    type: printerTypesConstants.CHECK_PRINTER_TYPES_REQUEST,
  }),
  checkPrinterTypesSuccess: (payload) => ({
    type: printerTypesConstants.CHECK_PRINTER_TYPES_SUCCESS,
    payload,
  }),
  checkPrinterTypesError: (payload) => ({
    type: printerTypesConstants.CHECK_PRINTER_TYPES_ERROR,
    payload,
  }),
  checkPrinterTypesComplete: () => ({
    type: printerTypesConstants.CHECK_PRINTER_TYPES_COMPLETE,
  }),
  approvePrinterTypesRequest: () => ({
    type: printerTypesConstants.APPROVE_PRINTER_TYPES_REQUEST,
  }),
  approvePrinterTypesSuccess: (payload) => ({
    type: printerTypesConstants.APPROVE_PRINTER_TYPES_SUCCESS,
    payload,
  }),
  approvePrinterTypesError: (payload) => ({
    type: printerTypesConstants.APPROVE_PRINTER_TYPES_ERROR,
    payload,
  }),
  approvePrinterTypesComplete: () => ({
    type: printerTypesConstants.APPROVE_PRINTER_TYPES_COMPLETE,
  }),
  setPrinterTypesMetaDataRequest: () => ({
    type: printerTypesConstants.SET_PRINTER_TYPES_META_DATA_REQUEST,
  }),
  setPrinterTypesMetaData: (payload) => ({
    type: printerTypesConstants.SET_PRINTER_TYPES_META_DATA,
    payload,
  }),
};
