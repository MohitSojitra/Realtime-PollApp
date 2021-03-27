// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log("Module disposed. "));
}

// import { GraphQLServer } from "graphql-yoga";
import { ApolloServer } from "apollo-server-express";
const http = require("http");

import { schema } from "./graphql/schema";
import mongoose from "mongoose";
import { Context } from "./context";
import express from "express";
import path from "path";
import { environment } from "./environment";
import cors from "cors";

const context = async (ctx: any) => new Context(ctx.req, ctx.res);

const apolloserver = new ApolloServer({
  schema,
  context,
  subscriptions: "/subscription",
  debug: true,
  playground: true,
  introspection: true,
});

// for static file serverd
const app = express();

// cors for remove cors origin problem
app.use(cors());

// served static path : it could help in production time
app.use(express.static(path.join("public")));


apolloserver.applyMiddleware({ app });

const httpServer = http.createServer(app);
apolloserver.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: environment.port }, () => {
  console.log(`🚀  server ready at http://localhost:${environment.port}/graphql 🔥 🔥 🔥`);
  console.log(
    ` 🚀 Subscriptions ready at ws://localhost:${environment.port}/subscription 🔥 🔥 🔥`,
  );
});



mongoose
  .connect(environment.mongodb.devUrl)
  .then(() => {
    console.log("mongoDb successfully connected");
  })
  .catch((e) => console.log("dosent connect mongodb , something wrong!!"));
