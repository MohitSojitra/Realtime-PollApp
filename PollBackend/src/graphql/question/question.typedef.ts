import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { Context, Icontext } from "../../context";

const GraphQLQuestion = new GraphQLObjectType({
  name: "question",
  fields: () => ({
    id: globalIdField("Question"),
    questionId: {
      type: GraphQLString,
      resolve: (parent, args, ctx, info) => {
        return parent._id;
      },
    },
    question: {
      type: GraphQLString,
    },
    options: {
      type: new GraphQLObjectType({
        name: "options",
        fields: () => ({
          a: {
            type: GraphQLString,
            resolve: (parent: any, args: any, ctx: Icontext, info: any) => {
              return parent.a;
            },
          },
          b: {
            type: GraphQLString,
            resolve: (parent: any, args: any, ctx: Icontext, info: any) => {
              return parent.b;
            },
          },
          c: {
            type: GraphQLString,
            resolve: (parent: any, args: any, ctx: Icontext, info: any) => {
              return parent.c;
            },
          },
          d: {
            type: GraphQLString,
            resolve: (parent: any, args: any, ctx: Icontext, info: any) => {
              return parent.d;
            },
          },
        }),
      }),
    },
    optionStatus: {
      type: new GraphQLObjectType({
        name: "optionStatus",
        fields: () => ({
          a: {
            type: GraphQLInt,
            resolve: (parent: any, args: any, ctx: Icontext, info: any) => {
              return parent.a;
            },
          },
          b: {
            type: GraphQLInt,
            resolve: (parent: any, args: any, ctx: Icontext, info: any) => {
              return parent.b;
            },
          },
          c: {
            type: GraphQLInt,
            resolve: (parent: any, args: any, ctx: Icontext, info: any) => {
              return parent.c;
            },
          },
          d: {
            type: GraphQLInt,
            resolve: (parent: any, args: any, ctx: Icontext, info: any) => {
              return parent.d;
            },
          },
        }),
      }),
    },
    totalAnswered: {
      type: GraphQLInt,
    },
    reaction: {
      type: GraphQLList(
        new GraphQLObjectType({
          name: "reaction",
          fields: () => ({
            userId: {
              type: GraphQLString,
              resolve: (parent, args, ctx, info) => {
                return parent.userId;
              },
            },
            selectOption: {
              type: GraphQLString,
              resolve: (parent, args, ctx, info) => {
                return parent.selectOption;
              },
            },
          }),
        }),
      ),
    },
  }),
});

const {
  connectionType: QuestionConnection, // it is use at pagination time
  edgeType: GraphQLQuestionEdge,
} = connectionDefinitions({ nodeType: GraphQLQuestion });

export { QuestionConnection, GraphQLQuestionEdge, GraphQLQuestion };
