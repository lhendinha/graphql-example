const Fruit = require("../models/Fruit");

const fruitResolver = {
  Query: {
    async fruits() {
      return await Fruit.find();
    },
    async fruit(_, { id }) {
      return await Fruit.findById(id);
    },
  },
  Mutation: {
    createFruit(_, { fruit }) {
      const newFruit = new Fruit(fruit);
      return newFruit.save();
    },
    async updateFruit(_, { fruit }) {
      return await Fruit.findByIdAndUpdate(fruit.id, fruit, {
        new: true,
        useFindAndModify: false,
      });
    },
    async deleteFruit(_, { id }) {
      return await Fruit.findByIdAndRemove(id, {
        useFindAndModify: false,
      });
    },
  },
};

module.exports = fruitResolver;
