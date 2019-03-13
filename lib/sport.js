const _ = require('lodash');
const { random } = require('lodash');

class Sport {
  constructor(faker) {
    this._faker = faker;
  }

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
