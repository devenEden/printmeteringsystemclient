import React, { useEffect } from "react";
import routes from "../../config/routes/routes";

const Dashboard = () => {
  useEffect(() => {
    document.title = routes.dashboard.title;
  }, []);
  return (
    <div className="w-100">
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
