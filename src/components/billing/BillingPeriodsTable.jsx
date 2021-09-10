import { Table } from "antd";
import React from "react";
import { numberWithCommas } from "../../config/helpers/numberFormatter";

const BillingPeriodsTable = (record) => {
  const columns = [
    {
      title: "Period",
      key: "period",
      render: (text) => {
        return (
          <div>
            {text.period}
            <div className="d-sm-none">
              Opening: {numberWithCommas(text.opening)} <br />
              Closing: {numberWithCommas(text.closing)} <br />
              Prints: {numberWithCommas(parseInt(text.prints))} <br />
              Cost: {numberWithCommas(parseInt(text.total_cost))}
            </div>
          </div>
        );
      },
    },
    {
      title: "Opening",
      dataIndex: "opening",
      key: "opening",
      responsive: ["sm"],
      render: (text) => numberWithCommas(parseInt(text)),
    },
    {
      title: "Closing",
      dataIndex: "closing",
      key: "closing",
      responsive: ["sm"],
      render: (text) => numberWithCommas(parseInt(text)),
    },
    {
      title: "Prints/Copies",
      dataIndex: "prints",
      key: "Prints",
      responsive: ["sm"],
      render: (text) => numberWithCommas(parseInt(text)),
    },
    {
      title: "Cost",
      dataIndex: "total_cost",
      key: "total_cost",
      responsive: ["sm"],
      render: (text) => numberWithCommas(parseInt(text)),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={record?.printerBillingCycle} />
    </div>
  );
};

export default BillingPeriodsTable;
