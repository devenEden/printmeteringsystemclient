import { message } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useHistory } from "react-router";
import { getAuthToken, removeAuthToken } from "../../config/helpers/authToken";
import routes from "../../config/routes/routes";
import authThunks from "../../config/thunks/auth/auth.thunks";
import { Layout } from "antd";
import AppSider from "../../components/Shared/Sider";
import AppHeader from "../../components/Shared/AppHeader";
import PageNotFound from "./App/404";
import { Switch } from "react-router-dom";

const { Content, Footer } = Layout;

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
            <Switch>
              <Route
                exact
                path={routes.dashboard.path}
                component={routes.dashboard.component}
              />
              <Route
                exact
                path={routes.roles.path}
                component={routes.roles.component}
              />
              <Route
                exact
                path={routes.printers.path}
                component={routes.printers.component}
              />
              <Route>
                <PageNotFound />
              </Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Printer Tracker System &copy; 2021
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
