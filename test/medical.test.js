// Test suite for the medical module
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

var wahmee = require('../index');
var faker = wahmee;

describe('Medical Module', function() {
  
  describe('symptom()', function() {
    it('should generate a random symptom', function() {
      var symptom = faker.medical.symptom();
      expect(symptom).to.be.a('string');
      expect(symptom.length).to.be.greaterThan(0);
    });
    
    it('should generate different symptoms', function() {
      var symptoms = [];
      for (var i = 0; i < 50; i++) {
        symptoms.push(faker.medical.symptom());
      }
      var uniqueSymptoms = new Set(symptoms);
      expect(uniqueSymptoms.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var symptom = faker.medical.symptom();
      expect(symptom).to.be.a('string');
      expect(symptom.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var symptom = faker.medical.symptom();
      expect(symptom).to.be.a('string');
      expect(symptom.length).to.be.greaterThan(0);
    });
  });
  
  describe('medication()', function() {
    it('should generate a random medication', function() {
      var medication = faker.medical.medication();
      expect(medication).to.be.a('string');
      expect(medication.length).to.be.greaterThan(0);
    });
    
    it('should generate different medications', function() {
      var medications = [];
      for (var i = 0; i < 50; i++) {
        medications.push(faker.medical.medication());
      }
      var uniqueMedications = new Set(medications);
      expect(uniqueMedications.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var medication = faker.medical.medication();
      expect(medication).to.be.a('string');
      expect(medication.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var medication = faker.medical.medication();
      expect(medication).to.be.a('string');
      expect(medication.length).to.be.greaterThan(0);
    });
  });
  
  describe('medicalSpecialty()', function() {
    it('should generate a random medical specialty', function() {
      var specialty = faker.medical.medicalSpecialty();
      expect(specialty).to.be.a('string');
      expect(specialty.length).to.be.greaterThan(0);
    });
    
    it('should generate different specialties', function() {
      var specialties = [];
      for (var i = 0; i < 50; i++) {
        specialties.push(faker.medical.medicalSpecialty());
      }
      var uniqueSpecialties = new Set(specialties);
      expect(uniqueSpecialties.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var specialty = faker.medical.medicalSpecialty();
      expect(specialty).to.be.a('string');
      expect(specialty.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var specialty = faker.medical.medicalSpecialty();
      expect(specialty).to.be.a('string');
      expect(specialty.length).to.be.greaterThan(0);
    });
  });
  
  describe('hospitalName()', function() {
    it('should generate a random hospital name', function() {
      var hospital = faker.medical.hospitalName();
      expect(hospital).to.be.a('string');
      expect(hospital.length).to.be.greaterThan(0);
    });
    
    it('should generate different hospital names', function() {
      var hospitals = [];
      for (var i = 0; i < 50; i++) {
        hospitals.push(faker.medical.hospitalName());
      }
      var uniqueHospitals = new Set(hospitals);
      expect(uniqueHospitals.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var hospital = faker.medical.hospitalName();
      expect(hospital).to.be.a('string');
      expect(hospital.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var hospital = faker.medical.hospitalName();
      expect(hospital).to.be.a('string');
      expect(hospital.length).to.be.greaterThan(0);
    });
  });
  
  describe('diagnosis()', function() {
    it('should generate a random diagnosis', function() {
      var diagnosis = faker.medical.diagnosis();
      expect(diagnosis).to.be.a('string');
      expect(diagnosis.length).to.be.greaterThan(0);
    });
    
    it('should generate different diagnoses', function() {
      var diagnoses = [];
      for (var i = 0; i < 50; i++) {
        diagnoses.push(faker.medical.diagnosis());
      }
      var uniqueDiagnoses = new Set(diagnoses);
      expect(uniqueDiagnoses.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var diagnosis = faker.medical.diagnosis();
      expect(diagnosis).to.be.a('string');
      expect(diagnosis.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var diagnosis = faker.medical.diagnosis();
      expect(diagnosis).to.be.a('string');
      expect(diagnosis.length).to.be.greaterThan(0);
    });
  });
  
  describe('Integration tests', function() {
    it('should generate a complete medical record', function() {
      faker.locale = 'fr';
      var record = {
        symptom: faker.medical.symptom(),
        medication: faker.medical.medication(),
        specialty: faker.medical.medicalSpecialty(),
        hospital: faker.medical.hospitalName(),
        diagnosis: faker.medical.diagnosis()
      };
      
      expect(record.symptom).to.be.a('string');
      expect(record.medication).to.be.a('string');
      expect(record.specialty).to.be.a('string');
      expect(record.hospital).to.be.a('string');
      expect(record.diagnosis).to.be.a('string');
    });
    
    it('should generate multiple medical records', function() {
      faker.locale = 'fr';
      var records = [];
      for (var i = 0; i < 10; i++) {
        records.push({
          symptom: faker.medical.symptom(),
          medication: faker.medical.medication(),
          specialty: faker.medical.medicalSpecialty(),
          hospital: faker.medical.hospitalName(),
          diagnosis: faker.medical.diagnosis()
        });
      }
      
      expect(records).to.have.lengthOf(10);
      records.forEach(function(record) {
        expect(record.symptom).to.be.a('string');
        expect(record.medication).to.be.a('string');
        expect(record.specialty).to.be.a('string');
        expect(record.hospital).to.be.a('string');
        expect(record.diagnosis).to.be.a('string');
      });
    });
  });
  
  describe('Multilingual tests', function() {
    it('should generate French medical data', function() {
      faker.locale = 'fr';
      var data = {
        symptom: faker.medical.symptom(),
        medication: faker.medical.medication(),
        specialty: faker.medical.medicalSpecialty(),
        hospital: faker.medical.hospitalName(),
        diagnosis: faker.medical.diagnosis()
      };
      
      expect(data.symptom).to.be.a('string');
      expect(data.medication).to.be.a('string');
      expect(data.specialty).to.be.a('string');
      expect(data.hospital).to.be.a('string');
      expect(data.diagnosis).to.be.a('string');
    });
    
    it('should generate Arabic medical data', function() {
      faker.locale = 'ar';
      var data = {
        symptom: faker.medical.symptom(),
        medication: faker.medical.medication(),
        specialty: faker.medical.medicalSpecialty(),
        hospital: faker.medical.hospitalName(),
        diagnosis: faker.medical.diagnosis()
      };
      
      expect(data.symptom).to.be.a('string');
      expect(data.medication).to.be.a('string');
      expect(data.specialty).to.be.a('string');
      expect(data.hospital).to.be.a('string');
      expect(data.diagnosis).to.be.a('string');
    });
    
    it('should switch between locales correctly', function() {
      faker.locale = 'fr';
      var frSymptom = faker.medical.symptom();
      
      faker.locale = 'ar';
      var arSymptom = faker.medical.symptom();
      
      expect(frSymptom).to.be.a('string');
      expect(arSymptom).to.be.a('string');
    });
  });
});
