import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes/routes";
import PageNotFound from "./containers/Shared/App/404";
import MainLayout from "./containers/Shared/MainLayout";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path={routes.authentication.login.path}
            component={routes.authentication.login.component}
          />
          <Route
            exact
            path={routes.authentication.resetPassword.path}
            component={routes.authentication.resetPassword.component}
          />
          <Route
            exact
            path={routes.authentication.confirmAccount.path}
            component={routes.authentication.confirmAccount.component}
          />
          <Route path="/" component={MainLayout} />
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
