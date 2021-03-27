import { Box, Container } from "@material-ui/core";
import React, { useEffect } from "react";
import LeaveUserMutation from "../../screen/Home/mutation/LeaveUserMutation";
import QuestionContainer from "../QuestionContainer";
function index() {
  return (
    <Box>
      <Container>
        <QuestionContainer />
      </Container>
    </Box>
  );
}

export default index;
