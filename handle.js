"use strict";
const Recipe = require("./model/recipe.js");

const getRecipe = async (req, res) => {
  const filterQuery = {};
  if (req.query.title) {
    filterQuery.title = req.query.title;
  }

  const recipes = await Recipe.find(filterQuery);
  res.send(recipes);
};

const addRecipe = async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      title: "test",
      type: "test type",
      description: "lots of testing bc its the description",
      recipe: "more testing",
      email: "email@email.com",
      image: "place-hold.it",
      ingredients: ["idk", "yes", "yup"],
      price: 23,
    });

    res.send(newRecipe);
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
}

module.exports = { getRecipe, addRecipe };