import { Button, message, Popover, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../config/actions/users/users.actions";
import TableButtonActions from "../../Shared/Table/TableActions";
import TableTitle from "../../Shared/Table/Title";

const UsersTable = ({
  handleDeleteRole,
  handleViewDetails,
  handleOpenAddModal,
  handleRefreshTable,
  handleOpenEditModal,
}) => {
  const [deleteId, setDeleteId] = useState("");
  const {
    usersLoading: loading,
    users: data,
    usersError: error,
    usersSuccess: success,
    deleteUsersLoading: deleteLoading,
    deleteUsersSuccess,
    deleteUsersMessage,
    deleteUsersError,
  } = useSelector((state) => state.usersState);
  const columns = [
    {
      title: "Name",
      key: "name",
      render: (text) => {
        return (
          <div>
            {text.first_name} ${text.other_names} <br />
            <div className="d-sm-none">
              Email: {text.email} <br />
              Role: {text.roleName}
              Username: {text.username}
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
                Actions: <Button type="link">Actions</Button>
              </Popover>
            </div>
          </div>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      responsive: ["md"],
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      responsive: ["md"],
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      responsive: ["md"],
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
    const users = data.filter((r) => r.id !== deleteId);
    handleDeleteRole(deleteId, users);
  };
  const viewDetails = (e) => {
    const updateRecordArray = data.filter((r) => r.id === e.target.id);
    handleViewDetails(true, updateRecordArray[0]);
    // dispatch(appUiActions.toggleViewUsersModal(true));
  };
  const updateRecord = (e) => {
    const updateRecordArray = data.filter((r) => r.id === e.target.id);
    dispatch(userActions.editUsersData(updateRecordArray[0]));
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
    if (deleteUsersSuccess && deleteUsersMessage)
      message.success(deleteUsersMessage);
    else if (deleteUsersError && !deleteUsersSuccess)
      message.error(deleteUsersError);
  }, [deleteUsersSuccess, deleteUsersError, deleteUsersMessage]);
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

export default UsersTable;
