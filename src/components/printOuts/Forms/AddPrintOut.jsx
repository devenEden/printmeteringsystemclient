import { Modal, Form, Button, message, Alert, Select, InputNumber } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AddPrintOut = ({ visible, handleCloseModal, handleAddRecord }) => {
  const {
    addPrintOutsLoading,
    addPrintOutsMessage,
    addPrintOutsSuccess,
    addPrintOutsError,
    printOuts,
  } = useSelector((state) => state.printOutsState);
  const { printersMetaData } = useSelector((state) => state.printersState);
  const [form] = Form.useForm();
  const closeModal = () => {
    handleCloseModal(false);
  };
  const onFinish = (values) => {
    values.created_at = new Date();
    handleAddRecord(values, printOuts);
  };

  useEffect(() => {
    if (addPrintOutsSuccess && addPrintOutsMessage) {
      message.success(addPrintOutsMessage);
      form.resetFields();
    }
  }, [addPrintOutsSuccess, addPrintOutsMessage, form]);
  return (
    <div>
      <Modal
        footer={null}
        title="ADD PRINT OUT "
        onCancel={closeModal}
        visible={visible}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          {!addPrintOutsSuccess && addPrintOutsError && (
            <Alert
              showIcon
              type="error"
              message={addPrintOutsError}
              className="my-2"
            />
          )}
          <Form.Item
            label="Print Outs"
            name="print_outs"
            rules={[{ required: true, message: "Please add a printer type" }]}
          >
            <InputNumber className="w-100" />
          </Form.Item>
          <Form.Item
            label="Printer"
            name="printer"
            rules={[{ required: true, message: "Please add a printer type" }]}
          >
            <Select>
              {printersMetaData?.printers?.map((type) => {
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
              loading={addPrintOutsLoading}
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

export default AddPrintOut;
