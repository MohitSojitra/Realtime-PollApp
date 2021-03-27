import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { color } from "../../common/color";

function index() {
  let history = useHistory();
  const style = {
    backgroundColor: color.blue,
    color: color.white,
    padding: "5px",
    borderRadius: "10px",
  };
  return (
    <Box
      style={{
        height: "100vh",
        width: "100%",
        background: "linear-gradient(rgba(35,71,149,0.5),transparent)",
        display: "flex",

        flexDirection: "column",
      }}
    >
      <Box style={{ alignSelf: "center" }}>
        <Typography variant={"h2"} style={{ fontWeight: "bold" }}>
          Documentation
        </Typography>
      </Box>

      <Box style={{ margin: "40px 20px" }}>
        <Typography variant={"h4"} style={{ fontWeight: "bold" }}>
          Key Featue :
        </Typography>
      </Box>
      <Box
        style={{
          margin: "10px 40px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography style={{ fontSize: "36px" }}>1.</Typography>
        <Typography style={{ marginLeft: "20px", fontSize: "30px" }}>
          {" "}
          Admin can <span style={style}>create Poll or Question.</span>
        </Typography>
      </Box>
      <Box
        style={{
          margin: "10px 40px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography style={{ fontSize: "36px" }}>2.</Typography>
        <Typography style={{ marginLeft: "20px", fontSize: "30px" }}>
          {" "}
          Audience <span style={style}>vote</span> the option or{" "}
          <span style={style}>answer</span> the question.
        </Typography>
      </Box>
      <Box
        style={{
          margin: "10px 40px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography style={{ fontSize: "36px" }}>3.</Typography>
        <Typography style={{ marginLeft: "20px", fontSize: "30px" }}>
          {" "}
          <span style={style}>Realtime</span> show{" "}
          <span style={style}>online user</span>.
        </Typography>
      </Box>
      <Box
        style={{
          margin: "10px 40px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography style={{ fontSize: "36px" }}>4.</Typography>
        <Typography style={{ marginLeft: "20px", fontSize: "30px" }}>
          {" "}
          <span style={style}>Realtime</span> show{" "}
          <span style={style}>No Of User Answer</span> the Poll or Question.
        </Typography>
      </Box>
      <Box
        style={{
          margin: "10px 40px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography style={{ fontSize: "36px" }}>5.</Typography>
        <Typography style={{ marginLeft: "20px", fontSize: "30px" }}>
          {" "}
          <span style={style}>Live Chart</span> show of the poll answered.
        </Typography>
      </Box>

      <Box
        style={{
          margin: "10px 40px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography style={{ fontSize: "36px" }}>6.</Typography>
        <Typography style={{ marginLeft: "20px", fontSize: "30px" }}>
          {" "}
          User can <span style={style}>Edit Response</span> with{" "}
          <span style={style}>Realtime Chart</span>
        </Typography>
      </Box>

      <Box
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        <Button
          variant={"contained"}
          color={"primary"}
          onClick={() => history.push("/login")}
        >
          Login To Create Question
        </Button>
        <Button
          variant={"contained"}
          color={"primary"}
          onClick={() => history.push("/home")}
        >
          Poll Page
        </Button>
      </Box>
    </Box>
  );
}

export default index;
