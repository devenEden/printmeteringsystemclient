import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddRoles from "../../components/roles/Forms/AddRoles";
import RolesTable from "../../components/roles/Tables/rolesTable";
import routes from "../../config/routes/routes";
import roleThunks from "../../config/thunks/roles/roles.thunks";

const Roles = () => {
  const { rolesSuccess } = useSelector((state) => state.rolesState);
  const [addRolesModal, setAddRolesModal] = useState(false);
  const dispatch = useDispatch();
  const toggleAddRoleModal = (value) => {
    setAddRolesModal(value);
  };
  const refreshTable = () => {
    dispatch(roleThunks.getRoles());
  };
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
      <RolesTable
        handleDeleteRole={deleteRole}
        handleRefreshTable={refreshTable}
        handleOpenAddModal={toggleAddRoleModal}
      />
      <AddRoles
        handleAddRecord={addRole}
        handleCloseModal={toggleAddRoleModal}
        visible={addRolesModal}
      />
    </div>
  );
};

export default Roles;
