import React from "react";
import { Table } from "antd";

const PrinterTypePrinterTable = ({ data }) => {
  const columns = [
    {
      title: "Printer",
      key: "name",
      render: (text) => {
        return (
          <div>
            Printer: {text.name} <br />
            <div className="d-sm-none">
              Ip Address: {text.ip} <br />
              Location: {text.location} <br />
            </div>
          </div>
        );
      },
    },
    {
      title: "Ip Address",
      dataIndex: "ip",
      key: "ip",
      responsive: ["md"],
    },
    {
      title: "Location",
      dataIndex: "location",
      responsive: ["md"],
      key: "location",
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default PrinterTypePrinterTable;
