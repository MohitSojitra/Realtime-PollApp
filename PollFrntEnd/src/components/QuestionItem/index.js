import { Box, Grid } from "@material-ui/core";
import React, { useState, useMemo, useEffect } from "react";
import Question from "../Question";
import ChartOfAnswer from "../ChartOfAnswer";
import { useQuestionReactionSubscription } from "./subscription/useQuestionReactionSubscription";
import { useRelayEnvironment } from "relay-hooks";
import LeaveUserMutation from "../../screen/Home/mutation/LeaveUserMutation";
function index({ question }) {
  const [optionStatus, setOptionStatus] = useState({
    ...question.optionStatus,
  });

  const [totalAnswer, setTotalAnswer] = useState(question.totalAnswered);

  const environment = useRelayEnvironment();
  const onNext = (newOptionStatus, newTotalAnswer) => {
    // console.log({ newOptionStatus });
    setOptionStatus({ ...newOptionStatus });
    setTotalAnswer(newTotalAnswer);
  };
  useQuestionReactionSubscription(
    useMemo(
      () => ({ environment, questionId: question.questionId, onNext }),
      []
    )
  );

  console.log({ optionStatus });
  return (
    <>
      <Grid
        container
        xs={12}
        spacing={2}
        style={{ border: "2px solid", margin: "10px" }}
      >
        <Grid item md={6}>
          <Question
            options={question.options}
            questionText={question.question}
            totalAnswered={totalAnswer}
            questionId={question.questionId}
          />
        </Grid>
        <Grid item md={6}>
          <ChartOfAnswer optionStatus={optionStatus} />
        </Grid>
      </Grid>
    </>
  );
}

export default index;
