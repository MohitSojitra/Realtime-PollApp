import { GraphQLObjectType } from "graphql";
import { Context } from "../../context";
import { UserRepository } from "../../repository/user/UserRepository";
import { GraphQLUser } from "./user.typedef";

const GraphQLUSerQuery = {
  viewer: {
    type: GraphQLUser,
    resolve: async (parent: any, args: any, ctx: Context, info: any) => {
      console.log("is it run...");

      return { sucess: true };
    },
  },
};

export { GraphQLUSerQuery };
