import { roleActions } from "../../actions/roles/roles.actions";
import apiRequests from "../../api/api";

const roleThunks = {
  getRoles: () => async (dispatch) => {
    dispatch(roleActions.setRolesRequest());
    const res = await apiRequests.getRequest("/roles");
    if (res.success) dispatch(roleActions.setRolesSuccess(res.data));
    else dispatch(roleActions.setRolesError(res.error));
  },
  getRolesDetails: (id) => async (dispatch) => {
    dispatch(roleActions.setRolesDetailsRequest());
    const res = await apiRequests.getRequest(`/roles/${id}`);
    if (res.success) dispatch(roleActions.setRolesDetailsSuccess(res.data));
    else dispatch(roleActions.setRolesDetailsError(res.error));
  },
  addRoles: (body, roles) => async (dispatch) => {
    dispatch(roleActions.addRolesRequest());
    const res = await apiRequests.postRequest(`/roles`, body);
    if (res.success) {
      dispatch(roleThunks.getRoles());
      dispatch(
        roleActions.addRolesSuccess({
          data: [res.data, ...roles],
          message: res.message,
        })
      );
    } else dispatch(roleActions.addRolesError(res.error));
    dispatch(roleActions.addRolesComplete());
  },
  editRoles: (body, roles) => async (dispatch) => {
    dispatch(roleActions.editRolesRequest());
    const res = await apiRequests.putRequest(`/roles/${body.id}`, body);
    if (res.success) {
      dispatch(roleThunks.getRoles());
      dispatch(
        roleActions.editRolesSuccess({
          data: [res.data, ...roles],
          message: res.message,
        })
      );
    } else dispatch(roleActions.editRolesError(res.error));
    dispatch(roleActions.editRolesComplete());
  },
  deleteRoles: (id, roles) => async (dispatch) => {
    dispatch(roleActions.deleteRolesRequest());
    const res = await apiRequests.deleteRequest(`/roles/${id}`);
    if (res.success)
      dispatch(
        roleActions.deleteRolesSuccess({
          message: res.message,
          data: roles,
        })
      );
    else dispatch(roleActions.deleteRolesError(res.error));
    dispatch(roleActions.deleteRolesComplete());
  },
  approveRoles: (id) => async (dispatch) => {
    dispatch(roleActions.approveRolesRequest());
    const res = await apiRequests.patchRequest(`/roles/approve/${id}`, {
      approvedAt: new Date(),
    });
    if (res.success) {
      dispatch(roleActions.approveRolesSuccess(res.message));
      //dispatch(roleThunks.getRolesDetails(id));
    } else dispatch(roleActions.approveRolesError(res.error));
    dispatch(roleActions.approveRolesComplete());
  },
  projectsMetaData: () => async (dispatch) => {
    dispatch(roleActions.setRolesMetaDataRequest());
    const res = await apiRequests.getRequest();
    dispatch(roleActions.setRolesMetaData(res.data || {}));
  },
};

export default roleThunks;
