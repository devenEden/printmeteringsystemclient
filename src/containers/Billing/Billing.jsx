import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BillingTable from "../../components/billing/BillingTable";
import BillingPeriodForm from "../../components/billing/Forms/BillingPeriodForm";
import routes from "../../config/routes/routes";
import billingThunks from "../../config/thunks/billing/billing.thunks";

const Billing = () => {
  //state
  const { billingSuccess } = useSelector((state) => state.billingState);
  const [billingPeriodModalVisible, setBillingPeriodModalVisible] =
    useState(false);
  const dispatch = useDispatch();
  //ui
  const toggleBillingPeriodModal = (value) =>
    setBillingPeriodModalVisible(value);
  //thunks
  const refreshData = () => dispatch(billingThunks.getBilling());
  const generateBillingPeriod = (values) =>
    dispatch(billingThunks.getBillingByPeriod(values));
  //use effect
  useEffect(() => {
    document.title = routes.billing.title;
    if (!billingSuccess) dispatch(billingThunks.getBilling());
  }, [billingSuccess, dispatch]);
  return (
    <div id="main-container" className="w-100">
      <h3 className="mx-4">Billing</h3>
      <Button
        onClick={() => setBillingPeriodModalVisible(true)}
        className="mb-2"
        size="large"
      >
        Select Billing Period
      </Button>
      <BillingTable handleRefreshTable={refreshData} />
      <BillingPeriodForm
        handleSelectPeriod={generateBillingPeriod}
        visible={billingPeriodModalVisible}
        handleCloseModal={toggleBillingPeriodModal}
      />
    </div>
  );
};

export default Billing;
