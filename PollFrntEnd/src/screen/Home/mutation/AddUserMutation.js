import { commitMutation, graphql } from "react-relay";

const mutation = graphql`
  mutation AddUserMutation($input: userEnterSiteInput!) {
    userEnterSite(input: $input) {
      success
      userId
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
