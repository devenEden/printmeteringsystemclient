export const billingConstants = {
  SET_BILLING_LOADING: "SET_BILLING_LOADING",
  SET_BILLING_SUCCESS: "SET_BILLING_SUCCESS",
  SET_BILLING_ERROR: "SET_BILLING_ERROR",
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
};
