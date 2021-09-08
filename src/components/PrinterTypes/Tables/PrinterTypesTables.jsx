import { Button, message, Modal, Popover, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { printerTypeActions } from "../../../config/actions/printers/printerTypes.actions";
import TableButtonActions from "../../Shared/Table/TableActions";
import TableTitle from "../../Shared/Table/Title";

const PrinterTypesTables = ({
  visible,
  handleCloseModal,
  handleOpenEditModal,
  handleViewDetails,
  handleRefreshTable,
  handleDelete,
  handleOpenAddModal,
}) => {
  const [deleteId, setDeleteId] = useState("");
  const [filterTable, setfilterTable] = useState(null);
  const {
    printerTypesLoading: loading,
    printerTypes: data,
    printerTypesError: error,
    printerTypesSuccess: success,
    deletePrintersLoading: deleteLoading,
    deletePrinterTypesSuccess,
    deletePrinterTypesMessage,
    deletePrinterTypesError,
  } = useSelector((state) => state.printerTypesState);

  const columns = [
    {
      title: "Printer Type",
      key: "name",
      render: (text) => {
        return (
          <div>
            {text.name} <br />
            <div className="d-sm-none">
              Unit Cost: {text.unit_cost} <br />
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
      title: "Unit Cost",
      dataIndex: "unit_cost",
      key: "unit_cost",
      responsive: ["md"],
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
  const dispatch = useDispatch();

  const closeModal = () => {
    handleCloseModal(false);
  };
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
    dispatch(printerTypeActions.editPrinterTypesData(updateRecordArray[0]));
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
    if (deletePrinterTypesSuccess && deletePrinterTypesMessage)
      message.success(deletePrinterTypesMessage);
    else if (deletePrinterTypesError && !deletePrinterTypesSuccess)
      message.error(deletePrinterTypesError);
  }, [
    deletePrinterTypesSuccess,
    deletePrinterTypesError,
    deletePrinterTypesMessage,
  ]);

  return (
    <div>
      <Modal
        zIndex={500}
        width={900}
        title="Printer Types"
        footer={null}
        onCancel={closeModal}
        visible={visible}
      >
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
      </Modal>
    </div>
  );
};

export default PrinterTypesTables;
