import React, { useState, useEffect } from "react";
import { RelayEnvironmentProvider } from "relay-hooks";
import Environment from "./Environment";

import { EnvironmentContext } from "./EnviromentContext";
import { BrowserRouter, Route, Link } from "react-router-dom";

// Component Import
import Home from "./screen/Home";
import Login from "./screen/Login";
import { env } from "../Env";
import AddQuestion from "./screen/AddQuestion";
import MainScreen from "./screen/MainScreen";
import LeaveUserMutation from "./screen/Home/mutation/LeaveUserMutation";

//End of component Import

const App = () => {
  const [environment, setEnvironment] = useState(
    Environment.getEnvironment(() => {
      location.reload();
    })
  );

  return (
    <EnvironmentContext.Provider
      value={{
        environment,
        setEnvironment,
      }}
    >
      <RelayEnvironmentProvider environment={environment}>
        <BrowserRouter>
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          {/* Private Route */}
          <Route
            exact
            path="/addQuestion"
            render={() => {
              if (localStorage.getItem(env.localStorageKey)) {
                return <AddQuestion />;
              } else {
                return <h1>Not Authenticated</h1>;
              }
            }}
          />
        </BrowserRouter>
      </RelayEnvironmentProvider>
    </EnvironmentContext.Provider>
  );
};
export default App;
