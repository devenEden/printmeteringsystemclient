import React, { useEffect } from "react";
import routes from "../../config/routes/routes";

const Billing = () => {
  useEffect(() => {
    document.title = routes.billing.title;
  }, []);
  return (
    <div id="main-container" className="w-100">
      <h3 className="mx-4">Billing</h3>
    </div>
  );
};

export default Billing;
