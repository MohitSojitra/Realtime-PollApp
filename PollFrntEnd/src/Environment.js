import "regenerator-runtime/runtime";

import { Environment, RecordSource, Store, Observable } from "relay-runtime";
import { SubscriptionClient } from "subscriptions-transport-ws";

import {
  RelayNetworkLayer,
  urlMiddleware,
  authMiddleware,
  cacheMiddleware,
} from "react-relay-network-modern";
import { env } from "../Env";

const middlewares = [
  cacheMiddleware({
    size: 100, // max 100 requests
    ttl: 900000, // 15 minutes
  }),
  urlMiddleware({
    url: (req) => env.GRAPHQL_SERVER,
  }),
]; // array of middlewares
const options = {
  subscribeFn: (config, variables, cacheConfig, observer) => {
    const query = config.text;
    const subscriptionClient = new SubscriptionClient(env.SOCKET_ENDPOINT, {
      reconnect: true,
    });
    return Observable.create((sink) => {
      const c = subscriptionClient
        .request({ query, variables })
        .subscribe(sink);
      return c;
    });
  },
}; // optional advanced options
const network = new RelayNetworkLayer(middlewares, options); // as second arg you may pass advanced options for RRNL

const source = new RecordSource();
const store = new Store(source);
const environment = new Environment({ network, store });

let callback;

export default {
  getEnvironment: (middlewareCallback) => {
    callback = middlewareCallback;

    return environment;
  },
  getNewEnvironment: (middlewareCallback) => {
    callback = middlewareCallback;
    const source = new RecordSource();
    const store = new Store(source);
    const environment = new Environment({ network, store });

    return environment;
  },
};
