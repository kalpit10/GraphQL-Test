const express = require("express");
// it will allow us to create a schema
const { buildSchema } = require("graphql");
//this is an express middleware func that responds to graphql queries
const { graphqlHTTP } = require("express-graphql");

const schema = buildSchema(`
type Query {
  description : String
  price: Float
}
`);

const root = {
  description: "Red Shoe",
  price: 42.12,
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    //graphql will resolve queries that ask for desc. to our root value and likewise for price also
    rootValue: root,
  })
);

app.listen(3000, () => {
  console.log(`Running our graphql server`);
});
