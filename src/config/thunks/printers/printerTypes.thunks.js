import { printerTypeActions } from "../../actions/printers/printerTypes.actions";
import apiRequests from "../../api/api";

const printerTypeThunks = {
  getPrinterTypes: () => async (dispatch) => {
    dispatch(printerTypeActions.setPrinterTypesRequest());
    const res = await apiRequests.getRequest("/printers/types");
    if (res.success)
      dispatch(printerTypeActions.setPrinterTypesSuccess(res.data));
    else dispatch(printerTypeActions.setPrinterTypesError(res.error));
  },
  getPrinterTypesDetails: (id) => async (dispatch) => {
    dispatch(printerTypeActions.setPrinterTypesDetailsRequest());
    const res = await apiRequests.getRequest(`/printers/types/${id}`);
    if (res.success)
      dispatch(printerTypeActions.setPrinterTypesDetailsSuccess(res.data));
    else dispatch(printerTypeActions.setPrinterTypesDetailsError(res.error));
  },
  addPrinterTypes: (body, printerTypes) => async (dispatch) => {
    dispatch(printerTypeActions.addPrinterTypesRequest());
    const res = await apiRequests.postRequest(`/printers/types`, body);
    if (res.success)
      dispatch(
        printerTypeActions.addPrinterTypesSuccess({
          data: [res.data, ...printerTypes],
          message: res.message,
        })
      );
    else dispatch(printerTypeActions.addPrinterTypesError(res.error));
    dispatch(printerTypeActions.addPrinterTypesComplete());
  },
  editPrinterTypes: (body, printerTypes) => async (dispatch) => {
    dispatch(printerTypeActions.editPrinterTypesRequest());
    const res = await apiRequests.putRequest(
      `/printers/types/${body.id}`,
      body
    );
    console.log(res.success);
    if (res.success)
      dispatch(
        printerTypeActions.editPrinterTypesSuccess({
          data: [res.data, ...printerTypes],
          message: res.message,
        })
      );
    else dispatch(printerTypeActions.editPrinterTypesError(res.error));
    dispatch(printerTypeActions.editPrinterTypesComplete());
  },
  deletePrinterTypes: (id, printerTypes) => async (dispatch) => {
    dispatch(printerTypeActions.deletePrinterTypesRequest());
    const res = await apiRequests.deleteRequest(`/printers/types/${id}`);
    if (res.success)
      dispatch(
        printerTypeActions.deletePrinterTypesSuccess({
          message: res.message,
          data: printerTypes,
        })
      );
    else dispatch(printerTypeActions.deletePrinterTypesError(res.error));
    dispatch(printerTypeActions.deletePrinterTypesComplete());
  },
  approvePrinterTypes: (id) => async (dispatch) => {
    dispatch(printerTypeActions.approvePrinterTypesRequest());
    const res = await apiRequests.patchRequest(`/printers/types/approve/${id}`);
    if (res.success) {
      dispatch(printerTypeActions.approvePrinterTypesSuccess(res.message));
      //dispatch(roleThunks.getPrinterTypesDetails(id));
    } else dispatch(printerTypeActions.approvePrinterTypesError(res.error));
    dispatch(printerTypeActions.approvePrinterTypesComplete());
  },
  printerTypesMetaData: () => async (dispatch) => {
    dispatch(printerTypeActions.setPrinterTypesMetaDataRequest());
    const res = await apiRequests.getRequest("/printers/metadata");
    dispatch(printerTypeActions.setPrinterTypesMetaData(res.data || {}));
  },
};

export default printerTypeThunks;
