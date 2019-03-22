const _ = require('lodash');
const { random } = require('lodash');

/**
 * @namespace faker.sport
 * @description Module for generating sports-related data including sports, teams, athletes, events, leagues, and positions.
 * Supports multiple locales (French, Arabic) for international sports data generation.
 */
class Sport {
  constructor(faker) {
    this._faker = faker;
  }

  /**
   * Generates a random sport name.
   * 
   * @method faker.sport.sport
   * @description Returns a random sport name from the current locale's sport definitions.
   * The sport names are localized and will vary based on the selected locale (e.g., French sports, Arabic sports).
   * 
   * @param {string} [locale] - Optional locale to use for generating the sport name. If not provided, uses the current locale.
   * @returns {string} A random sport name.
   * 
   * @example
   * // Returns a random sport name in current locale
   * var sport = faker.sport.sport();
   * // Example output (French): "Football"
   * // Example output (Arabic): "كرة القدم"
   * 
   * @example
   * // Returns a random sport name in French locale
   * var sport = faker.sport.sport('fr');
   * // Example output: "Tennis"
   */
  sport(locale) {
    if (locale) {
      var oldLocale = this._faker.locale;
      this._faker.locale = locale;
      var result = this._faker.random.arrayElement(this._faker.definitions.sport.sport);
      this._faker.locale = oldLocale;
      return result;
    }
    return this._faker.random.arrayElement(this._faker.definitions.sport.sport);
  }

  /**
   * Generates a random team name.
   * 
   * @method faker.sport.teamName
   * @description Returns a random team name from the current locale's sport definitions.
   * The team names are localized and will vary based on the selected locale.
   * 
   * @param {string} [locale] - Optional locale to use for generating the team name. If not provided, uses the current locale.
   * @returns {string} A random team name.
   * 
   * @example
   * // Returns a random team name in current locale
   * var teamName = faker.sport.teamName();
   * // Example output (French): "Paris Saint-Germain"
   * // Example output (Arabic): "النصر"
   * 
   * @example
   * // Returns a random team name in French locale
   * var teamName = faker.sport.teamName('fr');
   * // Example output: "Olympique de Marseille"
   */
  teamName(locale) {
    if (locale) {
      var oldLocale = this._faker.locale;
      this._faker.locale = locale;
      var result = this._faker.random.arrayElement(this._faker.definitions.sport.team_name);
      this._faker.locale = oldLocale;
      return result;
    }
    return this._faker.random.arrayElement(this._faker.definitions.sport.team_name);
  }

  /**
   * Generates a random athlete name.
   * 
   * @method faker.sport.athlete
   * @description Returns a random athlete name from the current locale's sport definitions.
   * The athlete names are localized and will vary based on the selected locale.
   * 
   * @param {string} [locale] - Optional locale to use for generating the athlete name. If not provided, uses the current locale.
   * @returns {string} A random athlete name.
   * 
   * @example
   * // Returns a random athlete name in current locale
   * var athlete = faker.sport.athlete();
   * // Example output (French): "Kylian Mbappé"
   * // Example output (Arabic): "محمد صلاح"
   * 
   * @example
   * // Returns a random athlete name in French locale
   * var athlete = faker.sport.athlete('fr');
   * // Example output: "Antoine Griezmann"
   */
  athlete(locale) {
    if (locale) {
      var oldLocale = this._faker.locale;
      this._faker.locale = locale;
      var result = this._faker.random.arrayElement(this._faker.definitions.sport.athlete);
      this._faker.locale = oldLocale;
      return result;
    }
    return this._faker.random.arrayElement(this._faker.definitions.sport.athlete);
  }

  /**
   * Generates a random sports event name.
   * 
   * @method faker.sport.event
   * @description Returns a random sports event name from the current locale's sport definitions.
   * The event names are localized and will vary based on the selected locale.
   * 
   * @param {string} [locale] - Optional locale to use for generating the event name. If not provided, uses the current locale.
   * @returns {string} A random sports event name.
   * 
   * @example
   * // Returns a random sports event name in current locale
   * var event = faker.sport.event();
   * // Example output (French): "Championnat du Monde"
   * // Example output (Arabic): "كأس العالم"
   * 
   * @example
   * // Returns a random sports event name in French locale
   * var event = faker.sport.event('fr');
   * // Example output: "Championnat d'Europe"
   */
  event(locale) {
    if (locale) {
      var oldLocale = this._faker.locale;
      this._faker.locale = locale;
      var result = this._faker.random.arrayElement(this._faker.definitions.sport.event);
      this._faker.locale = oldLocale;
      return result;
    }
    return this._faker.random.arrayElement(this._faker.definitions.sport.event);
  }

  /**
   * Generates a random league name.
   * 
   * @method faker.sport.league
   * @description Returns a random league name from the current locale's sport definitions.
   * The league names are localized and will vary based on the selected locale.
   * 
   * @param {string} [locale] - Optional locale to use for generating the league name. If not provided, uses the current locale.
   * @returns {string} A random league name.
   * 
   * @example
   * // Returns a random league name in current locale
   * var league = faker.sport.league();
   * // Example output (French): "Ligue 1"
   * // Example output (Arabic): "الدوري السعودي للمحترفين"
   * 
   * @example
   * // Returns a random league name in French locale
   * var league = faker.sport.league('fr');
   * // Example output: "Premier League"
   */
  league(locale) {
    if (locale) {
      var oldLocale = this._faker.locale;
      this._faker.locale = locale;
      var result = this._faker.random.arrayElement(this._faker.definitions.sport.league);
      this._faker.locale = oldLocale;
      return result;
    }
    return this._faker.random.arrayElement(this._faker.definitions.sport.league);
  }

  /**
   * Generates a random sports position.
   * 
   * @method faker.sport.position
   * @description Returns a random sports position from the current locale's sport definitions.
   * The position names are localized and will vary based on the selected locale.
   * 
   * @param {string} [locale] - Optional locale to use for generating the position name. If not provided, uses the current locale.
   * @returns {string} A random sports position.
   * 
   * @example
   * // Returns a random sports position in current locale
   * var position = faker.sport.position();
   * // Example output (French): "Gardien de but"
   * // Example output (Arabic): "حارس مرمى"
   * 
   * @example
   * // Returns a random sports position in French locale
   * var position = faker.sport.position('fr');
   * // Example output: "Défenseur central"
   */
  position(locale) {
    if (locale) {
      var oldLocale = this._faker.locale;
      this._faker.locale = locale;
      var result = this._faker.random.arrayElement(this._faker.definitions.sport.position);
      this._faker.locale = oldLocale;
      return result;
    }
    return this._faker.random.arrayElement(this._faker.definitions.sport.position);
  }
}

module.exports = Sport;
