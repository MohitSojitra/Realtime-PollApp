const dev = {
  SOCKET_ENDPOINT: `ws://localhost:3000/subscription`,
  userName: "YOUR_USERNAME",
  password: "YOUR_PASSWORD",
  secret: "YOUR_SECREAT",
  localStorageKey: "YOUR_LOCALSTORAGE_KEY",
  GRAPHQL_SERVER: "http://localhost:3000/graphql",
};
const prod = {
  SOCKET_ENDPOINT: `YOUR_SOCKET_ENDPOINT_LINK`,
  userName: "YOUR_USERNAME",
  password: "YOUR_PASSWORD",
  secret: "YOUR_SECREAT",
  localStorageKey: "YOUR_LOCALSTORAGE_KEY",
  GRAPHQL_SERVER: "YOUR_GRAPHQLSERVER_LINK",
};

export const env = prod;
