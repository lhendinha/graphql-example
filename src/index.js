const { ApolloServer } = require("apollo-server");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

dotenv.config();

mongoose.connection
  .openUri(process.env.MONGODB_URI, {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
    w: "majority",
  })
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Databased failed: ", error));

// GraphQL
const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen(process.env.PORT)
  .then(({ url }) => console.log(`Server ready at ${url}`))
  .catch((error) => console.log("Server failed: ", error));
