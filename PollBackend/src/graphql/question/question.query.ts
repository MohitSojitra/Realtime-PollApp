import {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { connectionArgs } from "graphql-relay";
import { Icontext } from "../../context";
import { GraphQLAuthInputType } from "../user";
import { GraphQLQuestion } from "./question.typedef";

const GraphqlQuestionQueries = {
  getAllQuestion: {
    type: GraphQLList(GraphQLQuestion),
    args: {
      ...connectionArgs,

      userName: { type: GraphQLString },
      password: { type: GraphQLString },
      secret: { type: GraphQLString },
    },
    resolve: async (
      parent: any,
      { userName, password, secret }: any,
      ctx: Icontext,
      info: any,
    ) => {
      return await ctx._questionRepository.getAllQuestions({
        userName,
        password,
        secret,
      });
    },
  },
  //   getAllQuestion: {
  //     type: GraphQLList(GraphQLQuestion),
  //     args: {
  //       ...connectionArgs,
  //       auth: {
  //         type: new GraphQLObjectType({
  //           name: "argsAuth",
  //           fields: {
  //             userName: { type: GraphQLString },
  //             password: { type: GraphQLString },
  //             secret: { type: GraphQLString },
  //           },
  //         }),
  //       },
  //     },
  //     resolve: async (parent: any, { auth }: any, ctx: Icontext, info: any) => {
  //       return await ctx._questionRepository.getAllQuestions(auth);
  //     },
  //   },
};
export { GraphqlQuestionQueries };
