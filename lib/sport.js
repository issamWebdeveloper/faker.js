/**
 * Sport module for Wahmee.js
 * Generates fake data related to sports and athletics
 * 
 * @module sport
 * @example
 * var sport = faker.sport.sport(); // "Football"
 * var team = faker.sport.teamName(); // "Paris Saint-Germain"
 * var athlete = faker.sport.athlete(); // "Kylian Mbappé"
 * var event = faker.sport.event(); // "Championnat du Monde"
 * var league = faker.sport.league(); // "Ligue 1"
 * var position = faker.sport.position(); // "Attaquant"
 */

'use strict';

var sport = function (faker) {
  var self = this;

  /**
   * Generates a random sport name
   *
   * @method sport
   * @param {string} locale - Optional locale to use for sport name
   * @return {string} Random sport name
   * @example
   * faker.sport.sport(); // "Football"
   * faker.sport.sport(); // "كرة القدم"
   */
  self.sport = function (locale) {
    if (locale) {
      var oldLocale = faker.locale;
      faker.locale = locale;
      var result = faker.random.arrayElement(faker.definitions.sport.sport);
      faker.locale = oldLocale;
      return result;
    }
    return faker.random.arrayElement(faker.definitions.sport.sport);
  };

  /**
   * Generates a random team name
   *
   * @method teamName
   * @param {string} locale - Optional locale to use for team name
   * @return {string} Random team name
   * @example
   * faker.sport.teamName(); // "Paris Saint-Germain"
   * faker.sport.teamName(); // "الهلال السعودي"
   */
  self.teamName = function (locale) {
    if (locale) {
      var oldLocale = faker.locale;
      faker.locale = locale;
      var result = faker.random.arrayElement(faker.definitions.sport.team_name);
      faker.locale = oldLocale;
      return result;
    }
    return faker.random.arrayElement(faker.definitions.sport.team_name);
  };

  /**
   * Generates a random athlete name
   *
   * @method athlete
   * @param {string} locale - Optional locale to use for athlete name
   * @return {string} Random athlete name
   * @example
   * faker.sport.athlete(); // "Kylian Mbappé"
   * faker.sport.athlete(); // "محمد صلاح"
   */
  self.athlete = function (locale) {
    if (locale) {
      var oldLocale = faker.locale;
      faker.locale = locale;
      var result = faker.random.arrayElement(faker.definitions.sport.athlete);
      faker.locale = oldLocale;
      return result;
    }
    return faker.random.arrayElement(faker.definitions.sport.athlete);
  };

  /**
   * Generates a random sporting event name
   *
   * @method event
   * @param {string} locale - Optional locale to use for event name
   * @return {string} Random sporting event name
   * @example
   * faker.sport.event(); // "Championnat du Monde"
   * faker.sport.event(); // "كأس العالم"
   */
  self.event = function (locale) {
    if (locale) {
      var oldLocale = faker.locale;
      faker.locale = locale;
      var result = faker.random.arrayElement(faker.definitions.sport.event);
      faker.locale = oldLocale;
      return result;
    }
    return faker.random.arrayElement(faker.definitions.sport.event);
  };

  /**
   * Generates a random league name
   *
   * @method league
   * @param {string} locale - Optional locale to use for league name
   * @return {string} Random league name
   * @example
   * faker.sport.league(); // "Ligue 1"
   * faker.sport.league(); // "الدوري السعودي"
   */
  self.league = function (locale) {
    if (locale) {
      var oldLocale = faker.locale;
      faker.locale = locale;
      var result = faker.random.arrayElement(faker.definitions.sport.league);
      faker.locale = oldLocale;
      return result;
    }
    return faker.random.arrayElement(faker.definitions.sport.league);
  };

  /**
   * Generates a random position in a sport
   *
   * @method position
   * @param {string} locale - Optional locale to use for position
   * @return {string} Random position
   * @example
   * faker.sport.position(); // "Attaquant"
   * faker.sport.position(); // "مهاجم"
   */
  self.position = function (locale) {
    if (locale) {
      var oldLocale = faker.locale;
      faker.locale = locale;
      var result = faker.random.arrayElement(faker.definitions.sport.position);
      faker.locale = oldLocale;
      return result;
    }
    return faker.random.arrayElement(faker.definitions.sport.position);
  };

  return self;
};

module['exports'] = sport;
