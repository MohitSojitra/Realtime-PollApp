import React, { useState, useMemo, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box } from "@material-ui/core";
import { color } from "../../common/color";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useLiveCountSubscription } from "./subscription/useLiveCountSubscription";
import { useRelayEnvironment } from "relay-hooks";
import { useGetCountQuery } from "./hook/useGetCount";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: color.blue,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function index() {
  const classes = useStyles();
  const environment = useRelayEnvironment();
  const [count, setCount] = useState(0);
  const { count: initialCount } = useGetCountQuery();

  const onNext = (newCount) => {
    setCount(newCount);
  };
  useLiveCountSubscription(useMemo(() => ({ environment, onNext }), []));

  useEffect(() => {
    setCount(initialCount + 1);
  }, [initialCount]);

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Poll App
          </Typography>
          <Box style={{ display: "flex" }}>
            <VisibilityIcon />
            <Box style={{ width: "10px" }}></Box>
            <Typography varient="h6">{count}</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default index;
