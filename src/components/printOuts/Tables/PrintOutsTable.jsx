import { Button, message, Popover, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { printOutActions } from "../../../config/actions/printers/printOuts.actions";
import generatePDF from "../../../config/helpers/generatePdf";
import { numberWithCommas } from "../../../config/helpers/numberFormatter";
import TableButtonActions from "../../Shared/Table/TableActions";
import TableTitle from "../../Shared/Table/Title";

const PrintOutsTable = ({
  handleDelete,
  handleViewDetails,
  handleOpenAddModal,
  handleRefreshTable,
  handleOpenEditModal,
}) => {
  const [deleteId, setDeleteId] = useState("");
  const {
    printOutsLoading: loading,
    printOuts: data,
    printOutsError: error,
    printOutsSuccess: success,
    deletePrintOutsLoading: deleteLoading,
    deletePrintOutsSuccess,
    deletePrintOutsMessage,
    deletePrintOutsError,
  } = useSelector((state) => state.printOutsState);
  const { permissions } = useSelector((state) => state.authState);
  const columns = [
    {
      title: "Number Of Prints/Copies",
      key: "name",
      render: (text) => {
        return (
          <div>
            <span className="d-md-none">Print Outs:</span>{" "}
            {numberWithCommas(parseInt(text.print_outs))} <br />
            <div className="d-sm-none">
              Printer: {text.printerName} <br />
              Unit Costs: {numberWithCommas(parseInt(text.unit_cost))} <br />
              Total Cost: {numberWithCommas(parseInt(text.total_cost))}
              <br />
              TimeStamp:{" "}
              {`${new Date(text.created_at).toDateString()} ${new Date(
                text.created_at
              ).toLocaleTimeString()}`}{" "}
              <br />
              <Popover
                className=""
                trigger="click"
                placement="bottom"
                content={() =>
                  TableButtonActions(text, {
                    viewDetails,
                    updateRecord,
                    confirmDelete,
                    deleteRecord,
                    deleteLoading,
                    deleteId,
                  })
                }
              >
                Actions: <Button type="link">Actions</Button>
              </Popover>
            </div>
          </div>
        );
      },
    },
    {
      title: "Printer",
      dataIndex: "printerName",
      key: "name",
      responsive: ["md"],
    },
    {
      title: "Unit Cost",
      dataIndex: "unit_cost",
      responsive: ["md"],
      key: "unit_cost",
      render: (text) => numberWithCommas(parseInt(text)),
    },
    {
      title: "Total Cost",
      responsive: ["md"],
      key: "total_cost",
      dataIndex: "total_cost",
      render: (text) => numberWithCommas(parseInt(text)),
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
    {
      title: "Action",
      key: "operation",
      responsive: ["md"],
      render: (text) => (
        <Popover
          trigger="click"
          placement="bottom"
          content={() =>
            TableButtonActions(text, {
              viewDetails,
              updateRecord,
              confirmDelete,
              deleteRecord,
              deleteLoading,
              deleteId,
            })
          }
        >
          <Button>Actions</Button>
        </Popover>
      ),
    },
  ];
  const [filterTable, setfilterTable] = useState(null);
  const dispatch = useDispatch();
  const search = (value) => {
    const filterTable = data.filter((o) =>
      Object.keys(o).some((k) =>
        String(o[k]).toLowerCase().includes(value.toLowerCase())
      )
    );
    setfilterTable(filterTable);
  };
  const deleteRecord = (e) => {
    setDeleteId(e.target.id);
  };
  const confirmDelete = () => {
    const printOuts = data.filter((r) => r.id !== deleteId);
    handleDelete(deleteId, printOuts);
  };
  const viewDetails = (e) => {
    handleViewDetails(e.target.id);
    // dispatch(appUiActions.toggleViewPrintersModal(true));
  };
  const updateRecord = (e) => {
    const updateRecordArray = data.filter((r) => r.id === e.target.id);
    dispatch(printOutActions.editPrintOutsData(updateRecordArray[0]));
    handleOpenEditModal(true);
  };
  const exportRecords = () => {
    const pdfColumns = [
      "Printer",
      "Print Outs",
      "Unit Cost",
      "Total Cost",
      "Timestamp",
    ];
    let pdfRows = [];
    data?.forEach((record) => {
      const row = [
        record.printerName,
        numberWithCommas(parseInt(record.print_outs)),
        numberWithCommas(parseInt(record.unit_cost)),
        numberWithCommas(parseInt(record.total_cost)),
        new Date(record.created_at).toLocaleDateString(),
      ];
      pdfRows.push(row);
    });
    if (permissions.can_export_print_outs) {
      generatePDF(
        pdfRows,
        pdfColumns,
        `Print Outs - ${new Date().toLocaleDateString()}`,
        `Print Outs - ${new Date().toLocaleDateString()}.pdf`
      );
    } else message.error("You Do Not Have Permission To Export Print Outs");
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
    handleOpenAddModal(true);
  };

  useEffect(() => {
    if (deletePrintOutsSuccess && deletePrintOutsMessage)
      message.success(deletePrintOutsMessage);
    else if (deletePrintOutsError && !deletePrintOutsSuccess)
      message.error(deletePrintOutsError);
  }, [deletePrintOutsSuccess, deletePrintOutsError, deletePrintOutsMessage]);
  return (
    <div>
      <Table
        rowKey={(r) => r.id}
        pagination={{ total: data.length, showSizeChanger: true, showTotal }}
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
        bordered={true}
        dataSource={filterTable === null ? data : filterTable}
        columns={columns}
      />
    </div>
  );
};

export default PrintOutsTable;
