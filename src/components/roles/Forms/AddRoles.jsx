import {
  Form,
  Input,
  Modal,
  Button,
  Space,
  Checkbox,
  Alert,
  message,
} from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import appConfig from "../../../config/config.json";

const AddRoles = ({ visible, handleCloseModal, handleAddRecord }) => {
  /*  */
  const [form] = Form.useForm();
  const {
    addRolesLoading,
    addRolesMessage,
    addRolesSuccess,
    addRolesError,
    roles,
  } = useSelector((state) => state.rolesState);
  const closeModal = () => {
    handleCloseModal(false);
  };
  const onFinish = (values) => {
    const roleBefore = values.role;
    for (const key in values) {
      if (Object.hasOwnProperty.call(values, key)) {
        if (values[key]) values[key] = key;
        if (!values[key]) delete values[key];
      }
    }
    values.created_at = new Date();
    values.role = roleBefore;
    handleAddRecord(values, roles);
  };
  useEffect(() => {
    if (addRolesMessage && addRolesSuccess) {
      message.success(addRolesMessage);
      form.resetFields();
    }
  }, [addRolesSuccess, addRolesMessage, form]);
  return (
    <div>
      <Modal
        width={1000}
        footer={null}
        title="Add Role"
        onCancel={closeModal}
        visible={visible}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          {!addRolesSuccess && addRolesError && (
            <Alert
              showIcon
              type="error"
              message={addRolesError}
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
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_view_roles}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can View
                    Roles
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_add_roles}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Add
                    Roles
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_edit_roles}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Edit
                    Roles
                  </Space>
                </Form.Item>
                <Form.Item name={"deleteroles"} className="mb-0">
                  <Form.Item
                    className="m-0 p-0"
                    valuePropName="checked"
                    name={appConfig.permissions.can_delete_roles}
                  >
                    <Space direction="horizontal">
                      <Checkbox value={true} defaultChecked={false} /> Can
                      Delete Roles
                    </Space>
                  </Form.Item>
                </Form.Item>
                <Form.Item name={"approveroles"} className="mb-0">
                  <Form.Item
                    className="m-0 p-0"
                    valuePropName="checked"
                    name={appConfig.permissions.can_approve_roles}
                  >
                    <Space direction="horizontal">
                      <Checkbox value={true} defaultChecked={false} /> Can
                      Approve Roles
                    </Space>
                  </Form.Item>
                </Form.Item>
              </Space>
            </div>
            <div className=" m-2">
              <p className="m-0">Users</p>
              <Space direction="vertical">
                <Form.Item name={"viewusers"} className="mb-0">
                  <Form.Item
                    className="m-0 p-0"
                    valuePropName="checked"
                    name={appConfig.permissions.can_view_users}
                  >
                    <Space direction="horizontal">
                      <Checkbox value={true} defaultChecked={false} /> Can View
                      Users
                    </Space>
                  </Form.Item>
                </Form.Item>
                <Form.Item name={"addusers"} className="mb-0">
                  <Form.Item
                    className="m-0 p-0"
                    valuePropName="checked"
                    name={appConfig.permissions.can_add_users}
                  >
                    <Space direction="horizontal">
                      <Checkbox value={true} defaultChecked={false} /> Can Add
                      Users
                    </Space>
                  </Form.Item>
                </Form.Item>
                <Form.Item name={"deleteusers"} className="mb-0">
                  <Form.Item
                    className="m-0 p-0"
                    valuePropName="checked"
                    name={appConfig.permissions.can_delete_users}
                  >
                    <Space direction="horizontal">
                      <Checkbox value={true} defaultChecked={false} /> Can
                      Delete Users
                    </Space>
                  </Form.Item>
                </Form.Item>
                <p className="m-0">Billing</p>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  label="Can View Billing"
                  name={appConfig.permissions.can_view_billing}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can View
                    Billing
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  label="Can Export Billing"
                  name={appConfig.permissions.can_export_billing}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Export
                    Billing
                  </Space>
                </Form.Item>
              </Space>
            </div>
            <div className=" m-2">
              <p className="m-0">Printer Types</p>
              <Space direction="vertical">
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_view_printer_types}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can View
                    Printer Types
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_add_printer_types}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Add
                    Printer Types
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_edit_printer_types}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Edit
                    Printer Types
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_delete_printer_types}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Delete
                    Printer Types
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_approve_printer_types}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Approve
                    Printer Types
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_export_printer_types}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Export
                    Printer Types
                  </Space>
                </Form.Item>
              </Space>
            </div>
            <div className=" m-2">
              <p className="m-0">Printers</p>
              <Space direction="vertical">
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_view_printers}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can View
                    Printers
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_add_printers}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Add
                    Printers
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_edit_printers}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Edit
                    Printers
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_delete_printers}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Delete
                    Printers
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_approve_printers}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Approve
                    Printers
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_export_printers}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Export
                    Printers
                  </Space>
                </Form.Item>
              </Space>
            </div>
            <div className=" m-2">
              <p className="m-0">Print Outs</p>
              <Space direction="vertical">
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_view_print_outs}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can View
                    Print Outs
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_add_print_outs}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Add
                    Print Outs
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_edit_print_outs}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Edit
                    Print Outs
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_delete_print_outs}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Delete
                    Print Outs
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_approve_print_outs}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Approve
                    Print Outs
                  </Space>
                </Form.Item>
                <Form.Item
                  className="m-0 p-0"
                  valuePropName="checked"
                  name={appConfig.permissions.can_export_print_outs}
                >
                  <Space direction="horizontal">
                    <Checkbox value={true} defaultChecked={false} /> Can Export
                    Print Outs
                  </Space>
                </Form.Item>
              </Space>
            </div>
          </div>
          <Form.Item>
            <Button loading={addRolesLoading} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddRoles;
