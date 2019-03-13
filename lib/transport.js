/**
 * @namespace faker.transport
 * @description Module for generating transport data including airports, train stations, airlines, and flight numbers.
 * Supports multiple locales (French, Arabic) for international transport data generation.
 */
var Transport = function (faker) {
  var self = this;
  
  /**
   * Generates a random airport name.
   * 
   * @method faker.transport.airportName
   * @description Returns a random airport name from current locale's transport definitions.
   * Airport names include major international and regional airports.
   * The airport names are localized according to selected locale.
   * 
   * @returns {string} A random airport name.
   * 
   * @example
   * // Returns a random airport name in current locale
   * var airport = faker.transport.airportName();
   * // Example output (French): "Aéroport de Paris-Charles de Gaulle"
   * // Example output (Arabic): "مطار الملك خالد الدولي"
   */
  self.airportName = function () {
    return faker.random.arrayElement(faker.definitions.transport.airport_name);
  };
  
  /**
   * Generates a random airport IATA code.
   * 
   * @method faker.transport.airportCode
   * @description Returns a random airport IATA code from current locale's transport definitions.
   * IATA codes are three-letter codes used to identify airports worldwide.
   * The airport codes are localized according to selected locale.
   * 
   * @returns {string} A random airport IATA code (3 letters).
   * 
   * @example
   * // Returns a random airport code in current locale
   * var code = faker.transport.airportCode();
   * // Example output: "CDG"
   */
  self.airportCode = function () {
    return faker.random.arrayElement(faker.definitions.transport.airport_code);
  };
  
  /**
   * Generates a random train station name.
   * 
   * @method faker.transport.trainStation
   * @description Returns a random train station name from current locale's transport definitions.
   * Train station names include major railway stations and regional stops.
   * The station names are localized according to selected locale.
   * 
   * @returns {string} A random train station name.
   * 
   * @example
   * // Returns a random train station name in current locale
   * var station = faker.transport.trainStation();
   * // Example output (French): "Gare de Paris-Nord"
   * // Example output (Arabic): "محطة الرياض المركزية"
   */
  self.trainStation = function () {
    return faker.random.arrayElement(faker.definitions.transport.train_station);
  };
  
  /**
   * Generates a random airline name.
   * 
   * @method faker.transport.airline
   * @description Returns a random airline name from current locale's transport definitions.
   * Airlines include major international carriers and regional airlines.
   * The airline names are localized according to selected locale.
   * 
   * @returns {string} A random airline name.
   * 
   * @example
   * // Returns a random airline name in current locale
   * var airline = faker.transport.airline();
   * // Example output (French): "Air France"
   * // Example output (Arabic): "الخطوط الجوية السعودية"
   */
  self.airline = function () {
    return faker.random.arrayElement(faker.definitions.transport.airline);
  };
  
  /**
   * Generates a random flight number.
   * 
   * @method faker.transport.flightNumber
   * @description Returns a random flight number following standard airline flight number format.
   * Flight numbers typically consist of an airline code (2-3 letters) followed by a number (3-4 digits).
   * 
   * @returns {string} A random flight number.
   * 
   * @example
   * // Returns a random flight number
   * var flight = faker.transport.flightNumber();
   * // Example output: "AF1234"
   */
  self.flightNumber = function () {
    var airlineCode = faker.random.arrayElement(['AF', 'BA', 'LH', 'EK', 'QR', 'SV', 'TK', 'LX', 'KL', 'IB']);
    var flightNum = faker.random.number({min: 100, max: 9999});
    return airlineCode + flightNum;
  };
  
  return self;
};

module['exports'] = Transport;
