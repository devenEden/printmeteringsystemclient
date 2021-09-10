import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BillingTable from "../../components/billing/BillingTable";
import routes from "../../config/routes/routes";
import billingThunks from "../../config/thunks/billing/billing.thunks";

const Billing = () => {
  //state
  const { billingSuccess } = useSelector((state) => state.billingState);
  const dispatch = useDispatch();
  //ui
  //thunks
  const refreshData = () => dispatch(billingThunks.getBilling());
  //use effect
  useEffect(() => {
    document.title = routes.billing.title;
    if (!billingSuccess) dispatch(billingThunks.getBilling());
  }, [billingSuccess, dispatch]);
  return (
    <div id="main-container" className="w-100">
      <h3 className="mx-4">Billing</h3>
      <BillingTable handleRefreshTable={refreshData} />
    </div>
  );
};

export default Billing;
