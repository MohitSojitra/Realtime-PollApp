import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from "graphql";
import { USER_SUBSCRIPTION_TRIGGER } from "../../common/constant/common.subscription";
import { pubSub } from "../publisher";

const GraphQLUserSubscription = {
  liveOnlineCount: {
    type: new GraphQLObjectType({
      name: "liveOnlineCountPayload",
      fields: () => ({
        userCount: { type: GraphQLInt },
      }),
    }),
    resolve: (r: any) => r,
    subscribe: () => {
      return pubSub.asyncIterator(`${USER_SUBSCRIPTION_TRIGGER.onlineCount}`);
    },
  },
};

export { GraphQLUserSubscription };
