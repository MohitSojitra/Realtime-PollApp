import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { GraphQLUSerQuery } from "./user";
import { GraphQLUserMutation } from "./user/index";
import { GraphQLQuestionMutation } from "./question";
import { GraphQLUserSubscription } from "./user/user.subscription";
import { GraphQLQuestionSubscription } from "./question/question.subscription";
const RootQuery = new GraphQLObjectType({
  name: "Root",
  fields: {
    ...GraphQLUSerQuery,
  },
});

const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...GraphQLUserMutation,
    ...GraphQLQuestionMutation,
  },
});

const RootSubscription = new GraphQLObjectType({
  name: "Subscription",
  fields: {
    ...GraphQLUserSubscription,
    ...GraphQLQuestionSubscription,
  },
});

const schema: GraphQLSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
  subscription: RootSubscription,
});

export { schema };
