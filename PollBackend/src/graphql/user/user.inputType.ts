import { GraphQLInputObjectType, GraphQLString } from "graphql";

const GraphQLAuthInputType = new GraphQLInputObjectType({
  name: "authInput",
  fields: {
    userName: { type: GraphQLString },
    password: { type: GraphQLString },
    secret: { type: GraphQLString },
  },
});

export { GraphQLAuthInputType };
