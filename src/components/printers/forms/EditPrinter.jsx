import { Modal, Form, Input, Button, message, Alert, Select } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { printerActions } from "../../../config/actions/printers/printers.actions";

const EditPrinter = ({ visible, handleCloseModal, handleEditRecord }) => {
  const {
    editPrintersLoading,
    editPrintersMessage,
    editPrintersSuccess,
    editPrintersError,
    printers,
    printersMetaData,
    editPrintersData,
  } = useSelector((state) => state.printersState);
  const dispatch = useDispatch();
  const fields = [
    { name: "name", value: editPrintersData.name },
    { name: "ip", value: editPrintersData.ip },
    { name: "location", value: editPrintersData.location },
    { name: "printer_type", value: editPrintersData.printer_type },
  ];
  const [form] = Form.useForm();
  const closeModal = () => {
    handleCloseModal(false);
  };
  const onFinish = (values) => {
    values.created_at = new Date();
    values.id = editPrintersData.id;
    const updateRecordArray = printers.filter(
      (r) => r.id !== editPrintersData.id
    );
    dispatch(printerActions.editPrintersData(values));
    handleEditRecord(values, updateRecordArray);
  };

  useEffect(() => {
    if (editPrintersSuccess && editPrintersMessage) {
      message.success(editPrintersMessage);
      handleCloseModal(false);
    }
  }, [editPrintersSuccess, editPrintersMessage, handleCloseModal]);
  return (
    <div>
      <Modal
        footer={null}
        title="EDIT PRINTER "
        onCancel={closeModal}
        visible={visible}
      >
        <Form fields={fields} form={form} onFinish={onFinish} layout="vertical">
          {!editPrintersSuccess && editPrintersError && (
            <Alert
              showIcon
              type="error"
              message={editPrintersError}
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
              loading={editPrintersLoading}
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

export default EditPrinter;
