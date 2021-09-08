import { Modal, Form, Button, message, Alert, Select, InputNumber } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { printOutActions } from "../../../config/actions/printers/printOuts.actions";

const EditPrintOut = ({ visible, handleCloseModal, handleEditRecord }) => {
  const {
    editPrintOutsLoading,
    editPrintOutsMessage,
    editPrintOutsSuccess,
    editPrintOutsError,
    editPrintOutsData,
  } = useSelector((state) => state.printOutsState);
  const { printersMetaData } = useSelector((state) => state.printersState);
  const dispatch = useDispatch();
  const fields = [
    { name: "print_outs", value: editPrintOutsData.print_outs },
    { name: "printer", value: editPrintOutsData.printer },
  ];
  const closeModal = () => {
    handleCloseModal(false);
  };
  const onFinish = (values) => {
    values.updated_at = new Date();
    values.id = editPrintOutsData.id;
    dispatch(printOutActions.editPrintOutsData(values));
    handleEditRecord(values, []);
  };

  useEffect(() => {
    if (editPrintOutsSuccess && editPrintOutsMessage) {
      message.success(editPrintOutsMessage);
      handleCloseModal(false);
    }
  }, [editPrintOutsSuccess, editPrintOutsMessage, handleCloseModal]);
  return (
    <div>
      <Modal
        footer={null}
        title="EDIT PRINT OUT "
        onCancel={closeModal}
        visible={visible}
      >
        <Form fields={fields} onFinish={onFinish} layout="vertical">
          {!editPrintOutsSuccess && editPrintOutsError && (
            <Alert
              showIcon
              type="error"
              message={editPrintOutsError}
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
              loading={editPrintOutsLoading}
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

export default EditPrintOut;
