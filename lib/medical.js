/**
 * @namespace faker.medical
 * @description Module for generating medical data including symptoms, medications, specialties, hospitals, and diagnoses.
 * Supports multiple locales (French, Arabic) for international medical data generation.
 */
var Medical = function (faker) {
  var self = this;
  
  /**
   * Generates a random medical symptom.
   * 
   * @method faker.medical.symptom
   * @description Returns a random medical symptom from the current locale's medical definitions.
   * Symptoms cover various medical conditions and health issues.
   * The symptom names are localized according to the selected locale.
   * 
   * @returns {string} A random medical symptom.
   * 
   * @example
   * // Returns a random symptom in the current locale
   * var symptom = faker.medical.symptom();
   * // Example output (French): "Mal de tête"
   * // Example output (Arabic): "صداع"
   */
  self.symptom = function () {
    return faker.random.arrayElement(faker.definitions.medical.symptom);
  };
  
  /**
   * Generates a random medication name.
   * 
   * @method faker.medical.medication
   * @description Returns a random medication name from the current locale's medical definitions.
   * Medications include various types of drugs and medicines.
   * The medication names are localized according to the selected locale.
   * 
   * @returns {string} A random medication name.
   * 
   * @example
   * // Returns a random medication in the current locale
   * var medication = faker.medical.medication();
   * // Example output (French): "Paracétamol"
   * // Example output (Arabic): "باراسيتامول"
   */
  self.medication = function () {
    return faker.random.arrayElement(faker.definitions.medical.medication);
  };
  
  /**
   * Generates a random medical specialty.
   * 
   * @method faker.medical.medicalSpecialty
   * @description Returns a random medical specialty from the current locale's medical definitions.
   * Specialties cover various fields of medicine and healthcare.
   * The specialty names are localized according to the selected locale.
   * 
   * @returns {string} A random medical specialty.
   * 
   * @example
   * // Returns a random medical specialty in the current locale
   * var specialty = faker.medical.medicalSpecialty();
   * // Example output (French): "Cardiologie"
   * // Example output (Arabic): "أمراض القلب"
   */
  self.medicalSpecialty = function () {
    return faker.random.arrayElement(faker.definitions.medical.medical_specialty);
  };
  
  /**
   * Generates a random hospital name.
   * 
   * @method faker.medical.hospitalName
   * @description Returns a random hospital name from the current locale's medical definitions.
   * Hospital names include various types of medical facilities.
   * The hospital names are localized according to the selected locale.
   * 
   * @returns {string} A random hospital name.
   * 
   * @example
   * // Returns a random hospital name in the current locale
   * var hospital = faker.medical.hospitalName();
   * // Example output (French): "Hôpital Saint-Louis"
   * // Example output (Arabic): "مستشفى الملك فيصل"
   */
  self.hospitalName = function () {
    return faker.random.arrayElement(faker.definitions.medical.hospital_name);
  };
  
  /**
   * Generates a random medical diagnosis.
   * 
   * @method faker.medical.diagnosis
   * @description Returns a random medical diagnosis from the current locale's medical definitions.
   * Diagnoses cover various medical conditions and diseases.
   * The diagnosis names are localized according to the selected locale.
   * 
   * @returns {string} A random medical diagnosis.
   * 
   * @example
   * // Returns a random diagnosis in the current locale
   * var diagnosis = faker.medical.diagnosis();
   * // Example output (French): "Grippe"
   * // Example output (Arabic): "إنفلونزا"
   */
  self.diagnosis = function () {
    return faker.random.arrayElement(faker.definitions.medical.diagnosis);
  };
  
  return self;
};

module['exports'] = Medical;
