import { GraphQLInputObjectType, GraphQLString } from "graphql";

const GraphQLOptionsInputType = new GraphQLInputObjectType({
  name: "inputOptions",
  fields: () => ({
    a: { type: GraphQLString },
    b: { type: GraphQLString },
    c: { type: GraphQLString },
    d: { type: GraphQLString },
  }),
});

export { GraphQLOptionsInputType };
