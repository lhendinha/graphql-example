const { gql } = require("apollo-server");

const mutation = gql`
  type Mutation {
    createFruit(fruit: CreateFruitInput): Fruit
    updateFruit(fruit: UpdateFruitInput): Fruit
    deleteFruit(id: String): Fruit
  }

  input CreateFruitInput {
    name: String
    nutritions: NutritionsInput
  }

  input NutritionsInput {
    sugar: String
    calories: String
  }

  input UpdateFruitInput {
    id: String!
    name: String
    nutritions: NutritionsInput
  }
`;

module.exports = mutation;
