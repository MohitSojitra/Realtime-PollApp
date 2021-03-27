import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { Context } from "../../context";
import { environment } from "../../environment";
import { User } from "../../schemas/User";
import { GraphqlQuestionQueries } from "../question/question.query";

const GraphQLUser = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: globalIdField("User"),
    count: {
      type: GraphQLInt,
      resolve: async () => {
        let user: any = await User.findOne({ userName: environment.userName });
        if (!!!user) {
          throw new Error("user not found!!");
        }
        return user.noOfOnlineUser;
      },
    },
    ...GraphqlQuestionQueries,
  }),
});

const {
  connectionType: UserConnection,
  edgeType: GraphQLUserEdge,
} = connectionDefinitions({ nodeType: GraphQLUser });

export { GraphQLUser, UserConnection, GraphQLUserEdge };
