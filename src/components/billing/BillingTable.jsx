import { message, Table } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import generatePDF from "../../config/helpers/generatePdf";
import { numberWithCommas } from "../../config/helpers/numberFormatter";
import TableTitle from "../Shared/Table/Title";
import BillingPeriodsTable from "./BillingPeriodsTable";

const BillingTable = ({ handleRefreshTable }) => {
  const {
    billingLoading: loading,
    billing: data,
    billingError: error,
    billingSuccess: success,
  } = useSelector((state) => state.billingState);

  const { permissions } = useSelector((state) => state.authState);
  const columns = [
    {
      title: "Printer",
      key: "name",
      render: (text) => {
        return (
          <div>
            <span className="d-sm-none">Printer:</span> {text.printer_name}{" "}
            <br />
            <div className="d-sm-none">
              Location: {text.location} <br />
              Type: {text.printer_type} <br />
            </div>
          </div>
        );
      },
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      responsive: ["md"],
    },
    {
      title: "Type",
      dataIndex: "printer_type",
      responsive: ["md"],
      key: "location",
    },
    {
      title: "Unit Cost",
      dataIndex: "unit_cost",
      responsive: ["md"],
      key: "unit_cost",
      render: (text) => numberWithCommas(parseInt(text)),
    },
  ];
  const [filterTable, setfilterTable] = useState(null);
  const search = (value) => {
    const filterTable = data.filter((o) =>
      Object.keys(o).some((k) =>
        String(o[k]).toLowerCase().includes(value.toLowerCase())
      )
    );
    setfilterTable(filterTable);
  };

  const setfilterTableNull = (e) => {
    if (!e.target.value) setfilterTable(null);
  };

  const showTotal = (total) => `Total: ${total}`;
  const refreshTable = () => {
    handleRefreshTable();
    if (!success && error) message.error(error);
  };
  const openAddModal = () => {
    message.info("Billing And Metering System");
  };
  const exportRecords = () => {
    const pdfColumns = [
      "Printer",
      "Type",
      "Period",
      "Opening",
      "Closing",
      "Prints/Copies",
      "Cost",
    ];
    let pdfRows = [];
    data.forEach((record) => {
      const row = [record.printer_name, "", "", "", "", "", ""];
      pdfRows.push(row);
      record.printerBillingCycle.forEach((r) => {
        const row = [
          "",
          record.printer_type,
          r.period,
          numberWithCommas(r.opening),
          numberWithCommas(r.closing),
          numberWithCommas(r.prints),
          numberWithCommas(r.total_cost),
        ];
        pdfRows.push(row);
      });
    });
    // data?.forEach((record) => {
    //   const row = [record.name, record.ip, record.location];
    //   pdfRows.push(row);
    // });
    if (permissions.can_export_billing) {
      generatePDF(
        pdfRows,
        pdfColumns,
        `Billing - ${new Date().toLocaleDateString()}`,
        `Billing - ${new Date().toLocaleDateString()}.pdf`
      );
    } else message.error("You Do Not Have Permission To Export Billing");
  };

  return (
    <div>
      <Table
        rowKey={(r) => r.id}
        pagination={{ total: data?.length, showSizeChanger: true, showTotal }}
        loading={loading}
        title={() =>
          TableTitle({
            search,
            setfilterTableNull,
            refreshTable,
            exportRecords,
            openAddModal,
          })
        }
        expandable={{
          expandedRowRender: (record) => BillingPeriodsTable(record),
        }}
        bordered={true}
        dataSource={filterTable === null ? data : filterTable}
        columns={columns}
      />
    </div>
  );
};

export default BillingTable;
