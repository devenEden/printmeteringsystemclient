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
import { Link } from "react-router-dom";
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
      collapsible
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        const mainContainer = document.getElementById("main-container");
        console.log(mainContainer.clientWidth);
        if (collapsed && mainContainer.clientWidth < 300) {
          mainContainer.classList.remove("d-none");
        } else if (!collapsed && mainContainer.clientWidth < 300)
          mainContainer.classList.add("d-none");
      }}
    >
      <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]}>
        <h4 className="text-center m-3 mb-4">Printer Tracker</h4>
        <Menu.Item icon={<AiOutlineDesktop />} key="1">
          <Link to={routes.dashboard.path}>DashBoard</Link>
        </Menu.Item>
        <Menu.Item icon={<AiFillPrinter />}>Printers</Menu.Item>
        <Menu.Item icon={<AiOutlineUser />}>Users</Menu.Item>
        <Menu.Item icon={<AiFillLayout />}>
          <Link to={routes.roles.path}>Roles</Link>
        </Menu.Item>
        <Menu.Item onClick={logoutUser} icon={<AiOutlineLogout />}>
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AppSider;
