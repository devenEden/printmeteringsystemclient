import React from "react";
import { Table } from "antd";
import { numberWithCommas } from "../../../config/helpers/numberFormatter";

const PrintOutsTable = ({ data }) => {
  const columns = [
    {
      title: "Print Outs",
      key: "name",
      render: (text) => {
        return (
          <div>
            <span className="d-md-none">Print Outs:</span>{" "}
            {numberWithCommas(text.print_outs)} <br />
            <div className="d-sm-none">
              Printer: {data.name} <br />
              Unit Costs: {numberWithCommas(parseInt(data.unit_cost))} <br />
              Total Cost:{" "}
              {numberWithCommas(
                parseInt(data.printerTypeDetails?.unit_cost) * text.print_outs
              )}
              <br />
              TimeStamp:{" "}
              {`${new Date(text.created_at).toDateString()} ${new Date(
                text.created_at
              ).toLocaleTimeString()}`}{" "}
              <br />
            </div>
          </div>
        );
      },
    },
    {
      title: "Total Cost",
      responsive: ["md"],
      key: "total_cost",
      render: (text) =>
        numberWithCommas(
          parseInt(data.printerTypeDetails?.unit_cost) * text.print_outs
        ),
    },
    {
      title: "TimeStamp",
      responsive: ["md"],
      key: "unit_cost",
      render: (text) =>
        `${new Date(text.created_at).toDateString()} ${new Date(
          text.created_at
        ).toLocaleTimeString()}`,
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data?.printOuts} />
    </div>
  );
};

export default PrintOutsTable;
