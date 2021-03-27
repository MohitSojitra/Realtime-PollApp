import React, { useState } from "react";
// import LoginMutation from "./mutation/LoginMutation";

import { useRelayEnvironment } from "relay-hooks";
import { useHistory } from "react-router-dom";
import { color } from "../../common/color";
import { env } from "../../../Env";
import { Button } from "@material-ui/core";
import AddQuestionMutation from "./mutation/AddQuestionMutation";

function index() {
  const [question, setQuestion] = useState("");

  const [op1, setOp1] = useState("");
  const [op2, setOp2] = useState("");
  const [op3, setOp3] = useState("");
  const [op4, setOp4] = useState("");
  let history = useHistory();

  const environment = useRelayEnvironment();

  const initialState = () => {
    setQuestion("");
    setOp1("");
    setOp2("");
    setOp3("");
    setOp4("");
  };

  const _submit = (e) => {
    if (
      question.length <= 0 ||
      op1.length <= 0 ||
      op2.length <= 0 ||
      op3.length <= 0 ||
      op4.length <= 0
    ) {
      alert("make sure no one feild empty!!");
    } else {
      AddQuestionMutation.commit(environment, {
        auth: {
          userName: env.userName,
          password: env.password,
          secret: env.secret,
        },
        options: {
          a: op1,
          b: op2,
          c: op3,
          d: op4,
        },
        question: question,
        onCompleted: ({ addQuestion }) => {
          if (!!addQuestion.success) {
            initialState();
            alert("sucessfully added");
          } else {
            console.log({ addQuestion });
            initialState();
            alert("something wrong!!");
          }
        },
        onError: (e) => {
          console.log({ err: e });
          alert("something wrong!!");
          initialState();
        },
      });
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
        <h1>Add Question</h1>
        <form onSubmit={_submit}>
          <label>Question:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter a Question"
            style={{ width: "400px", padding: "10px", borderRadius: "10px" }}
          />
          <br />
          <br />
          <br />
          <label>Options 1:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={op1}
            placeholder={"Option 1"}
            onChange={(e) => setOp1(e.target.value)}
            style={{ width: "400px", padding: "10px", borderRadius: "10px" }}
          />
          <br />
          <br />
          <label>Options 2:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={op2}
            placeholder={"Option 2"}
            onChange={(e) => setOp2(e.target.value)}
            style={{ width: "400px", padding: "10px", borderRadius: "10px" }}
          />
          <br />
          <br />
          <label>Options 3:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={op3}
            placeholder={"Option 3"}
            onChange={(e) => setOp3(e.target.value)}
            style={{ width: "400px", padding: "10px", borderRadius: "10px" }}
          />
          <br />
          <br />
          <label>Options 4:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={op4}
            placeholder={"Option 4"}
            onChange={(e) => setOp4(e.target.value)}
            style={{ width: "400px", padding: "10px", borderRadius: "10px" }}
          />
          <br />
          <br />
          <br />
          <br />
          <Button variant="contained" color="secondary" onClick={_submit}>
            Add Question
          </Button>
        </form>
      </div>
    </div>
  );
}

export default index;
