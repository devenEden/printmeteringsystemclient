import React from "react";
import { Layout } from "antd";
const { Header } = Layout;
const AppHeader = () => {
  return (
    <Header className="bg-light" style={{ padding: 0 }} title={document.title}>
      <h5 className="m-3">PRINT TRACKER SYSTEM</h5>
    </Header>
  );
};

export default AppHeader;
