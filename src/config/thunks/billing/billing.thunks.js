import { billingActions } from "../../actions/billing/billing.actions";
import apiRequests from "../../api/api";

const billingThunks = {
  getBilling: () => async (dispatch) => {
    dispatch(billingActions.setBillingLoading());
    const res = await apiRequests.getRequest("/billing");
    if (res.success) dispatch(billingActions.setBillingSuccess(res.data));
    else dispatch(billingActions.setBillingError(res.error));
  },
  getBillingByPeriod: (values) => async (dispatch) => {
    dispatch(billingActions.getBillingByPeriodLoading());
    const res = await apiRequests.postRequest(
      "/billing/billingByPeriod",
      values
    );
    if (res.success)
      dispatch(billingActions.getBillingByPeriodSuccess(res.data));
    else dispatch(billingActions.getBillingByPeriodError(res.error));
    dispatch(billingActions.getBillingByPeriodComplete());
  },
};

export default billingThunks;
