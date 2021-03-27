import React, { useState } from "react";
// import LoginMutation from "./mutation/LoginMutation";

import { useRelayEnvironment } from "relay-hooks";
import { useHistory } from "react-router-dom";
import { color } from "../../common/color";
import { env } from "../../../Env";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const _submit = (e) => {
    if (username == env.userName && password == env.password) {
      localStorage.setItem(env.localStorageKey, true);
      history.push("/addQuestion");
    } else {
      alert("invalid credential");
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.blue,
        color: color.white,
      }}
    >
      <div>
        <h1>Login</h1>
        <form onSubmit={_submit}>
          <label>email:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label>password:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
