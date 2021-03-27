import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from "graphql";
import { QUESTION_SUBSCRIPTION_TRIGGER } from "../../common/constant/common.subscription";
import { pubSub } from "../publisher";
import { GraphQLQuestion } from "./question.typedef";

const GraphQLQuestionSubscription = {
  pollReaction: {
    args: { questionId: { type: new GraphQLNonNull(GraphQLString) } },
    type: GraphQLQuestion,
    resolve: (r: any) => r,
    subscribe: (info: any, { questionId }: any) => {
      return pubSub.asyncIterator(
        `${QUESTION_SUBSCRIPTION_TRIGGER.addReaction}_${questionId}`,
      );
    },
  },
};

export { GraphQLQuestionSubscription };
