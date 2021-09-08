import { Button, message, Popover, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { printerActions } from "../../../config/actions/printers/printers.actions";
import TableButtonActions from "../../Shared/Table/TableActions";
import TableTitle from "../../Shared/Table/Title";

const PrintersTable = ({
  handleDelete,
  handleViewDetails,
  handleOpenAddModal,
  handleRefreshTable,
  handleOpenEditModal,
}) => {
  const [deleteId, setDeleteId] = useState("");
  const {
    printersLoading: loading,
    printers: data,
    printersError: error,
    printersSuccess: success,
    deletePrintersLoading: deleteLoading,
    deletePrintersSuccess,
    deletePrintersMessage,
    deletePrintersError,
  } = useSelector((state) => state.printersState);
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
    const printers = data.filter((r) => r.id !== deleteId);
    handleDelete(deleteId, printers);
  };
  const viewDetails = (e) => {
    handleViewDetails(e.target.id);
    // dispatch(appUiActions.toggleViewPrintersModal(true));
  };
  const updateRecord = (e) => {
    const updateRecordArray = data.filter((r) => r.id === e.target.id);
    dispatch(printerActions.editPrintersData(updateRecordArray[0]));
    handleOpenEditModal(true);
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
    if (deletePrintersSuccess && deletePrintersMessage)
      message.success(deletePrintersMessage);
    else if (deletePrintersError && !deletePrintersSuccess)
      message.error(deletePrintersError);
  }, [deletePrintersSuccess, deletePrintersError, deletePrintersMessage]);
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
            // exportRecords,
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

export default PrintersTable;
