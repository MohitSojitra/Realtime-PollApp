import { commitMutation, graphql } from "react-relay";

const mutation = graphql`
  mutation AddQuestionMutation($input: addQuestionInput!) {
    addQuestion(input: $input) {
      success
    }
  }
`;

const commit = (
  environment,
  { question, options, auth, onCompleted, onError }
) => {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        question,
        options,
        auth,
      },
    },
    onCompleted,
    onError,
  });
};

export default { commit };
