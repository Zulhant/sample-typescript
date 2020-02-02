import React from "react";
import { Route } from "react-router-dom";
import SidebarApp from "../components/sidebar";

import routes from "../routes";

const AppMiddleware = () => {
  let loginStatus = true;

  if (loginStatus) {
    return (
      <SidebarApp>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} component={route.component} />
        ))}
      </SidebarApp>
    );
  } else {
    return <div>Halaman Login</div>;
  }
};

export default AppMiddleware;
