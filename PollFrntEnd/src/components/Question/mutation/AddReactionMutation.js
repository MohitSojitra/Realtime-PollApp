import { commitMutation, graphql } from "react-relay";

const mutation = graphql`
  mutation AddReactionMutation($input: addReactionInput!) {
    addReaction(input: $input) {
      success
    }
  }
`;

const commit = (
  environment,
  { questionId, answer, userId, onCompleted, onError }
) => {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        questionId,
        answer,
        userId,
      },
    },
    onCompleted,
    onError,
  });
};

export default { commit };
