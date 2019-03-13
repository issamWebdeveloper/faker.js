/**
 * @namespace faker.education
 * @description Module for generating educational data including universities, degrees, subjects, and campus names.
 * Supports multiple locales (French, Arabic) for international education data generation.
 */
var Education = function (faker) {
  var self = this;
  
  /**
   * Generates a random university name.
   * 
   * @method faker.education.universityName
   * @description Returns a random university name from the current locale's education definitions.
   * The university names are localized and will vary based on the selected locale (e.g., French universities, Arabic universities).
   * 
   * @returns {string} A random university name.
   * 
   * @example
   * // Returns a random university name in the current locale
   * var university = faker.education.universityName();
   * // Example output (French): "Université de Paris"
   * // Example output (Arabic): "جامعة الملك سعود"
   */
  self.universityName = function () {
    return faker.random.arrayElement(faker.definitions.education.university_name);
  };
  
  /**
   * Generates a random degree type.
   * 
   * @method faker.education.degree
   * @description Returns a random academic degree from the current locale's education definitions.
   * Degrees include various levels such as bachelor's, master's, doctoral degrees, and professional certifications.
   * The degree names are localized according to the selected locale.
   * 
   * @returns {string} A random academic degree.
   * 
   * @example
   * // Returns a random degree in the current locale
   * var degree = faker.education.degree();
   * // Example output (French): "Licence"
   * // Example output (Arabic): "بكالوريوس"
   */
  self.degree = function () {
    return faker.random.arrayElement(faker.definitions.education.degree);
  };
  
  /**
   * Generates a random academic subject.
   * 
   * @method faker.education.subject
   * @description Returns a random academic subject or field of study from the current locale's education definitions.
   * Subjects cover various disciplines including sciences, humanities, arts, engineering, and more.
   * The subject names are localized according to the selected locale.
   * 
   * @returns {string} A random academic subject.
   * 
   * @example
   * // Returns a random subject in the current locale
   * var subject = faker.education.subject();
   * // Example output (French): "Informatique"
   * // Example output (Arabic): "علوم الحاسوب"
   */
  self.subject = function () {
    return faker.random.arrayElement(faker.definitions.education.subject);
  };
  
  /**
   * Generates a random campus name.
   * 
   * @method faker.education.campus
   * @description Returns a random campus name from the current locale's education definitions.
   * Campus names can include specific locations, buildings, or areas within a university.
   * The campus names are localized according to the selected locale.
   * 
   * @returns {string} A random campus name.
   * 
   * @example
   * // Returns a random campus name in the current locale
   * var campus = faker.education.campus();
   * // Example output (French): "Campus de Jussieu"
   * // Example output (Arabic): "الحرم الجامعي الرئيسي"
   */
  self.campus = function () {
    return faker.random.arrayElement(faker.definitions.education.campus);
  };
  
  return self;
};

module['exports'] = Education;
