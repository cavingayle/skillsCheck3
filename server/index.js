require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const ctrl = require("./controller");
const app = express();

app.use(express.json());

const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 48 },
    secret: SESSION_SECRET,
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log("Db is now connected ya dig");
});

//enpoints
app.post("/auth/register", ctrl.register);
app.post("/auth/login", ctrl.login)


app.listen(SERVER_PORT, () =>
  console.log(`Server is running on port ${SERVER_PORT}`)
);
