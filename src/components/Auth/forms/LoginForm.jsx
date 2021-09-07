import { Form, Input, Button, Alert } from "antd";
import { useSelector } from "react-redux";

const LoginForm = ({ handleLogin }) => {
  const { loginLoading, loginSuccess, loginError } = useSelector(
    (state) => state.authState
  );
  const onFinish = (values) => {
    handleLogin(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-50">
      <Form
        className="border rounded p-2 shadow "
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h3 className="text-secondary text-center mt-3">
          Printer Tracker System
        </h3>
        {loginError && !loginSuccess && (
          <Alert showIcon message={loginError} className="my-2" type="error" />
        )}
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            { min: 8, message: "Password should be less than 8 characters" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Button type="text">Forgot Password ?</Button>
        </Form.Item>

        <Form.Item>
          <Button
            loading={loginLoading}
            className="w-100"
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginForm;
