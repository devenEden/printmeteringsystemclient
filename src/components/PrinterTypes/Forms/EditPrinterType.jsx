import { Modal, Form, Input, Button, InputNumber, message, Alert } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { printerTypeActions } from "../../../config/actions/printers/printerTypes.actions";

const EditPrinterType = ({ visible, handleCloseModal, handleEditRecord }) => {
  const {
    editPrinterTypesLoading,
    editPrinterTypesMessage,
    editPrinterTypesSuccess,
    editPrinterTypesError,
    printerTypes,
    editPrinterTypesData,
  } = useSelector((state) => state.printerTypesState);
  const dispatch = useDispatch();
  const closeModal = () => {
    handleCloseModal(false);
  };
  const onFinish = (values) => {
    values.update_at = new Date();
    dispatch(printerTypeActions.editPrinterTypesData(values));
    const updateRecordArray = printerTypes.filter(
      (r) => r.id !== editPrinterTypesData.id
    );
    values.id = editPrinterTypesData.id;
    handleEditRecord(values, updateRecordArray);
  };
  const fields = [
    { name: "name", value: editPrinterTypesData.name },
    { name: "unit_cost", value: parseInt(editPrinterTypesData.unit_cost) },
  ];
  useEffect(() => {
    if (editPrinterTypesMessage && editPrinterTypesSuccess) {
      message.success(editPrinterTypesMessage);
      handleCloseModal(false);
    }
  }, [editPrinterTypesSuccess, editPrinterTypesMessage, handleCloseModal]);
  console.log(editPrinterTypesSuccess, editPrinterTypesMessage);
  return (
    <div>
      <Modal
        footer={null}
        title="EDIT PRINTER TYPE"
        onCancel={closeModal}
        visible={visible}
      >
        <Form fields={fields} onFinish={onFinish} layout="vertical">
          {!editPrinterTypesSuccess && editPrinterTypesError && (
            <Alert
              showIcon
              type="error"
              message={editPrinterTypesError}
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
              loading={editPrinterTypesLoading}
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

export default EditPrinterType;
