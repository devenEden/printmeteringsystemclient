import { Modal, Form, Input, Button, message, Alert, Select } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AddPrinter = ({ visible, handleCloseModal, handleAddRecord }) => {
  const {
    addPrintersLoading,
    addPrintersMessage,
    addPrintersSuccess,
    addPrintersError,
    printers,
    printersMetaData,
  } = useSelector((state) => state.printersState);
  const [form] = Form.useForm();
  const closeModal = () => {
    handleCloseModal(false);
  };
  const onFinish = (values) => {
    values.created_at = new Date();
    handleAddRecord(values, printers);
  };

  useEffect(() => {
    if (addPrintersSuccess && addPrintersMessage) {
      message.success(addPrintersMessage);
      form.resetFields();
    }
  }, [addPrintersSuccess, addPrintersMessage, form]);
  return (
    <div>
      <Modal
        footer={null}
        title="ADD PRINTER "
        onCancel={closeModal}
        visible={visible}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          {!addPrintersSuccess && addPrintersError && (
            <Alert
              showIcon
              type="error"
              message={addPrintersError}
              className="my-2"
            />
          )}
          <Form.Item
            label="Printer Name"
            name="name"
            rules={[{ required: true, message: "Please add a printer type" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Ip address"
            name="ip"
            rules={[{ required: true, message: "Please add an ip address" }]}
          >
            <Input className="w-100" />
          </Form.Item>
          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: "Please add a location" }]}
          >
            <Input className="w-100" />
          </Form.Item>
          <Form.Item
            label="Printer Type"
            name="printer_type"
            rules={[{ required: true, message: "Please add a printer type" }]}
          >
            <Select>
              {printersMetaData?.printerTypes?.map((type) => {
                return (
                  <Select.Option key={type.id} value={type.id}>
                    {type.name}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              loading={addPrintersLoading}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddPrinter;
