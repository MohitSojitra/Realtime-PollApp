import { Box, CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import LeaveUserMutation from "../../screen/Home/mutation/LeaveUserMutation";
import QuestionItem from "../QuestionItem";
import useGetAllQuestion from "./hook/useGetAllQuestion";
function index() {
  // fetch all the Question

  const { questions } = useGetAllQuestion();

  if (!!questions) {
    return (
      <Box style={{ width: "100%", height: "100%" }}>
        <Box style={{ margin: "20px 10px" }}>
          {questions.map((question, i) => (
            <QuestionItem key={i} question={question} />
          ))}
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
}

export default index;
