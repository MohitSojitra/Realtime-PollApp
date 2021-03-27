import {
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { Context } from "../../context";
import { GraphQLAuthInputType } from "../user";
import { GraphQLOptionsInputType } from "./question.inputType";

/**
 * add question in database
 */
const GraphQLAddQuestionMutation = mutationWithClientMutationId({
  name: "addQuestion",
  inputFields: {
    question: { type: GraphQLNonNull(GraphQLString) },
    options: {
      type: GraphQLOptionsInputType,
    },
    auth: { type: GraphQLAuthInputType },
  },
  outputFields: {
    success: { type: GraphQLBoolean },
  },
  mutateAndGetPayload: async ({ question, options, auth }, ctx: Context) => {
    let res = await ctx._questionRepository.addQuestion({
      question,
      options,
      auth,
    });
    return res;
  },
});

const GraphQLAddReactionOnQuestionMutation = mutationWithClientMutationId({
  name: "addReaction",
  inputFields: {
    questionId: { type: GraphQLNonNull(GraphQLString) },
    answer: { type: GraphQLNonNull(GraphQLString) },
    userId: { type: GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    success: { type: GraphQLBoolean },
  },
  mutateAndGetPayload: async ({ questionId, answer, userId }, ctx: Context) => {
    let res = await ctx._questionRepository.addReactionOnQuestion({
      questionId,
      answer,
      userId,
    });
    return res;
  },
});

const GraphQLQuestionMutation = {
  addQuestion: GraphQLAddQuestionMutation,
  addReaction: GraphQLAddReactionOnQuestionMutation,
};

export { GraphQLQuestionMutation };
