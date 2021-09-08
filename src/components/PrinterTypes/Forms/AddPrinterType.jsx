import { Modal, Form, Input, Button, InputNumber, message, Alert } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AddPrinterType = ({ visible, handleCloseModal, handleAddRecord }) => {
  const {
    addPrinterTypesLoading,
    addPrinterTypesMessage,
    addPrinterTypesSuccess,
    addPrinterTypesError,
    printerTypes,
  } = useSelector((state) => state.printerTypesState);
  const [form] = Form.useForm();
  const closeModal = () => {
    handleCloseModal(false);
  };
  const onFinish = (values) => {
    values.created_at = new Date();

    handleAddRecord(values, printerTypes);
  };
  console.log();
  useEffect(() => {
    if (addPrinterTypesMessage && addPrinterTypesSuccess) {
      message.success(addPrinterTypesMessage);
      form.resetFields();
    }
  }, [addPrinterTypesSuccess, addPrinterTypesMessage, form]);
  return (
    <div>
      <Modal
        footer={null}
        title="ADD PRINTER TYPE"
        onCancel={closeModal}
        visible={visible}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          {!addPrinterTypesSuccess && addPrinterTypesError && (
            <Alert
              showIcon
              type="error"
              message={addPrinterTypesError}
              className="my-2"
            />
          )}
          <Form.Item
            label="Printer Type"
            name="name"
            rules={[{ required: true, message: "Please add a printer type" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Unit Cost"
            name="unit_cost"
            rules={[{ required: true, message: "Please add a unit cost" }]}
          >
            <InputNumber className="w-100" />
          </Form.Item>
          <Form.Item>
            <Button
              loading={addPrinterTypesLoading}
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

export default AddPrinterType;
