import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useRelayEnvironment } from "relay-hooks";
import { color } from "../../common/color";
import AddReactionMutation from "./mutation/AddReactionMutation";
import { v4 as uuidv4 } from "uuid";
import LeaveUserMutation from "../../screen/Home/mutation/LeaveUserMutation";

function index({ options, questionText, totalAnswered, questionId }) {
  const [value, setValue] = React.useState(null);
  const environment = useRelayEnvironment();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const _vote = () => {
    if (!!value && value != "") {
      console.log({ value });
      AddReactionMutation.commit(environment, {
        answer: value,
        questionId: questionId,
        userId: localStorage.getItem("userId"),
        onCompleted: (res) => {
          console.log({ res });
        },
        onError: (error) => {
          console.log({ err: error });
        },
      });
    } else {
    }
  };

  return (
    <Box style={{ width: "100%" }}>
      {/* Question */}
      <Box>
        <Typography variant={"h5"}>{questionText}</Typography>
      </Box>
      <Box>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="a" control={<Radio />} label={options.a} />
          <FormControlLabel value="b" control={<Radio />} label={options.b} />
          <FormControlLabel value="c" control={<Radio />} label={options.c} />
          <FormControlLabel value="d" control={<Radio />} label={options.d} />
        </RadioGroup>
      </Box>

      <Box
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button variant={"contained"} color={"primary"} onClick={_vote}>
          Vote
        </Button>
        <Typography variant={"h5"}> Answered : {totalAnswered}</Typography>
      </Box>
    </Box>
  );
}

export default index;
