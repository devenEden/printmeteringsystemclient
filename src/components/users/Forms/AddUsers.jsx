import { Modal, Form, Button, message, Alert, Select, Input } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AddUser = ({ visible, handleCloseModal, handleAddRecord }) => {
  const {
    addUsersLoading,
    addUsersMessage,
    addUsersSuccess,
    addUsersError,
    users,
    usersMetaData,
  } = useSelector((state) => state.usersState);
  const [form] = Form.useForm();
  const closeModal = () => {
    handleCloseModal(false);
  };
  const onFinish = (values) => {
    values.created_at = new Date();
    handleAddRecord(values, users);
  };
  console.log("====================================");
  console.log(usersMetaData);
  console.log("====================================");
  useEffect(() => {
    if (addUsersSuccess && addUsersMessage) {
      message.success(addUsersMessage);
      form.resetFields();
    }
  }, [addUsersSuccess, addUsersMessage, form]);
  return (
    <div>
      <Modal
        footer={null}
        title="ADD USER "
        onCancel={closeModal}
        visible={visible}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          {!addUsersSuccess && addUsersError && (
            <Alert
              showIcon
              type="error"
              message={addUsersError}
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
            <Input className="w-100" />
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
            <Button loading={addUsersLoading} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddUser;
