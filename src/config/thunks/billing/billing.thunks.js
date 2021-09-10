import { billingActions } from "../../actions/billing/billing.actions";
import apiRequests from "../../api/api";

const billingThunks = {
  getBilling: () => async (dispatch) => {
    dispatch(billingActions.setBillingLoading());
    const res = await apiRequests.getRequest("/billing");
    if (res.success) dispatch(billingActions.setBillingSuccess(res.data));
    else dispatch(billingActions.setBillingError(res.error));
  },
};

export default billingThunks;
