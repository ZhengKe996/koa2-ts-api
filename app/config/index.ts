const config = {
  server: {
    port: process.env.SERVER_PORT,
  },
  db: {
    db_host: process.env.DB_HOST,
    db_user: process.env.DB_USER,
    db_port: process.env.DB_PORT,
    db_password: process.env.DB_PASSWORD,
  },
  log: {
    appenders: {
      cheese: { type: "file", filename: "logs/cheese.log" },
      access: { type: "file", filename: "logs/access.log" },
    },
    categories: {
      default: { appenders: ["cheese"], level: "error" },
      access: { appenders: ["access"], level: "info" },
    },
  },
};

export default config;
