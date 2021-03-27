import { commitMutation, graphql } from "react-relay";

const mutation = graphql`
  mutation LeaveUserMutation($input: userLeaveSiteInput!) {
    userLeaveSite(input: $input) {
      success
    }
  }
`;

const commit = (environment, { userName, onCompleted, onError }) => {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        userName,
      },
    },
    onCompleted,
    onError,
  });
};

export default { commit };
