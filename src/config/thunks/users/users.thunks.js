import { userActions } from "../../actions/users/users.actions";
import apiRequests from "../../api/api";

const userThunks = {
  getUsers: () => async (dispatch) => {
    dispatch(userActions.setUsersRequest());
    const res = await apiRequests.getRequest("/users");
    if (res.success) dispatch(userActions.setUsersSuccess(res.data));
    else dispatch(userActions.setUsersError(res.error));
  },
  getUsersDetails: (id) => async (dispatch) => {
    dispatch(userActions.setUsersDetailsRequest());
    const res = await apiRequests.getRequest(`/users/${id}`);
    if (res.success) dispatch(userActions.setUsersDetailsSuccess(res.data));
    else dispatch(userActions.setUsersDetailsError(res.error));
  },
  addUsers: (body, users) => async (dispatch) => {
    dispatch(userActions.addUsersRequest());
    const res = await apiRequests.postRequest(`/users`, body);
    if (res.success)
      dispatch(
        userActions.addUsersSuccess({
          data: [res.data, ...users],
          message: res.message,
        })
      );
    else dispatch(userActions.addUsersError(res.error));
    dispatch(userActions.addUsersComplete());
  },
  editUsers: (body, users) => async (dispatch) => {
    dispatch(userActions.editUsersRequest());
    const res = await apiRequests.putRequest(`/users/${body.id}`, body);
    if (res.success)
      dispatch(
        userActions.editUsersSuccess({
          data: [res.data, ...users],
          message: res.message,
        })
      );
    else dispatch(userActions.editUsersError(res.error));
    dispatch(userActions.editUsersComplete());
  },
  deleteUsers: (id, users) => async (dispatch) => {
    dispatch(userActions.deleteUsersRequest());
    const res = await apiRequests.deleteRequest(`/users/${id}`);
    if (res.success)
      dispatch(
        userActions.deleteUsersSuccess({
          message: res.message,
          data: users,
        })
      );
    else dispatch(userActions.deleteUsersError(res.error));
    dispatch(userActions.deleteUsersComplete());
  },
  usersMetaData: () => async (dispatch) => {
    dispatch(userActions.setUsersMetaDataRequest());
    const res = await apiRequests.getRequest("/users/metadata");
    dispatch(userActions.setUsersMetaData(res.data || {}));
  },
};

export default userThunks;
