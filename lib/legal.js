/**
 * @namespace faker.legal
 * @description Module for generating legal data including contract types, court names, lawyer titles, legal documents, and case numbers.
 * Supports multiple locales (French, Arabic) for international legal data generation.
 */
var Legal = function (faker) {
  var self = this;
  
  /**
   * Generates a random contract type.
   * 
   * @method faker.legal.contractType
   * @description Returns a random contract type from current locale's legal definitions.
   * Contract types include various legal agreements and contracts.
   * The contract types are localized according to selected locale.
   * 
   * @returns {string} A random contract type.
   * 
   * @example
   * // Returns a random contract type in current locale
   * var contract = faker.legal.contractType();
   * // Example output (French): "Contrat de travail"
   * // Example output (Arabic): "عقد عمل"
   */
  self.contractType = function () {
    return faker.random.arrayElement(faker.definitions.legal.contract_type);
  };
  
  /**
   * Generates a random court name.
   * 
   * @method faker.legal.courtName
   * @description Returns a random court name from current locale's legal definitions.
   * Court names include various types of courts and tribunals.
   * The court names are localized according to selected locale.
   * 
   * @returns {string} A random court name.
   * 
   * @example
   * // Returns a random court name in current locale
   * var court = faker.legal.courtName();
   * // Example output (French): "Tribunal de Grande Instance de Paris"
   * // Example output (Arabic): "المحكمة العامة في الرياض"
   */
  self.courtName = function () {
    return faker.random.arrayElement(faker.definitions.legal.court_name);
  };
  
  /**
   * Generates a random lawyer title.
   * 
   * @method faker.legal.lawyerTitle
   * @description Returns a random lawyer title from current locale's legal definitions.
   * Lawyer titles include various legal professional titles.
   * The lawyer titles are localized according to selected locale.
   * 
   * @returns {string} A random lawyer title.
   * 
   * @example
   * // Returns a random lawyer title in current locale
   * var title = faker.legal.lawyerTitle();
   * // Example output (French): "Avocat"
   * // Example output (Arabic): "محامي"
   */
  self.lawyerTitle = function () {
    return faker.random.arrayElement(faker.definitions.legal.lawyer_title);
  };
  
  /**
   * Generates a random legal document type.
   * 
   * @method faker.legal.legalDocument
   * @description Returns a random legal document type from current locale's legal definitions.
   * Legal documents include various types of official legal paperwork.
   * The document types are localized according to selected locale.
   * 
   * @returns {string} A random legal document type.
   * 
   * @example
   * // Returns a random legal document type in current locale
   * var document = faker.legal.legalDocument();
   * // Example output (French): "Acte de naissance"
   * // Example output (Arabic): "شهادة ميلاد"
   */
  self.legalDocument = function () {
    return faker.random.arrayElement(faker.definitions.legal.legal_document);
  };
  
  /**
   * Generates a random case number.
   * 
   * @method faker.legal.caseNumber
   * @description Returns a random case number following legal case numbering format.
   * Case numbers typically include a year and a sequential number.
   * 
   * @returns {string} A random case number.
   * 
   * @example
   * // Returns a random case number
   * var caseNum = faker.legal.caseNumber();
   * // Example output: "2024/12345"
   */
  self.caseNumber = function () {
    var year = faker.date.past().getFullYear();
    var number = faker.random.number({min: 10000, max: 99999});
    return year + '/' + number;
  };
  
  return self;
};

module['exports'] = Legal;
