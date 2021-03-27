import { useEffect } from "react";
import { requestSubscription } from "relay-runtime";

const subscription = graphql`
  subscription useQuestionReactionSubscription($questionId: String!) {
    pollReaction(questionId: $questionId) {
      id
      questionId
      question
      options {
        a
        b
        c
        d
      }
      optionStatus {
        a
        b
        c
        d
      }
      totalAnswered
    }
  }
`;

export function useQuestionReactionSubscription({
  environment,
  questionId,
  onNext,
}) {
  useEffect(() => {
    const { dispose } = requestSubscription(environment, {
      subscription,
      variables: {
        questionId,
      },
      updater: (store) => {
        let rf = store.getRootField("pollReaction");
        let ops = rf.getLinkedRecord("optionStatus");
        let newOptionStatus = {};
        newOptionStatus["a"] = ops.getValue("a");
        newOptionStatus["b"] = ops.getValue("b");
        newOptionStatus["c"] = ops.getValue("c");
        newOptionStatus["d"] = ops.getValue("d");

        let newTotalAnswer = rf.getValue("totalAnswered");
        onNext(newOptionStatus, newTotalAnswer);
      },
      onError: (error) => console.log("Count Subscription error", error),
    });
    return dispose;
  }, [environment]);
}
