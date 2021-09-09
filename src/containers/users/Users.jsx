import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddUser from "../../components/users/Forms/AddUsers";
import EditUser from "../../components/users/Forms/EditUsers";
import UsersTable from "../../components/users/Table/UsersTable";
import userThunks from "../../config/thunks/users/users.thunks";

const Users = () => {
  const [addUsersModal, setAddUsersModal] = useState(false);
  const [editUsersModal, editEditUsersModal] = useState(false);

  const { usersSuccess } = useSelector((state) => state.usersState);
  const dispatch = useDispatch();

  //ui functions
  const toggleAddUserModal = (value) => setAddUsersModal(value);
  const toggleEditUserModal = (value) => editEditUsersModal(value);

  //thunks
  const refreshData = () => {
    dispatch(userThunks.getUsers());
    dispatch(userThunks.usersMetaData());
  };
  const addUsers = (values, users) =>
    dispatch(userThunks.addUsers(values, users));
  const editUsers = (values, users) =>
    dispatch(userThunks.editUsers(values, users));
  const deleteUsers = (id, users) =>
    dispatch(userThunks.deleteUsers(id, users));

  useEffect(() => {
    if (!usersSuccess) {
      dispatch(userThunks.getUsers());
      dispatch(userThunks.usersMetaData());
    }
  }, [usersSuccess, dispatch]);

  return (
    <div id="main-container">
      <h3 className="mx-4">Users</h3>
      <UsersTable
        handleOpenEditModal={toggleEditUserModal}
        handleDelete={deleteUsers}
        handleOpenAddModal={toggleAddUserModal}
        handleRefreshTable={refreshData}
      />
      <AddUser
        visible={addUsersModal}
        handleCloseModal={toggleAddUserModal}
        handleAddRecord={addUsers}
      />
      <EditUser
        visible={editUsersModal}
        handleEditRecord={editUsers}
        handleCloseModal={toggleEditUserModal}
      />
    </div>
  );
};

export default Users;
