import { billingConstants } from "../../actions/billing/billing.actions";
import initialState from "../../initialState/billing/billing";

const billingState = (state = initialState, { type, payload }) => {
  switch (type) {
    case billingConstants.SET_BILLING_LOADING:
      return {
        ...state,
        billingLoading: true,
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
    case billingConstants.GET_BILLING_BY_PERIOD_LOADING:
      return {
        ...state,
        billingPeriodLoading: true,
      };
    case billingConstants.GET_BILLING_BY_PERIOD_SUCCESS:
      return {
        ...state,
        billingPeriodLoading: false,
        billingPeriodSuccess: true,
        billingPeriod: payload,
      };
    case billingConstants.GET_BILLING_BY_PERIOD_ERROR:
      return {
        ...state,
        billingPeriodLoading: false,
        billingPeriodSuccess: false,
        billingPeriodError: payload,
      };
    case billingConstants.GET_BILLING_BY_PERIOD_COMPLETE:
      return {
        ...state,
        billingPeriodSuccess: false,
      };

    default:
      return state;
  }
};

export default billingState;
