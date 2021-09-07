import { printerTypesConstants } from "../../actions/printers/printerTypes.actions";
import initialState from "../../initialState/printers/printerTypes";

const printerTypesState = (state = initialState, { type, payload }) => {
  switch (type) {
    case printerTypesConstants.SET_PRINTER_TYPES_REQUEST:
      return {
        ...state,
        printerTypesLoading: true,
      };
    case printerTypesConstants.SET_PRINTER_TYPES_SUCCESS:
      return {
        ...state,
        printerTypesLoading: false,
        printerTypes: payload,
        printerTypesSuccess: true,
      };
    case printerTypesConstants.SET_PRINTER_TYPES_ERROR:
      return {
        ...state,
        printerTypesSuccess: false,
        printerTypesError: payload,
        printerTypesLoading: false,
      };
    case printerTypesConstants.SET_PRINTER_TYPES_DETAILS_REQUEST:
      return {
        ...state,
        printerTypesDetailsLoading: true,
      };
    case printerTypesConstants.SET_PRINTER_TYPES_DETAILS_SUCCESS:
      return {
        ...state,
        printerTypesDetailsSuccess: true,
        printerTypesDetails: payload,
        printerTypesDetailsError: "",
        printerTypesDetailsLoading: false,
      };
    case printerTypesConstants.SET_PRINTER_TYPES_DETAILS_ERROR:
      return {
        ...state,
        printerTypesDetailsSuccess: false,
        printerTypesDetailsError: payload,
        printerTypesDetailsLoading: false,
      };
    case printerTypesConstants.ADD_PRINTER_TYPES_REQUEST:
      return {
        ...state,
        addPrinterTypesLoading: true,
      };
    case printerTypesConstants.ADD_PRINTER_TYPES_SUCCESS:
      return {
        ...state,
        addPrinterTypesLoading: false,
        addPrinterTypesSuccess: true,
        addPrinterTypesError: "",
        addPrinterTypesMessage: payload.message,
        printerTypes: payload.data,
      };
    case printerTypesConstants.ADD_PRINTER_TYPES_ERROR:
      return {
        ...state,
        addPrinterTypesLoading: false,
        addPrinterTypesSuccess: false,
        addPrinterTypesMessage: "",
        addPrinterTypesError: payload,
      };
    case printerTypesConstants.ADD_PRINTER_TYPES_COMPLETE:
      return {
        ...state,
        addPrinterTypesSuccess: false,
      };
    case printerTypesConstants.EDIT_PRINTER_TYPES_DATA:
      return {
        ...state,
        editPrinterTypesData: payload,
      };
    case printerTypesConstants.EDIT_PRINTER_TYPES_REQUEST:
      return {
        ...state,
        editPrinterTypesLoading: true,
      };
    case printerTypesConstants.EDIT_PRINTER_TYPES_SUCCESS:
      return {
        ...state,
        editPrinterTypesSuccess: true,
        editPrinterTypesLoading: false,
        editPrinterTypesMessage: payload.message,
        editPrinterTypesError: "",
        printerTypes: payload.data,
      };
    case printerTypesConstants.EDIT_PRINTER_TYPES_ERROR:
      return {
        ...state,
        editPrinterTypesSuccess: false,
        editPrinterTypesLoading: false,
        editPrinterTypesMessage: "",
        editPrinterTypesError: payload,
      };
    case printerTypesConstants.EDIT_PRINTER_TYPES_COMPLETE:
      return {
        ...state,
        editPrinterTypesSuccess: false,
      };
    case printerTypesConstants.DELETE_PRINTER_TYPES_REQUEST:
      return {
        ...state,
        deletePrinterTypesLoading: true,
      };
    case printerTypesConstants.DELETE_PRINTER_TYPES_SUCCESS:
      return {
        ...state,
        deletePrinterTypesLoading: false,
        deletePrinterTypesSuccess: true,
        deletePrinterTypesMessage: payload.message,
        printerTypes: payload.data,
      };
    case printerTypesConstants.DELETE_PRINTER_TYPES_ERROR:
      return {
        ...state,
        deletePrinterTypesLoading: false,
        deletePrinterTypesSuccess: false,
        deletePrinterTypesError: payload,
      };
    case printerTypesConstants.DELETE_PRINTER_TYPES_COMPLETE:
      return {
        ...state,
        deletePrinterTypesSuccess: false,
        deletePrinterTypesError: "",
      };
    case printerTypesConstants.APPROVE_PRINTER_TYPES_REQUEST:
      return {
        ...state,
        approvePrinterTypesLoading: true,
      };
    case printerTypesConstants.APPROVE_PRINTER_TYPES_SUCCESS:
      return {
        ...state,
        approvePrinterTypesSuccess: true,
        approvePrinterTypesLoading: false,
        approvePrinterTypesMessage: payload,
      };
    case printerTypesConstants.APPROVE_PRINTER_TYPES_ERROR:
      return {
        ...state,
        approvePrinterTypesError: payload,
        approvePrinterTypesLoading: false,
        approvePrinterTypesSuccess: false,
      };
    case printerTypesConstants.APPROVE_PRINTER_TYPES_COMPLETE:
      return {
        ...state,
        approvePrinterTypesSuccess: false,
        approvePrinterTypesError: "",
      };
    case printerTypesConstants.SET_PRINTER_TYPES_META_DATA_REQUEST:
      return {
        ...state,
        printerTypesMetaDataLoading: true,
      };
    case printerTypesConstants.SET_PRINTER_TYPES_META_DATA:
      return {
        ...state,
        printerTypesMetaDataLoading: false,
        printerTypesMetaData: payload,
      };
    default:
      return state;
  }
};

export default printerTypesState;
