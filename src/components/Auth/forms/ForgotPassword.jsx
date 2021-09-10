import React from "react";
import { Form, Modal, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FcHighPriority } from "react-icons/fc";
import { authActions } from "../../../config/actions/auth.actions";

const ForgotPasswordForm = ({
  handleForgotPassword,
  visible,
  handleCloseModal,
}) => {
  const { loading, success, error } = useSelector(
    (state) => state.authState.forgotPassword
  );
  const dispatch = useDispatch();

  const closeModal = () => {
    handleCloseModal(false);
  };

  const onFinish = (values) => {
    dispatch(authActions.forgotPasswordRequest());
    handleForgotPassword(values);
  };
  return (
    <div>
      <Modal
        footer={null}
        onCancel={closeModal}
        visible={visible}
        title="FORGOT PASSWORD"
      >
        {!success && error && (
          <div className="alert alert-danger">
            <FcHighPriority /> &nbsp; {error}
          </div>
        )}
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              {
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Button htmlType="submit" loading={loading} type="primary">
            SUBMIT
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default ForgotPasswordForm;
