import React from "react";
import { Table } from "antd";

const PrintOutsTable = ({ data }) => {
  const columns = [
    {
      title: "Print Outs",
      key: "name",
      render: (text) => {
        return (
          <div>
            {text.print_outs} <br />
            <div className="d-sm-none">
              Timestamp:{" "}
              {`${new Date(text.created_at).toDateString()} ${new Date(
                text.created_at
              ).toLocaleTimeString()} `}
            </div>
          </div>
        );
      },
    },
    {
      title: "TimeStamp",
      key: "ip",
      responsive: ["md"],
      render: (text) =>
        `${new Date(text.created_at).toDateString()} ${new Date(
          text.created_at
        ).toLocaleTimeString()} `,
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data.print_outs} />
    </div>
  );
};

export default PrintOutsTable;
