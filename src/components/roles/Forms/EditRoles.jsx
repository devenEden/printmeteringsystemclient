import {
  Form,
  Input,
  Modal,
  Button,
  Space,
  Alert,
  message,
  Select,
} from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roleActions } from "../../../config/actions/roles/roles.actions";
import appConfig from "../../../config/config.json";

const EditRoles = ({ visible, handleCloseModal, handleEditRecord }) => {
  /*  */
  const {
    editRolesSuccess,
    editRolesLoading,
    editRolesError,
    editRolesMessage,
    editRolesData,
    roles,
  } = useSelector((state) => state.rolesState);
  const dispatch = useDispatch();
  const closeModal = () => {
    handleCloseModal(false);
  };
  const onFinish = (values) => {
    const roleBefore = values.role;
    const permissions = [];
    for (const key in values) {
      if (Object.hasOwnProperty.call(values, key)) {
        if (values[key]) {
          values[key] = key;
          permissions.push({ permission: values[key] });
        }
        if (!values[key]) delete values[key];
      }
    }
    values.id = editRolesData.id;
    values.created_at = new Date();
    values.role = roleBefore;
    dispatch(
      roleActions.editRolesData({ ...values, name: values.role, permissions })
    );
    console.log(values);
    const updateRecordArray = roles.filter((r) => r.id !== editRolesData.id);
    handleEditRecord(values, updateRecordArray);
  };
  const generateFieldsPermissions = (data, appPermissions) => {
    try {
      const userPermissions = data?.map((permission) => permission.permission);
      let fieldPermissions = [];
      for (const key in appPermissions) {
        if (Object.hasOwnProperty.call(appPermissions, key)) {
          if (userPermissions?.includes(appPermissions[key])) {
            fieldPermissions.push({
              name: appPermissions[key],
              value: appPermissions[key],
            });
          } else {
            fieldPermissions.push({ name: appPermissions[key], value: false });
          }
        }
      }
      return fieldPermissions;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fieldPermissions = generateFieldsPermissions(
    editRolesData.permissions,
    appConfig.permissions
  );
  const fields = [
    { name: "role", value: editRolesData.name },
    ...fieldPermissions,
  ];

  useEffect(() => {
    if (editRolesMessage && editRolesSuccess) {
      message.success(editRolesMessage);
      handleCloseModal(false);
    }
  }, [editRolesSuccess, editRolesMessage, handleCloseModal]);
  return (
    <div>
      <Modal
        width={1000}
        footer={null}
        title="Edit Role"
        onCancel={closeModal}
        visible={visible}
      >
        <Form fields={fields} onFinish={onFinish} layout="vertical">
          {!editRolesSuccess && editRolesError && (
            <Alert
              showIcon
              type="error"
              message={editRolesError}
              className="my-2"
            />
          )}
          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please add a role" }]}
          >
            <Input />
          </Form.Item>
          <h5 className="m-0">Permissions</h5>
          <div className="w-100 d-flex flex-row flex-wrap">
            <div className=" m-2">
              <p className="m-0">Roles</p>
              <Space direction="vertical">
                <Form.Item
                  label="Can View Roles"
                  className="m-0 p-0"
                  name={appConfig.permissions.can_view_roles}
                >
                  <Select>
                    <Select.Option
                      key="view_role_granted"
                      value={appConfig.permissions.can_view_roles}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option key="view_denied_granted" value={false}>
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Can Add Role"
                  className="m-0 p-0"
                  name={appConfig.permissions.can_add_roles}
                >
                  <Select>
                    <Select.Option
                      key="add_roles"
                      value={appConfig.permissions.can_add_roles}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option key="add_role_denined" value={false}>
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Can Edit Role"
                  className="m-0 p-0"
                  name={appConfig.permissions.can_edit_roles}
                >
                  <Select>
                    <Select.Option
                      key="edit_roles"
                      value={appConfig.permissions.can_edit_roles}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option key="edit_role_denined" value={false}>
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name={"deleteroles"} className="mb-0">
                  <Form.Item
                    className="m-0 p-0"
                    label="Can Delete Roles"
                    name={appConfig.permissions.can_delete_roles}
                  >
                    <Select>
                      <Select.Option
                        key="delete_roles"
                        value={appConfig.permissions.can_delete_roles}
                      >
                        Permission Granted
                      </Select.Option>
                      <Select.Option key="delete_role_denined" value={false}>
                        Permission Denied
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Form.Item>
                <Form.Item name={"approveroles"} className="mb-0">
                  <Form.Item
                    className="m-0 p-0"
                    label="Can Approve Roles"
                    name={appConfig.permissions.can_approve_roles}
                  >
                    <Select>
                      <Select.Option
                        key="can_approve_roles"
                        value={appConfig.permissions.can_approve_roles}
                      >
                        Permission Granted
                      </Select.Option>
                      <Select.Option
                        key="can_approve_roles_denied"
                        value={false}
                      >
                        Permission Denied
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Form.Item>
              </Space>
            </div>
            <div className=" m-2">
              <p className="m-0">Users</p>
              <Space direction="vertical">
                <Form.Item
                  className="m-0 p-0"
                  label="Can View Users"
                  name={appConfig.permissions.can_view_users}
                >
                  <Select>
                    <Select.Option
                      key="can_view_users"
                      value={appConfig.permissions.can_view_users}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option key="can_view_users_denied" value={false}>
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name={"addusers"} className="mb-0">
                  <Form.Item
                    label="Can Add Users"
                    className="m-0 p-0"
                    name={appConfig.permissions.can_add_users}
                  >
                    <Select>
                      <Select.Option
                        key="can_add_users"
                        value={appConfig.permissions.can_add_users}
                      >
                        Permission Granted
                      </Select.Option>
                      <Select.Option key="can_add_users_denied" value={false}>
                        Permission Denied
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Form.Item>
                <Form.Item
                  label="Can Delete Users"
                  className="m-0 p-0"
                  name={appConfig.permissions.can_delete_users}
                >
                  <Select>
                    <Select.Option
                      key="can_delete_users"
                      value={appConfig.permissions.can_delete_users}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option key="can_delete_users_denied" value={false}>
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Space>
            </div>
            <div className=" m-2">
              <p className="m-0">Printer Types</p>
              <Space direction="vertical">
                <Form.Item
                  className="m-0 p-0"
                  label="Can Add Printer Types"
                  name={appConfig.permissions.can_view_printer_types}
                >
                  <Select>
                    <Select.Option
                      key="can_view_printer_types"
                      value={appConfig.permissions.can_view_printer_types}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option
                      key="can_view_printer_types_denied"
                      value={false}
                    >
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  label="Can Add Printer Type"
                  name={appConfig.permissions.can_add_printer_types}
                >
                  <Select>
                    <Select.Option
                      key="can_add_printer_types"
                      value={appConfig.permissions.can_add_printer_types}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option
                      key="can_add_printer_types_denied"
                      value={false}
                    >
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  label="Can Edit Printer Types"
                  name={appConfig.permissions.can_edit_printer_types}
                >
                  <Select>
                    <Select.Option
                      key="can_edit_printer_types"
                      value={appConfig.permissions.can_edit_printer_types}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option
                      key="can_edit_printer_types_denied"
                      value={false}
                    >
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  label="Can Delete Printer Types"
                  name={appConfig.permissions.can_delete_printer_types}
                >
                  <Select>
                    <Select.Option
                      key="can_delete_printer_types"
                      value={appConfig.permissions.can_delete_printer_types}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option
                      key="can_delete_printer_types_denied"
                      value={false}
                    >
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  label="Can Approve Printer Types"
                  name={appConfig.permissions.can_approve_printer_types}
                >
                  <Select>
                    <Select.Option
                      key="can_approve_printer_types"
                      value={appConfig.permissions.can_approve_printer_types}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option
                      key="can_approve_printer_types_denied"
                      value={false}
                    >
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  label="Can Export Printer Types"
                  name={appConfig.permissions.can_export_printer_types}
                >
                  <Select>
                    <Select.Option
                      key="can_export_printer_types"
                      value={appConfig.permissions.can_export_printer_types}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option
                      key="can_export_printer_types_denied"
                      value={false}
                    >
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Space>
            </div>
            <div className=" m-2">
              <p className="m-0">Printers</p>
              <Space direction="vertical">
                <Form.Item
                  className="m-0 p-0"
                  label="Can View Printers"
                  name={appConfig.permissions.can_view_printers}
                >
                  <Select>
                    <Select.Option
                      key="can_view_printers"
                      value={appConfig.permissions.can_view_printers}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option key="can_view_printers_denied" value={false}>
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  label="Can Add Printer"
                  name={appConfig.permissions.can_add_printers}
                >
                  <Select>
                    <Select.Option
                      key="can_add_printers"
                      value={appConfig.permissions.can_add_printers}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option key="can_add_printers_denied" value={false}>
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  label="Can Edit Printer"
                  name={appConfig.permissions.can_edit_printers}
                >
                  <Select>
                    <Select.Option
                      key="can_edit_printers"
                      value={appConfig.permissions.can_edit_printers}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option key="can_edit_printers_denied" value={false}>
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  label="Can Delete Printer"
                  name={appConfig.permissions.can_delete_printers}
                >
                  <Select>
                    <Select.Option
                      key="can_delete_printers"
                      value={appConfig.permissions.can_delete_printers}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option
                      key="can_delete_printers_denied"
                      value={false}
                    >
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  label="Can Approve Printer"
                  name={appConfig.permissions.can_approve_printers}
                >
                  <Select>
                    <Select.Option
                      key="can_approve_printers"
                      value={appConfig.permissions.can_approve_printers}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option
                      key="can_approve_printers_denied"
                      value={false}
                    >
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  label="Can Export Printer"
                  name={appConfig.permissions.can_export_printers}
                >
                  <Select>
                    <Select.Option
                      key="can_export_printers"
                      value={appConfig.permissions.can_export_printers}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option
                      key="can_export_printers_denied"
                      value={false}
                    >
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Space>
            </div>
            <div className=" m-2">
              <p className="m-0">Print Outs</p>
              <Space direction="vertical">
                <Form.Item
                  className="m-0 p-0"
                  label="Can View Print Outs"
                  name={appConfig.permissions.can_view_print_outs}
                >
                  <Select>
                    <Select.Option
                      key="can_view_print_outs"
                      value={appConfig.permissions.can_view_print_outs}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option
                      key="can_view_print_outs_denied"
                      value={false}
                    >
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  label="Can Add Print Outs"
                  name={appConfig.permissions.can_add_print_outs}
                >
                  <Select>
                    <Select.Option
                      key="can_add_print_outs"
                      value={appConfig.permissions.can_add_print_outs}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option
                      key="can_add_print_outs_denied"
                      value={false}
                    >
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  label="Can Edit Print Outs"
                  name={appConfig.permissions.can_edit_print_outs}
                >
                  <Select>
                    <Select.Option
                      key="can_edit_print_outs"
                      value={appConfig.permissions.can_edit_print_outs}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option
                      key="can_edit_print_outs_denied"
                      value={false}
                    >
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  label="Can Delete Print Outs"
                  name={appConfig.permissions.can_delete_print_outs}
                >
                  <Select>
                    <Select.Option
                      key="can_delete_print_outs"
                      value={appConfig.permissions.can_delete_print_outs}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option
                      key="can_delete_print_outs_denied"
                      value={false}
                    >
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  label="Can Approve Print Outs"
                  name={appConfig.permissions.can_approve_print_outs}
                >
                  <Select>
                    <Select.Option
                      key="can_approve_print_outs"
                      value={appConfig.permissions.can_approve_print_outs}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option
                      key="can_approve_print_outs_denied"
                      value={false}
                    >
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  label="Can Export Print Outs"
                  name={appConfig.permissions.can_export_print_outs}
                >
                  <Select>
                    <Select.Option
                      key="can_approve_print_outs"
                      value={appConfig.permissions.can_export_print_outs}
                    >
                      Permission Granted
                    </Select.Option>
                    <Select.Option
                      key="can_export_print_outs_denied"
                      value={false}
                    >
                      Permission Denied
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Space>
            </div>
          </div>
          <Form.Item>
            <Button loading={editRolesLoading} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EditRoles;
