import { Modal, Form, Button, message, Alert, Select, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../config/actions/users/users.actions";

const EditUser = ({ visible, handleCloseModal, handleEditRecord }) => {
  const {
    editUsersLoading,
    editUsersMessage,
    editUsersSuccess,
    editUsersError,
    users,
    usersMetaData,
    editUsersData,
  } = useSelector((state) => state.usersState);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const closeModal = () => {
    handleCloseModal(false);
  };
  const onFinish = (values) => {
    values.updated_at = new Date();
    values.id = editUsersData.id;
    dispatch(userActions.editUsersData(values));
    const usersArray = users.filter((r) => r.id !== editUsersData.id);
    console.log("====================================");
    console.log(values);
    console.log("====================================");
    handleEditRecord(values, usersArray);
  };
  useEffect(() => {
    if (editUsersSuccess && editUsersMessage) {
      message.success(editUsersMessage);
      handleCloseModal(false);
    }
  }, [editUsersSuccess, editUsersMessage, handleCloseModal]);
  const fields = [
    { name: "first_name", value: editUsersData.first_name },
    { name: "other_names", value: editUsersData.other_names },
    { name: "role", value: editUsersData.role },
    { name: "email", value: editUsersData.email },
  ];
  console.log("====================================");
  console.log(editUsersData.email);
  console.log("====================================");
  return (
    <div>
      <Modal
        footer={null}
        title="EDIT USER INFO "
        onCancel={closeModal}
        visible={visible}
      >
        <Form fields={fields} form={form} onFinish={onFinish} layout="vertical">
          {!editUsersSuccess && editUsersError && (
            <Alert
              showIcon
              type="error"
              message={editUsersError}
              className="my-2"
            />
          )}
          <Form.Item
            label="First Name"
            name="first_name"
            rules={[{ required: true, message: "Please add a printer type" }]}
          >
            <Input className="w-100" />
          </Form.Item>
          <Form.Item
            label="Other Names"
            name="other_names"
            rules={[{ required: true, message: "Please add Other Names" }]}
          >
            <Input className="w-100" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please add an email" },
              {
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please select a role" }]}
          >
            <Select>
              {usersMetaData?.roles?.map((type) => {
                return (
                  <Select.Option key={type.id} value={type.id}>
                    {type.name}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button loading={editUsersLoading} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EditUser;
