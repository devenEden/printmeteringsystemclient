import { Button, Input, Form, Alert } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const ResetPasswordForm = ({ handlePasswordReset }) => {
  const { loading, success, error } = useSelector(
    (state) => state.authState.resetPassword
  );
  const onFinish = (values) => {
    handlePasswordReset(values);
  };
  return (
    <div className="w-50">
      <h4>PRINT AND PHOTOCOPYING METERING SYSTEM </h4>
      <p>Reset Password</p>
      <Form onFinish={onFinish} className="text-start" layout="vertical">
        {!success && error && (
          <Alert showIcon message={error} type="error" className="m-2" />
        )}
        <Form.Item
          hasFeedback
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Please enter a password" },
            {
              min: 8,
              message: "Your password should have more than 8 characted ",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            loading={loading}
            className="w-100"
            type="primary"
          >
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ResetPasswordForm;
