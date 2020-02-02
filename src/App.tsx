import React from "react";
import Middeware from "./middlewares";
import { HashRouter, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Middeware />
      </Switch>
    </HashRouter>
  );
};

export default React.memo(App);
