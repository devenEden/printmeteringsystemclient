import { Menu, Layout } from "antd";
import React from "react";
import {
  AiFillLayout,
  AiFillPrinter,
  AiOutlineDesktop,
  AiOutlineLogout,
  AiOutlineUser,
} from "react-icons/ai";
import { useHistory } from "react-router";
import { removeAuthToken } from "../../config/helpers/authToken";
import routes from "../../config/routes/routes";

const { Sider } = Layout;

const AppSider = () => {
  const history = useHistory();
  const logoutUser = () => {
    removeAuthToken();
    history.push(routes.authentication.login.path);
  };
  return (
    <Sider
      theme="light"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]}>
        <h4 className="text-center m-3 mb-4">Printer Tracker</h4>
        <Menu.Item icon={<AiOutlineDesktop />} key="1">
          DashBoard
        </Menu.Item>
        <Menu.Item icon={<AiFillPrinter />}>Printers</Menu.Item>
        <Menu.Item icon={<AiOutlineUser />}>Users</Menu.Item>
        <Menu.Item icon={<AiFillLayout />}>Roles</Menu.Item>
        <Menu.Item onClick={logoutUser} icon={<AiOutlineLogout />}>
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AppSider;
