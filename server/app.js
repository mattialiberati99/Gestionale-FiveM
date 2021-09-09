const app = require("express")();
const session = require("express-session");
const dotenv = require("dotenv").config();
const passport = require("./src/utils");
const { connection, query } = require("./src/database");

// Mysql connection check
connection
  .connect()
  .then(() => {
    console.log("MySQL Database Connected.");
  })
  .catch((e) => console.log(`MySQL ${e}`));

// Express Session
app.use(
  session({
    secret: "your secret",
    name: "name of session id",
    resave: true,
    saveUninitialized: true,
  })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/", (req, res) => {
  res.send("Api is working!")
});

// Route auth
app.use("/auth", require("./src/routes/auth"));

// Route Profile
app.use("/account", require("./src/routes/profile"));

// Route not found
app.use((req, res, next) => {
  return next({
    error: "Route not found.",
    code: "route-not-found",
    status: 404,
  }); // Not found error
});

app.use((error, req, res, next) => {
  const body = {
    status: error.status || 500, // Error status
    error: error.error, // Descriptive string of the error
    code: error.code, // String to easly find out
  };
  return res.status(body.status).json(body); // Send Error and Status
});

// Listen on .env port or 5000
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}, http://localhost:${port}`);
});
