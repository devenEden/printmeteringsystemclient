import { printOutsConstants } from "../../actions/printers/printOuts.actions";
import initialState from "../../initialState/printers/printOuts";

const printOutsState = (state = initialState, { type, payload }) => {
  switch (type) {
    case printOutsConstants.SET_PRINT_OUTS_REQUEST:
      return {
        ...state,
        printOutsLoading: true,
      };
    case printOutsConstants.SET_PRINT_OUTS_SUCCESS:
      return {
        ...state,
        printOutsLoading: false,
        printOuts: payload,
        printOutsSuccess: true,
      };
    case printOutsConstants.SET_PRINT_OUTS_ERROR:
      return {
        ...state,
        printOutsSuccess: false,
        printOutsError: payload,
        printOutsLoading: false,
      };
    case printOutsConstants.SET_PRINT_OUTS_DETAILS_REQUEST:
      return {
        ...state,
        printOutsDetailsLoading: true,
      };
    case printOutsConstants.SET_PRINT_OUTS_DETAILS_SUCCESS:
      return {
        ...state,
        printOutsDetailsSuccess: true,
        printOutsDetails: payload,
        printOutsDetailsError: "",
        printOutsDetailsLoading: false,
      };
    case printOutsConstants.SET_PRINT_OUTS_DETAILS_ERROR:
      return {
        ...state,
        printOutsDetailsSuccess: false,
        printOutsDetailsError: payload,
        printOutsDetailsLoading: false,
      };
    case printOutsConstants.ADD_PRINT_OUTS_REQUEST:
      return {
        ...state,
        addPrintOutsLoading: true,
      };
    case printOutsConstants.ADD_PRINT_OUTS_SUCCESS:
      return {
        ...state,
        addPrintOutsLoading: false,
        addPrintOutsSuccess: true,
        addPrintOutsError: "",
        addPrintOutsMessage: payload.message,
        printOuts: payload.data,
      };
    case printOutsConstants.ADD_PRINT_OUTS_ERROR:
      return {
        ...state,
        addPrintOutsLoading: false,
        addPrintOutsSuccess: false,
        addPrintOutsMessage: "",
        addPrintOutsError: payload,
      };
    case printOutsConstants.ADD_PRINT_OUTS_COMPLETE:
      return {
        ...state,
        addPrintOutsSuccess: false,
      };
    case printOutsConstants.IMPORT_PRINT_OUTS_COMPLETE:
      return {
        ...state,
        importPrintOutsSuccess: false,
      };
    case printOutsConstants.IMPORT_PRINT_OUTS_REQUEST:
      return {
        ...state,
        importPrintOutsLoading: true,
      };
    case printOutsConstants.IMPORT_PRINT_OUTS_SUCCESS:
      return {
        ...state,
        importPrintOutsLoading: false,
        importPrintOutsSuccess: true,
        importPrintOutsError: "",
        importPrintOutsMessage: payload.message,
        printOuts: payload.data,
      };
    case printOutsConstants.IMPORT_PRINT_OUTS_ERROR:
      return {
        ...state,
        importPrintOutsLoading: false,
        importPrintOutsSuccess: false,
        importPrintOutsMessage: "",
        importPrintOutsError: payload,
      };
    case printOutsConstants.EDIT_PRINT_OUTS_DATA:
      return {
        ...state,
        editPrintOutsData: payload,
      };
    case printOutsConstants.EDIT_PRINT_OUTS_REQUEST:
      return {
        ...state,
        editPrintOutsLoading: true,
      };
    case printOutsConstants.EDIT_PRINT_OUTS_SUCCESS:
      return {
        ...state,
        editPrintOutsSuccess: true,
        editPrintOutsLoading: false,
        editPrintOutsMessage: payload.message,
        editPrintOutsError: "",
        printOuts: payload.data,
      };
    case printOutsConstants.EDIT_PRINT_OUTS_ERROR:
      return {
        ...state,
        editPrintOutsSuccess: false,
        editPrintOutsLoading: false,
        editPrintOutsMessage: "",
        editPrintOutsError: payload,
      };
    case printOutsConstants.EDIT_PRINT_OUTS_COMPLETE:
      return {
        ...state,
        editPrintOutsSuccess: false,
      };
    case printOutsConstants.DELETE_PRINT_OUTS_REQUEST:
      return {
        ...state,
        deletePrintOutsLoading: true,
      };
    case printOutsConstants.DELETE_PRINT_OUTS_SUCCESS:
      return {
        ...state,
        deletePrintOutsLoading: false,
        deletePrintOutsSuccess: true,
        deletePrintOutsMessage: payload.message,
        printOuts: payload.data,
      };
    case printOutsConstants.DELETE_PRINT_OUTS_ERROR:
      return {
        ...state,
        deletePrintOutsLoading: false,
        deletePrintOutsSuccess: false,
        deletePrintOutsError: payload,
      };
    case printOutsConstants.DELETE_PRINT_OUTS_COMPLETE:
      return {
        ...state,
        deletePrintOutsSuccess: false,
        deletePrintOutsError: "",
      };
    case printOutsConstants.APPROVE_PRINT_OUTS_REQUEST:
      return {
        ...state,
        approvePrintOutsLoading: true,
      };
    case printOutsConstants.APPROVE_PRINT_OUTS_SUCCESS:
      return {
        ...state,
        approvePrintOutsSuccess: true,
        approvePrintOutsLoading: false,
        approvePrintOutsMessage: payload,
      };
    case printOutsConstants.APPROVE_PRINT_OUTS_ERROR:
      return {
        ...state,
        approvePrintOutsError: payload,
        approvePrintOutsLoading: false,
        approvePrintOutsSuccess: false,
      };
    case printOutsConstants.APPROVE_PRINT_OUTS_COMPLETE:
      return {
        ...state,
        approvePrintOutsSuccess: false,
        approvePrintOutsError: "",
      };
    case printOutsConstants.SET_PRINT_OUTS_META_DATA_REQUEST:
      return {
        ...state,
        printOutsMetaDataLoading: true,
      };
    case printOutsConstants.SET_PRINT_OUTS_META_DATA:
      return {
        ...state,
        printOutsMetaDataLoading: false,
        printOutsMetaData: payload,
      };
    default:
      return state;
  }
};

export default printOutsState;
