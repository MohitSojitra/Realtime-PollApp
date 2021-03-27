import { Box, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import PollAppBar from "../../components/PollAppBar";
import FeedContainer from "../../components/FeedContainer";
import addUserMutation from "./mutation/addUserMutation";
import { useRelayEnvironment } from "relay-hooks";
import LeaveUserMutation from "./mutation/LeaveUserMutation";
import { env } from "../../../Env";
import { v4 as uuidv4 } from "uuid";
import useBeforeUnload from "use-before-unload";

function index() {
  const environment = useRelayEnvironment();
  useBeforeUnload((evt) => {
    _leave();
    /* Do some checks here if you like */
    return true; // Suppress reload
  });

  const _leave = () => {
    LeaveUserMutation.commit(environment, {
      userName: env.userName,
      onCompleted: (res) => {
        console.log({ res });
      },
      onError: (err) => {
        console.log({ err });
      },
    });
    return "";
  };

  useEffect(() => {
    addUserMutation.commit(environment, {
      userName: env.userName,
      onCompleted: (res) => {
        localStorage.clear();
        localStorage.setItem("userId", res.userEnterSite.userId);
      },
      onError: (error) => {
        console.log({ err: error });
      },
    });
  }, []);
  return (
    <Box style={{ border: "" }}>
      {/* app bar */}
      <Box>
        <PollAppBar />
      </Box>

      {/* main content container */}
      <Box>
        <FeedContainer />
      </Box>
    </Box>
  );
}

export default index;
