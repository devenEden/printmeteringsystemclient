import { printersConstants } from "../../actions/printers/printers.actions";
import initialState from "../../initialState/printers/printers";

const printersState = (state = initialState, { type, payload }) => {
  switch (type) {
    case printersConstants.SET_PRINTERS_REQUEST:
      return {
        ...state,
        printersLoading: true,
      };
    case printersConstants.SET_PRINTERS_SUCCESS:
      return {
        ...state,
        printersLoading: false,
        printers: payload,
        printersSuccess: true,
      };
    case printersConstants.SET_PRINTERS_ERROR:
      return {
        ...state,
        printersSuccess: false,
        printersError: payload,
        printersLoading: false,
      };
    case printersConstants.SET_PRINTERS_DETAILS_REQUEST:
      return {
        ...state,
        printersDetailsLoading: true,
      };
    case printersConstants.SET_PRINTERS_DETAILS_SUCCESS:
      return {
        ...state,
        printersDetailsSuccess: true,
        printersDetails: payload,
        printersDetailsError: "",
        printersDetailsLoading: false,
      };
    case printersConstants.SET_PRINTERS_DETAILS_ERROR:
      return {
        ...state,
        printersDetailsSuccess: false,
        printersDetailsError: payload,
        printersDetailsLoading: false,
      };
    case printersConstants.ADD_PRINTERS_REQUEST:
      return {
        ...state,
        addPrintersLoading: true,
      };
    case printersConstants.ADD_PRINTERS_SUCCESS:
      return {
        ...state,
        addPrintersLoading: false,
        addPrintersSuccess: true,
        addPrintersError: "",
        addPrintersMessage: payload.message,
        printers: payload.data,
      };
    case printersConstants.ADD_PRINTERS_ERROR:
      return {
        ...state,
        addPrintersLoading: false,
        addPrintersSuccess: false,
        addPrintersMessage: "",
        addPrintersError: payload,
      };
    case printersConstants.ADD_PRINTERS_COMPLETE:
      return {
        ...state,
        addPrintersSuccess: false,
      };
    case printersConstants.EDIT_PRINTERS_DATA:
      return {
        ...state,
        editPrintersData: payload,
      };
    case printersConstants.EDIT_PRINTERS_REQUEST:
      return {
        ...state,
        editPrintersLoading: true,
      };
    case printersConstants.EDIT_PRINTERS_SUCCESS:
      return {
        ...state,
        editPrintersSuccess: true,
        editPrintersLoading: false,
        editPrintersMessage: payload.message,
        editPrintersError: "",
        printers: payload.data,
      };
    case printersConstants.EDIT_PRINTERS_ERROR:
      return {
        ...state,
        editPrintersSuccess: false,
        editPrintersLoading: false,
        editPrintersMessage: "",
        editPrintersError: payload,
      };
    case printersConstants.EDIT_PRINTERS_COMPLETE:
      return {
        ...state,
        editPrintersSuccess: false,
      };
    case printersConstants.DELETE_PRINTERS_REQUEST:
      return {
        ...state,
        deletePrintersLoading: true,
      };
    case printersConstants.DELETE_PRINTERS_SUCCESS:
      return {
        ...state,
        deletePrintersLoading: false,
        deletePrintersSuccess: true,
        deletePrintersMessage: payload.message,
        printers: payload.data,
      };
    case printersConstants.DELETE_PRINTERS_ERROR:
      return {
        ...state,
        deletePrintersLoading: false,
        deletePrintersSuccess: false,
        deletePrintersError: payload,
      };
    case printersConstants.DELETE_PRINTERS_COMPLETE:
      return {
        ...state,
        deletePrintersSuccess: false,
        deletePrintersError: "",
      };
    case printersConstants.APPROVE_PRINTERS_REQUEST:
      return {
        ...state,
        approvePrintersLoading: true,
      };
    case printersConstants.APPROVE_PRINTERS_SUCCESS:
      return {
        ...state,
        approvePrintersSuccess: true,
        approvePrintersLoading: false,
        approvePrintersMessage: payload,
      };
    case printersConstants.APPROVE_PRINTERS_ERROR:
      return {
        ...state,
        approvePrintersError: payload,
        approvePrintersLoading: false,
        approvePrintersSuccess: false,
      };
    case printersConstants.APPROVE_PRINTERS_COMPLETE:
      return {
        ...state,
        approvePrintersSuccess: false,
        approvePrintersError: "",
      };
    case printersConstants.SET_PRINTERS_META_DATA_REQUEST:
      return {
        ...state,
        printersMetaDataLoading: true,
      };
    case printersConstants.SET_PRINTERS_META_DATA:
      return {
        ...state,
        printersMetaDataLoading: false,
        printersMetaData: payload,
      };
    default:
      return state;
  }
};

export default printersState;
