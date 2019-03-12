/**
 * Tests for the Food module
 */

'use strict';

var chai = require('chai');
var expect = chai.expect;
var wahmee = require('../index');
var faker = wahmee;

describe('Food Module', function() {
  
  describe('dish()', function() {
    it('should generate a random dish name', function() {
      var dish = faker.food.dish();
      expect(dish).to.be.a('string');
      expect(dish.length).to.be.greaterThan(0);
    });

    it('should generate a dish from the French locale', function() {
      faker.locale = 'fr';
      var dish = faker.food.dish();
      expect(dish).to.be.a('string');
      expect(dish.length).to.be.greaterThan(0);
    });

    it('should generate a dish from the Arabic locale', function() {
      faker.locale = 'ar';
      var dish = faker.food.dish();
      expect(dish).to.be.a('string');
      expect(dish.length).to.be.greaterThan(0);
    });

    it('should generate different dishes on multiple calls', function() {
      var dishes = [];
      for (var i = 0; i < 10; i++) {
        dishes.push(faker.food.dish());
      }
      var uniqueDishes = dishes.filter(function(value, index, self) {
        return self.indexOf(value) === index;
      });
      expect(uniqueDishes.length).to.be.greaterThan(1);
    });

    it('should accept a locale parameter', function() {
      var dishFR = faker.food.dish('fr');
      var dishAR = faker.food.dish('ar');
      expect(dishFR).to.be.a('string');
      expect(dishAR).to.be.a('string');
    });
  });

  describe('ingredient()', function() {
    it('should generate a random ingredient name', function() {
      var ingredient = faker.food.ingredient();
      expect(ingredient).to.be.a('string');
      expect(ingredient.length).to.be.greaterThan(0);
    });

    it('should generate an ingredient from the French locale', function() {
      faker.locale = 'fr';
      var ingredient = faker.food.ingredient();
      expect(ingredient).to.be.a('string');
      expect(ingredient.length).to.be.greaterThan(0);
    });

    it('should generate an ingredient from the Arabic locale', function() {
      faker.locale = 'ar';
      var ingredient = faker.food.ingredient();
      expect(ingredient).to.be.a('string');
      expect(ingredient.length).to.be.greaterThan(0);
    });

    it('should generate different ingredients on multiple calls', function() {
      var ingredients = [];
      for (var i = 0; i < 10; i++) {
        ingredients.push(faker.food.ingredient());
      }
      var uniqueIngredients = ingredients.filter(function(value, index, self) {
        return self.indexOf(value) === index;
      });
      expect(uniqueIngredients.length).to.be.greaterThan(1);
    });

    it('should accept a locale parameter', function() {
      var ingredientFR = faker.food.ingredient('fr');
      var ingredientAR = faker.food.ingredient('ar');
      expect(ingredientFR).to.be.a('string');
      expect(ingredientAR).to.be.a('string');
    });
  });

  describe('restaurantName()', function() {
    it('should generate a random restaurant name', function() {
      var restaurant = faker.food.restaurantName();
      expect(restaurant).to.be.a('string');
      expect(restaurant.length).to.be.greaterThan(0);
    });

    it('should generate a restaurant name from the French locale', function() {
      faker.locale = 'fr';
      var restaurant = faker.food.restaurantName();
      expect(restaurant).to.be.a('string');
      expect(restaurant.length).to.be.greaterThan(0);
    });

    it('should generate a restaurant name from the Arabic locale', function() {
      faker.locale = 'ar';
      var restaurant = faker.food.restaurantName();
      expect(restaurant).to.be.a('string');
      expect(restaurant.length).to.be.greaterThan(0);
    });

    it('should generate different restaurant names on multiple calls', function() {
      var restaurants = [];
      for (var i = 0; i < 10; i++) {
        restaurants.push(faker.food.restaurantName());
      }
      var uniqueRestaurants = restaurants.filter(function(value, index, self) {
        return self.indexOf(value) === index;
      });
      expect(uniqueRestaurants.length).to.be.greaterThan(1);
    });

    it('should accept a locale parameter', function() {
      var restaurantFR = faker.food.restaurantName('fr');
      var restaurantAR = faker.food.restaurantName('ar');
      expect(restaurantFR).to.be.a('string');
      expect(restaurantAR).to.be.a('string');
    });
  });

  describe('cuisineType()', function() {
    it('should generate a random cuisine type', function() {
      var cuisine = faker.food.cuisineType();
      expect(cuisine).to.be.a('string');
      expect(cuisine.length).to.be.greaterThan(0);
    });

    it('should generate a cuisine type from the French locale', function() {
      faker.locale = 'fr';
      var cuisine = faker.food.cuisineType();
      expect(cuisine).to.be.a('string');
      expect(cuisine.length).to.be.greaterThan(0);
    });

    it('should generate a cuisine type from the Arabic locale', function() {
      faker.locale = 'ar';
      var cuisine = faker.food.cuisineType();
      expect(cuisine).to.be.a('string');
      expect(cuisine.length).to.be.greaterThan(0);
    });

    it('should generate different cuisine types on multiple calls', function() {
      var cuisines = [];
      for (var i = 0; i < 10; i++) {
        cuisines.push(faker.food.cuisineType());
      }
      var uniqueCuisines = cuisines.filter(function(value, index, self) {
        return self.indexOf(value) === index;
      });
      expect(uniqueCuisines.length).to.be.greaterThan(1);
    });

    it('should accept a locale parameter', function() {
      var cuisineFR = faker.food.cuisineType('fr');
      var cuisineAR = faker.food.cuisineType('ar');
      expect(cuisineFR).to.be.a('string');
      expect(cuisineAR).to.be.a('string');
    });
  });

  describe('fruit()', function() {
    it('should generate a random fruit name', function() {
      var fruit = faker.food.fruit();
      expect(fruit).to.be.a('string');
      expect(fruit.length).to.be.greaterThan(0);
    });

    it('should generate a fruit from the French locale', function() {
      faker.locale = 'fr';
      var fruit = faker.food.fruit();
      expect(fruit).to.be.a('string');
      expect(fruit.length).to.be.greaterThan(0);
    });

    it('should generate a fruit from the Arabic locale', function() {
      faker.locale = 'ar';
      var fruit = faker.food.fruit();
      expect(fruit).to.be.a('string');
      expect(fruit.length).to.be.greaterThan(0);
    });

    it('should generate different fruits on multiple calls', function() {
      var fruits = [];
      for (var i = 0; i < 10; i++) {
        fruits.push(faker.food.fruit());
      }
      var uniqueFruits = fruits.filter(function(value, index, self) {
        return self.indexOf(value) === index;
      });
      expect(uniqueFruits.length).to.be.greaterThan(1);
    });

    it('should accept a locale parameter', function() {
      var fruitFR = faker.food.fruit('fr');
      var fruitAR = faker.food.fruit('ar');
      expect(fruitFR).to.be.a('string');
      expect(fruitAR).to.be.a('string');
    });
  });

  describe('vegetable()', function() {
    it('should generate a random vegetable name', function() {
      var vegetable = faker.food.vegetable();
      expect(vegetable).to.be.a('string');
      expect(vegetable.length).to.be.greaterThan(0);
    });

    it('should generate a vegetable from the French locale', function() {
      faker.locale = 'fr';
      var vegetable = faker.food.vegetable();
      expect(vegetable).to.be.a('string');
      expect(vegetable.length).to.be.greaterThan(0);
    });

    it('should generate a vegetable from the Arabic locale', function() {
      faker.locale = 'ar';
      var vegetable = faker.food.vegetable();
      expect(vegetable).to.be.a('string');
      expect(vegetable.length).to.be.greaterThan(0);
    });

    it('should generate different vegetables on multiple calls', function() {
      var vegetables = [];
      for (var i = 0; i < 10; i++) {
        vegetables.push(faker.food.vegetable());
      }
      var uniqueVegetables = vegetables.filter(function(value, index, self) {
        return self.indexOf(value) === index;
      });
      expect(uniqueVegetables.length).to.be.greaterThan(1);
    });

    it('should accept a locale parameter', function() {
      var vegetableFR = faker.food.vegetable('fr');
      var vegetableAR = faker.food.vegetable('ar');
      expect(vegetableFR).to.be.a('string');
      expect(vegetableAR).to.be.a('string');
    });
  });

  describe('Integration Tests', function() {
    it('should generate a complete meal with different components', function() {
      faker.locale = 'fr';
      var dish = faker.food.dish();
      var ingredient = faker.food.ingredient();
      var fruit = faker.food.fruit();
      var vegetable = faker.food.vegetable();
      
      expect(dish).to.be.a('string');
      expect(ingredient).to.be.a('string');
      expect(fruit).to.be.a('string');
      expect(vegetable).to.be.a('string');
    });

    it('should generate restaurant information', function() {
      faker.locale = 'fr';
      var restaurant = faker.food.restaurantName();
      var cuisine = faker.food.cuisineType();
      var dish = faker.food.dish();
      
      expect(restaurant).to.be.a('string');
      expect(cuisine).to.be.a('string');
      expect(dish).to.be.a('string');
    });

    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var dish = faker.food.dish();
      var ingredient = faker.food.ingredient();
      var restaurant = faker.food.restaurantName();
      var cuisine = faker.food.cuisineType();
      var fruit = faker.food.fruit();
      var vegetable = faker.food.vegetable();
      
      expect(dish).to.be.a('string');
      expect(ingredient).to.be.a('string');
      expect(restaurant).to.be.a('string');
      expect(cuisine).to.be.a('string');
      expect(fruit).to.be.a('string');
      expect(vegetable).to.be.a('string');
    });
  });

  describe('Performance Tests', function() {
    it('should generate 100 dishes quickly', function() {
      var start = Date.now();
      for (var i = 0; i < 100; i++) {
        faker.food.dish();
      }
      var end = Date.now();
      expect(end - start).to.be.lessThan(1000);
    });

    it('should generate 100 ingredients quickly', function() {
      var start = Date.now();
      for (var i = 0; i < 100; i++) {
        faker.food.ingredient();
      }
      var end = Date.now();
      expect(end - start).to.be.lessThan(1000);
    });

    it('should generate 100 restaurant names quickly', function() {
      var start = Date.now();
      for (var i = 0; i < 100; i++) {
        faker.food.restaurantName();
      }
      var end = Date.now();
      expect(end - start).to.be.lessThan(1000);
    });

    it('should generate 100 cuisine types quickly', function() {
      var start = Date.now();
      for (var i = 0; i < 100; i++) {
        faker.food.cuisineType();
      }
      var end = Date.now();
      expect(end - start).to.be.lessThan(1000);
    });

    it('should generate 100 fruits quickly', function() {
      var start = Date.now();
      for (var i = 0; i < 100; i++) {
        faker.food.fruit();
      }
      var end = Date.now();
      expect(end - start).to.be.lessThan(1000);
    });

    it('should generate 100 vegetables quickly', function() {
      var start = Date.now();
      for (var i = 0; i < 100; i++) {
        faker.food.vegetable();
      }
      var end = Date.now();
      expect(end - start).to.be.lessThan(1000);
    });
  });
});
