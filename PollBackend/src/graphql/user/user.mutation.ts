import { GraphQLBoolean, GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { Context } from "../../context";
import { v4 as uuidv4 } from "uuid";

/**
 * initaily set password
 * It's perform only onetime when any one clone this project. he/she call this mutation
 */
const GraphQLInitialSetPasswordMutations = mutationWithClientMutationId({
  name: "setInitialUserNamePassword",
  inputFields: {
    userName: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
    secret: { type: GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    success: { type: GraphQLBoolean },
  },
  mutateAndGetPayload: async ({ userName, password, secret }, ctx: Context) => {
    await ctx._userRepository.setInitialPassword({
      userName,
      password,
      secret,
    });
    return { success: true };
  },
});

/**
 * userEnter in sites mutation
 */
const GraphQLUserEnterSiteMutation = mutationWithClientMutationId({
  name: "userEnterSite",
  inputFields: {
    userName: { type: GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    success: { type: GraphQLBoolean },
    userId: { type: GraphQLString, resolve: () => uuidv4() },
  },
  mutateAndGetPayload: async ({ userName }, ctx: Context) => {
    await ctx._userRepository.userEnterInSite(userName);
    return { success: true };
  },
});

/**
 * userLeave in sites mutation
 */
const GraphQLUserLeaveSiteMutation = mutationWithClientMutationId({
  name: "userLeaveSite",
  inputFields: {
    userName: { type: GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    success: { type: GraphQLBoolean },
  },
  mutateAndGetPayload: async ({ userName }, ctx: Context) => {
    await ctx._userRepository.userLeaveInSite(userName);
    return { success: true };
  },
});

const GraphQLUserMutation = {
  setInitialUserNamePassword: GraphQLInitialSetPasswordMutations,
  userEnterSite: GraphQLUserEnterSiteMutation,
  userLeaveSite: GraphQLUserLeaveSiteMutation,
};

export { GraphQLUserMutation };
