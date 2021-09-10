import { Alert, Button, message, Modal, Upload, Form } from "antd";
import React, { useEffect } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const ImportPrintOuts = ({ visible, handleImportPrints, handlCloseModal }) => {
  const {
    importPrintOutsError,
    importPrintOutsSuccess,
    importPrintOutsLoading,
  } = useSelector((state) => state.printOutsState);
  const closeModal = () => handlCloseModal(false);
  const onFinish = (values) => {
    values.createdAt = new Date();
    const formData = new FormData();
    formData.append("excelFile", values.excelFile.file.originFileObj);
    handleImportPrints(formData);
  };
  useEffect(() => {
    if (importPrintOutsSuccess) message.success("Sucessfully imported file");
  }, [importPrintOutsSuccess]);
  return (
    <div>
      <Modal
        onCancel={closeModal}
        visible={visible}
        title="IMPORT PRINTS"
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish}>
          {!importPrintOutsSuccess && importPrintOutsError && (
            <Alert
              showIcon
              type="error"
              message={importPrintOutsError}
              className="m-2"
            />
          )}
          <Form.Item
            name="excelFile"
            rules={[{ required: true, message: "Please add a file" }]}
          >
            <Upload.Dragger name="file" listType={null} maxCount={1}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item>
            <Button
              className={"w-100"}
              loading={importPrintOutsLoading}
              htmlType="submit"
              type="primary"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ImportPrintOuts;
