import { printerActions } from "../../actions/printers/printers.actions";
import apiRequests from "../../api/api";

const printerThunks = {
  getPrinters: () => async (dispatch) => {
    dispatch(printerActions.setPrintersRequest());
    const res = await apiRequests.getRequest("/printers");
    if (res.success) dispatch(printerActions.setPrintersSuccess(res.data));
    else dispatch(printerActions.setPrintersError(res.error));
  },
  getPrintersDetails: (id) => async (dispatch) => {
    dispatch(printerActions.setPrintersDetailsRequest());
    const res = await apiRequests.getRequest(`/printers/${id}`);
    if (res.success)
      dispatch(printerActions.setPrintersDetailsSuccess(res.data));
    else dispatch(printerActions.setPrintersDetailsError(res.error));
  },
  addPrinters: (body, printers) => async (dispatch) => {
    dispatch(printerActions.addPrintersRequest());
    const res = await apiRequests.postRequest(`/printers`, body);
    if (res.success)
      dispatch(
        printerActions.addPrintersSuccess({
          data: [res.data, ...printers],
          message: res.message,
        })
      );
    else dispatch(printerActions.addPrintersError(res.error));
    dispatch(printerActions.addPrintersComplete());
  },
  editPrinters: (body, printers) => async (dispatch) => {
    dispatch(printerActions.editPrintersRequest());
    const res = await apiRequests.putRequest(`/printers/${body.id}`, body);
    if (res.success)
      dispatch(
        printerActions.editPrintersSuccess({
          data: [res.data, ...printers],
          message: res.message,
        })
      );
    else dispatch(printerActions.editPrintersError(res.error));
    dispatch(printerActions.editPrintersComplete());
  },
  deletePrinters: (id, printers) => async (dispatch) => {
    dispatch(printerActions.deletePrintersRequest());
    const res = await apiRequests.deleteRequest(`/printers/${id}`);
    if (res.success)
      dispatch(
        printerActions.deletePrintersSuccess({
          message: res.message,
          data: printers,
        })
      );
    else dispatch(printerActions.deletePrintersError(res.error));
    dispatch(printerActions.deletePrintersComplete());
  },
  approvePrinters: (id) => async (dispatch) => {
    dispatch(printerActions.approvePrintersRequest());
    const res = await apiRequests.patchRequest(`/printers/approve/${id}`);
    if (res.success) {
      dispatch(printerActions.approvePrintersSuccess(res.message));
      //dispatch(roleThunks.getPrintersDetails(id));
    } else dispatch(printerActions.approvePrintersError(res.error));
    dispatch(printerActions.approvePrintersComplete());
  },
  printersMetaData: () => async (dispatch) => {
    dispatch(printerActions.setPrintersMetaDataRequest());
    const res = await apiRequests.getRequest("/printers/metadata");
    dispatch(printerActions.setPrintersMetaData(res.data || {}));
  },
};

export default printerThunks;
