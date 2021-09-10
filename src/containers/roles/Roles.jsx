import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RolesDetails from "../../components/roles/Details/RolesDEtails";
import AddRoles from "../../components/roles/Forms/AddRoles";
import EditRoles from "../../components/roles/Forms/EditRoles";
import RolesTable from "../../components/roles/Tables/rolesTable";
import routes from "../../config/routes/routes";
import roleThunks from "../../config/thunks/roles/roles.thunks";

const Roles = () => {
  const { rolesSuccess } = useSelector((state) => state.rolesState);
  const [addRolesModal, setAddRolesModal] = useState(false);
  const [editRolesModal, setEditRolesModal] = useState(false);
  const [rolesDetailsModal, setRolesDetailsModal] = useState(false);
  const [rolesDetails, setRolesDetails] = useState([]);
  const dispatch = useDispatch();
  const toggleAddRoleModal = (value) => {
    setAddRolesModal(value);
  };
  const toggleRoleDetailsModal = (value, array) => {
    setRolesDetailsModal(value);
    setRolesDetails(array);
  };
  const toggleEditRoleModal = (value) => setEditRolesModal(value);
  const refreshTable = () => {
    dispatch(roleThunks.getRoles());
  };
  const editRole = (values, roles) => {
    dispatch(roleThunks.editRoles(values, roles));
  };
  const approveRole = (id) => dispatch(roleThunks.approveRoles(id));
  const addRole = (values, roles) => {
    dispatch(roleThunks.addRoles(values, roles));
  };
  const deleteRole = (id, roles) => {
    dispatch(roleThunks.deleteRoles(id, roles));
  };
  useEffect(() => {
    document.title = routes.roles.title;
    if (!rolesSuccess) dispatch(roleThunks.getRoles());
  }, [dispatch, rolesSuccess]);

  return (
    <div id={"main-container"} className="main-container">
      <h3 className="mx-4">Roles</h3>
      <RolesTable
        handleDeleteRole={deleteRole}
        handleRefreshTable={refreshTable}
        handleOpenAddModal={toggleAddRoleModal}
        handleOpenEditModal={toggleEditRoleModal}
        handleViewDetails={toggleRoleDetailsModal}
      />
      <AddRoles
        handleAddRecord={addRole}
        handleCloseModal={toggleAddRoleModal}
        visible={addRolesModal}
      />
      <RolesDetails
        handleCloseModal={toggleRoleDetailsModal}
        visible={rolesDetailsModal}
        details={rolesDetails}
        handApproveRole={approveRole}
      />
      <EditRoles
        handleEditRecord={editRole}
        visible={editRolesModal}
        handleCloseModal={toggleEditRoleModal}
      />
    </div>
  );
};

export default Roles;
