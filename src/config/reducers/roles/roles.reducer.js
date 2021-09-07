import { rolesConstants } from "../../actions/roles/roles.actions";
import initialState from "../../initialState/roles/roles";

const rolesState = (state = initialState, { type, payload }) => {
  switch (type) {
    case rolesConstants.SET_ROLES_REQUEST:
      return {
        ...state,
        rolesLoading: true,
      };
    case rolesConstants.SET_ROLES_SUCCESS:
      return {
        ...state,
        rolesLoading: false,
        roles: payload,
        rolesSuccess: true,
      };
    case rolesConstants.SET_ROLES_ERROR:
      return {
        ...state,
        rolesSuccess: false,
        rolesError: payload,
        rolesLoading: false,
      };
    case rolesConstants.SET_ROLES_DETAILS_REQUEST:
      return {
        ...state,
        rolesDetailsLoading: true,
      };
    case rolesConstants.SET_ROLES_DETAILS_SUCCESS:
      return {
        ...state,
        rolesDetailsSuccess: true,
        rolesDetails: payload,
        rolesDetailsError: "",
        rolesDetailsLoading: false,
      };
    case rolesConstants.SET_ROLES_DETAILS_ERROR:
      return {
        ...state,
        rolesDetailsSuccess: false,
        rolesDetailsError: payload,
        rolesDetailsLoading: false,
      };
    case rolesConstants.ADD_ROLES_REQUEST:
      return {
        ...state,
        addRolesLoading: true,
      };
    case rolesConstants.ADD_ROLES_SUCCESS:
      return {
        ...state,
        addRolesLoading: false,
        addRolesSuccess: true,
        addRolesError: "",
        addRolesMessage: payload.message,
        roles: payload.data,
      };
    case rolesConstants.ADD_ROLES_ERROR:
      return {
        ...state,
        addRolesLoading: false,
        addRolesSuccess: false,
        addRolesMessage: "",
        addRolesError: payload,
      };
    case rolesConstants.ADD_ROLES_COMPLETE:
      return {
        ...state,
        addRolesSuccess: false,
      };
    case rolesConstants.EDIT_ROLES_DATA:
      return {
        ...state,
        editRolesData: payload,
      };
    case rolesConstants.EDIT_ROLES_REQUEST:
      return {
        ...state,
        editRolesLoading: true,
      };
    case rolesConstants.EDIT_ROLES_SUCCESS:
      return {
        ...state,
        editRolesSuccess: true,
        editRolesLoading: false,
        editRolesMessage: payload.message,
        editRolesError: "",
        roles: payload.data,
      };
    case rolesConstants.EDIT_ROLES_ERROR:
      return {
        ...state,
        editRolesSuccess: false,
        editRolesLoading: false,
        editRolesMessage: "",
        editRolesError: payload,
      };
    case rolesConstants.EDIT_ROLES_COMPLETE:
      return {
        ...state,
        editRolesSuccess: false,
      };
    case rolesConstants.DELETE_ROLES_REQUEST:
      return {
        ...state,
        deleteRolesLoading: true,
      };
    case rolesConstants.DELETE_ROLES_SUCCESS:
      return {
        ...state,
        deleteRolesLoading: false,
        deleteRolesSuccess: true,
        deleteRolesMessage: payload.message,
        roles: payload.data,
      };
    case rolesConstants.DELETE_ROLES_ERROR:
      return {
        ...state,
        deleteRolesLoading: false,
        deleteRolesSuccess: false,
        deleteRolesError: payload,
      };
    case rolesConstants.DELETE_ROLES_COMPLETE:
      return {
        ...state,
        deleteRolesSuccess: false,
        deleteRolesError: "",
      };
    case rolesConstants.APPROVE_ROLES_REQUEST:
      return {
        ...state,
        approveRolesLoading: true,
      };
    case rolesConstants.APPROVE_ROLES_SUCCESS:
      return {
        ...state,
        approveRolesSuccess: true,
        approveRolesLoading: false,
        approveRolesMessage: payload,
      };
    case rolesConstants.APPROVE_ROLES_ERROR:
      return {
        ...state,
        approveRolesError: payload,
        approveRolesLoading: false,
        approveRolesSuccess: false,
      };
    case rolesConstants.APPROVE_ROLES_COMPLETE:
      return {
        ...state,
        approveRolesSuccess: false,
        approveRolesError: "",
      };
    case rolesConstants.SET_ROLES_META_DATA_REQUEST:
      return {
        ...state,
        rolesMetaDataLoading: true,
      };
    case rolesConstants.SET_ROLES_META_DATA:
      return {
        ...state,
        rolesMetaDataLoading: false,
        rolesMetaData: payload,
      };
    default:
      return state;
  }
};

export default rolesState;
