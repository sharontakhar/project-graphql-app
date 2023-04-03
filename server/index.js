const express = require("express");
const cors = require("cors");
const colours = require("colors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const { connect } = require("mongoose");
const port = process.env.PORT || 5000;

const app = express();

//connect to database
connectDB();

app.listen(port, console.log(`Server running on ${port}`));

app.use(
  `/graphql`,
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
module.exports = app;
