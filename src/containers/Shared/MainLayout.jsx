import { message } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getAuthToken, removeAuthToken } from "../../config/helpers/authToken";
import routes from "../../config/routes/routes";
import authThunks from "../../config/thunks/auth/auth.thunks";
import { Layout } from "antd";
import AppSider from "../../components/Shared/Sider";
import AppHeader from "../../components/Shared/AppHeader";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const { authenticated, authenticateUser } = useSelector(
    (state) => state.authState
  );
  const history = useHistory();
  const authToken = getAuthToken();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!navigator.onLine) {
      message.error("There semes to be a connection problem");
    }
    dispatch(authThunks.authenticateUser());
  }, [dispatch]);
  const { path } = routes.authentication.login;
  useEffect(() => {
    if (!authToken) history.push(path);
    else if (!authenticated && authenticateUser.error) {
      message.error(authenticateUser.error);
      removeAuthToken();
      history.push("/login");
    }
  }, [authenticated, authenticateUser, authToken, history, path]);
  return (
    <div>
      <Layout className="min-vh-100">
        <AppSider />
        <Layout>
          <AppHeader />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
