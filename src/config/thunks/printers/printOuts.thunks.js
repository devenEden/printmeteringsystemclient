import { printOutActions } from "../../actions/printers/printOuts.actions";
import apiRequests from "../../api/api";

const PrintOutsThunks = {
  getPrintOuts: () => async (dispatch) => {
    dispatch(printOutActions.setPrintOutsRequest());
    const res = await apiRequests.getRequest("/printers/printOuts");
    if (res.success) dispatch(printOutActions.setPrintOutsSuccess(res.data));
    else dispatch(printOutActions.setPrintOutsError(res.error));
  },
  getPrintOutsDetails: (id) => async (dispatch) => {
    dispatch(printOutActions.setPrintOutsDetailsRequest());
    const res = await apiRequests.getRequest(`/printers/printOuts/${id}`);
    if (res.success)
      dispatch(printOutActions.setPrintOutsDetailsSuccess(res.data));
    else dispatch(printOutActions.setPrintOutsDetailsError(res.error));
  },
  addPrintOuts: (body, printers) => async (dispatch) => {
    dispatch(printOutActions.addPrintOutsRequest());
    const res = await apiRequests.postRequest(`/printers/printOuts`, body);
    if (res.success) {
      dispatch(PrintOutsThunks.getPrintOuts());
      dispatch(
        printOutActions.addPrintOutsSuccess({
          data: [res.data, ...printers],
          message: res.message,
        })
      );
    } else dispatch(printOutActions.addPrintOutsError(res.error));
    dispatch(printOutActions.addPrintOutsComplete());
  },
  editPrintOuts: (body, printers) => async (dispatch) => {
    dispatch(printOutActions.editPrintOutsRequest());
    const res = await apiRequests.putRequest(
      `/printers/printOuts/${body.id}`,
      body
    );
    if (res.success) {
      dispatch(PrintOutsThunks.getPrintOuts());
      dispatch(
        printOutActions.editPrintOutsSuccess({
          data: [res.data, ...printers],
          message: res.message,
        })
      );
    } else dispatch(printOutActions.editPrintOutsError(res.error));
    dispatch(printOutActions.editPrintOutsComplete());
  },
  deletePrintOuts: (id, printers) => async (dispatch) => {
    dispatch(printOutActions.deletePrintOutsRequest());
    const res = await apiRequests.deleteRequest(`/printers/printOuts/${id}`);
    if (res.success)
      dispatch(
        printOutActions.deletePrintOutsSuccess({
          message: res.message,
          data: printers,
        })
      );
    else dispatch(printOutActions.deletePrintOutsError(res.error));
    dispatch(printOutActions.deletePrintOutsComplete());
  },
  approvePrintOuts: (id) => async (dispatch) => {
    dispatch(printOutActions.approvePrintOutsRequest());
    const res = await apiRequests.patchRequest(
      `/printers/printOuts/approve/${id}`,
      {
        approvedAt: new Date(),
      }
    );
    if (res.success) {
      dispatch(printOutActions.approvePrintOutsSuccess(res.message));
      //dispatch(roleThunks.getPrintOutsDetails(id));
    } else dispatch(printOutActions.approvePrintOutsError(res.error));
    dispatch(printOutActions.approvePrintOutsComplete());
  },
};

export default PrintOutsThunks;
