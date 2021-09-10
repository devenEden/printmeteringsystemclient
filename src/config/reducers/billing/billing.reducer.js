import { billingConstants } from "../../actions/billing/billing.actions";
import initialState from "../../initialState/billing/billing";

const billingState = (state = initialState, { type, payload }) => {
  switch (type) {
    case billingConstants.SET_BILLING_LOADING:
      return {
        ...state,
        billingLoading: true,
        billing: payload,
        billingError: "",
        billingSuccess: true,
      };
    case billingConstants.SET_BILLING_SUCCESS:
      return {
        ...state,
        billingLoading: false,
        billing: payload,
        billingError: "",
        billingSuccess: true,
      };
    case billingConstants.SET_BILLING_ERROR:
      return {
        ...state,
        billingLoading: false,
        billingError: payload,
        billingSuccess: false,
      };
    default:
      return state;
  }
};

export default billingState;
