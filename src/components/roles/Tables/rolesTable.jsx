import { Button, message, Popover, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roleActions } from "../../../config/actions/roles/roles.actions";
import TableButtonActions from "../../Shared/Table/TableActions";
import TableTitle from "../../Shared/Table/Title";

const RolesTable = ({
  handleDeleteRole,
  handleViewDetails,
  handleOpenAddModal,
  handleRefreshTable,
}) => {
  const [deleteId, setDeleteId] = useState("");
  const {
    rolesLoading: loading,
    roles: data,
    rolesError: error,
    rolesSuccess: success,
    deleteRolesLoading: deleteLoading,
    deleteRolesSuccess,
    deleteRolesMessage,
    deleteRolesError,
  } = useSelector((state) => state.rolesState);
  const columns = [
    {
      title: "Role",
      key: "name",
      render: (text) => {
        return (
          <div>
            {text.name} <br />
            <Popover
              className="d-sm-none"
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
        );
      },
    },
    {
      title: "Action",
      key: "operation",
      responsive: ["sm"],
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
    const roles = data.filter((r) => r.id !== deleteId);
    handleDeleteRole(deleteId, roles);
  };
  const viewDetails = (e) => {
    handleViewDetails(e.target.id);
    // dispatch(appUiActions.toggleViewRolesModal(true));
  };
  const updateRecord = (e) => {
    const updateRecordArray = data.filter((r) => r.id === e.target.id);
    dispatch(roleActions.editRolesData(updateRecordArray[0]));
    //dispatch(appUiActions.toggleEditRolesModal(true));
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
    if (deleteRolesSuccess && deleteRolesMessage)
      message.success(deleteRolesMessage);
    else if (deleteRolesError && !deleteRolesSuccess)
      message.error(deleteRolesError);
  }, [deleteRolesSuccess, deleteRolesError, deleteRolesMessage]);
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

export default RolesTable;
