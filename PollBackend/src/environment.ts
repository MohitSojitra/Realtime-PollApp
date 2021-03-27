const defaultPort = 3000;

export const environment = {
  port: process.env.PORT || defaultPort,
  mongodb: {
    devUrl: "mongodb://localhost:27017/PollApp",
  },
  jwt: {
    secreat: "YOUR_JWT_SECREAT",
  },
  adminSecret: "ADMIN_SECREAT",
  userName: "YOUR_USERNAME",
};

