export const billingConstants = {
  SET_BILLING_LOADING: "SET_BILLING_LOADING",
  SET_BILLING_SUCCESS: "SET_BILLING_SUCCESS",
  SET_BILLING_ERROR: "SET_BILLING_ERROR",

  GET_BILLING_BY_PERIOD_LOADING: "GET_BILLING_BY_PERIOD_LOADING",
  GET_BILLING_BY_PERIOD_SUCCESS: "GET_BILLING_BY_PERIOD_SUCCESS",
  GET_BILLING_BY_PERIOD_ERROR: "GET_BILLING_BY_PERIOD_ERROR",
  GET_BILLING_BY_PERIOD_COMPLETE: "GET_BILLING_BY_PERIOD_COMPLETE",
};

export const billingActions = {
  setBillingLoading: () => ({
    type: billingConstants.SET_BILLING_LOADING,
  }),
  setBillingSuccess: (payload) => ({
    type: billingConstants.SET_BILLING_SUCCESS,
    payload,
  }),
  setBillingError: (payload) => ({
    type: billingConstants.SET_BILLING_ERROR,
    payload,
  }),
  getBillingByPeriodLoading: () => ({
    type: billingConstants.GET_BILLING_BY_PERIOD_LOADING,
  }),
  getBillingByPeriodSuccess: (payload) => ({
    type: billingConstants.GET_BILLING_BY_PERIOD_SUCCESS,
    payload,
  }),
  getBillingByPeriodError: (payload) => ({
    type: billingConstants.GET_BILLING_BY_PERIOD_ERROR,
    payload,
  }),
  getBillingByPeriodComplete: () => ({
    type: billingConstants.GET_BILLING_BY_PERIOD_COMPLETE,
  }),
};
