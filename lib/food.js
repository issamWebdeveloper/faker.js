/**
 * Food module for Wahmee.js
 * Generates fake data related to food and beverages
 * 
 * @module food
 * @example
 * var dish = faker.food.dish(); // "Boeuf Bourguignon"
 * var ingredient = faker.food.ingredient(); // "Tomate"
 * var restaurant = faker.food.restaurantName(); // "Le Petit Bistro"
 * var cuisine = faker.food.cuisineType(); // "Française"
 * var fruit = faker.food.fruit(); // "Pomme"
 * var vegetable = faker.food.vegetable(); // "Carotte"
 */

'use strict';

var food = function (faker) {
  var self = this;

  /**
   * Generates a random dish name
   *
   * @method dish
   * @param {string} locale - Optional locale to use for the dish name
   * @return {string} Random dish name
   * @example
   * faker.food.dish(); // "Boeuf Bourguignon"
   * faker.food.dish(); // "Couscous Royal"
   */
  self.dish = function (locale) {
    if (locale) {
      var oldLocale = faker.locale;
      faker.locale = locale;
      var result = faker.random.arrayElement(faker.definitions.food.dish);
      faker.locale = oldLocale;
      return result;
    }
    return faker.random.arrayElement(faker.definitions.food.dish);
  };

  /**
   * Generates a random ingredient name
   *
   * @method ingredient
   * @param {string} locale - Optional locale to use for the ingredient name
   * @return {string} Random ingredient name
   * @example
   * faker.food.ingredient(); // "Tomate"
   * faker.food.ingredient(); // "Huile d'olive"
   */
  self.ingredient = function (locale) {
    if (locale) {
      var oldLocale = faker.locale;
      faker.locale = locale;
      var result = faker.random.arrayElement(faker.definitions.food.ingredient);
      faker.locale = oldLocale;
      return result;
    }
    return faker.random.arrayElement(faker.definitions.food.ingredient);
  };

  /**
   * Generates a random restaurant name
   *
   * @method restaurantName
   * @param {string} locale - Optional locale to use for the restaurant name
   * @return {string} Random restaurant name
   * @example
   * faker.food.restaurantName(); // "Le Petit Bistro"
   * faker.food.restaurantName(); // "La Table d'Or"
   */
  self.restaurantName = function (locale) {
    if (locale) {
      var oldLocale = faker.locale;
      faker.locale = locale;
      var result = faker.random.arrayElement(faker.definitions.food.restaurant_name);
      faker.locale = oldLocale;
      return result;
    }
    return faker.random.arrayElement(faker.definitions.food.restaurant_name);
  };

  /**
   * Generates a random cuisine type
   *
   * @method cuisineType
   * @param {string} locale - Optional locale to use for the cuisine type
   * @return {string} Random cuisine type
   * @example
   * faker.food.cuisineType(); // "Française"
   * faker.food.cuisineType(); // "Italienne"
   */
  self.cuisineType = function (locale) {
    if (locale) {
      var oldLocale = faker.locale;
      faker.locale = locale;
      var result = faker.random.arrayElement(faker.definitions.food.cuisine_type);
      faker.locale = oldLocale;
      return result;
    }
    return faker.random.arrayElement(faker.definitions.food.cuisine_type);
  };

  /**
   * Generates a random fruit name
   *
   * @method fruit
   * @param {string} locale - Optional locale to use for the fruit name
   * @return {string} Random fruit name
   * @example
   * faker.food.fruit(); // "Pomme"
   * faker.food.fruit(); // "Orange"
   */
  self.fruit = function (locale) {
    if (locale) {
      var oldLocale = faker.locale;
      faker.locale = locale;
      var result = faker.random.arrayElement(faker.definitions.food.fruit);
      faker.locale = oldLocale;
      return result;
    }
    return faker.random.arrayElement(faker.definitions.food.fruit);
  };

  /**
   * Generates a random vegetable name
   *
   * @method vegetable
   * @param {string} locale - Optional locale to use for the vegetable name
   * @return {string} Random vegetable name
   * @example
   * faker.food.vegetable(); // "Carotte"
   * faker.food.vegetable(); // "Courgette"
   */
  self.vegetable = function (locale) {
    if (locale) {
      var oldLocale = faker.locale;
      faker.locale = locale;
      var result = faker.random.arrayElement(faker.definitions.food.vegetable);
      faker.locale = oldLocale;
      return result;
    }
    return faker.random.arrayElement(faker.definitions.food.vegetable);
  };

  return self;
};

module['exports'] = food;
