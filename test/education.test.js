// Test suite for the education module
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

var wahmee = require('../index');
var faker = wahmee;

describe('Education Module', function() {
  
  describe('universityName()', function() {
    it('should generate a random university name', function() {
      var university = faker.education.universityName();
      expect(university).to.be.a('string');
      expect(university.length).to.be.greaterThan(0);
    });
    
    it('should generate different university names', function() {
      var universities = [];
      for (var i = 0; i < 50; i++) {
        universities.push(faker.education.universityName());
      }
      var uniqueUniversities = new Set(universities);
      expect(uniqueUniversities.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var university = faker.education.universityName();
      expect(university).to.be.a('string');
      expect(university.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var university = faker.education.universityName();
      expect(university).to.be.a('string');
      expect(university.length).to.be.greaterThan(0);
    });
  });
  
  describe('degree()', function() {
    it('should generate a random degree', function() {
      var degree = faker.education.degree();
      expect(degree).to.be.a('string');
      expect(degree.length).to.be.greaterThan(0);
    });
    
    it('should generate different degrees', function() {
      var degrees = [];
      for (var i = 0; i < 50; i++) {
        degrees.push(faker.education.degree());
      }
      var uniqueDegrees = new Set(degrees);
      expect(uniqueDegrees.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var degree = faker.education.degree();
      expect(degree).to.be.a('string');
      expect(degree.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var degree = faker.education.degree();
      expect(degree).to.be.a('string');
      expect(degree.length).to.be.greaterThan(0);
    });
  });
  
  describe('subject()', function() {
    it('should generate a random academic subject', function() {
      var subject = faker.education.subject();
      expect(subject).to.be.a('string');
      expect(subject.length).to.be.greaterThan(0);
    });
    
    it('should generate different subjects', function() {
      var subjects = [];
      for (var i = 0; i < 50; i++) {
        subjects.push(faker.education.subject());
      }
      var uniqueSubjects = new Set(subjects);
      expect(uniqueSubjects.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var subject = faker.education.subject();
      expect(subject).to.be.a('string');
      expect(subject.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var subject = faker.education.subject();
      expect(subject).to.be.a('string');
      expect(subject.length).to.be.greaterThan(0);
    });
  });
  
  describe('campus()', function() {
    it('should generate a random campus name', function() {
      var campus = faker.education.campus();
      expect(campus).to.be.a('string');
      expect(campus.length).to.be.greaterThan(0);
    });
    
    it('should generate different campus names', function() {
      var campuses = [];
      for (var i = 0; i < 50; i++) {
        campuses.push(faker.education.campus());
      }
      var uniqueCampuses = new Set(campuses);
      expect(uniqueCampuses.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var campus = faker.education.campus();
      expect(campus).to.be.a('string');
      expect(campus.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var campus = faker.education.campus();
      expect(campus).to.be.a('string');
      expect(campus.length).to.be.greaterThan(0);
    });
  });
  
  describe('Integration tests', function() {
    it('should generate a complete education profile', function() {
      faker.locale = 'fr';
      var profile = {
        university: faker.education.universityName(),
        degree: faker.education.degree(),
        subject: faker.education.subject(),
        campus: faker.education.campus()
      };
      
      expect(profile.university).to.be.a('string');
      expect(profile.degree).to.be.a('string');
      expect(profile.subject).to.be.a('string');
      expect(profile.campus).to.be.a('string');
    });
    
    it('should generate multiple education profiles', function() {
      faker.locale = 'fr';
      var profiles = [];
      for (var i = 0; i < 10; i++) {
        profiles.push({
          university: faker.education.universityName(),
          degree: faker.education.degree(),
          subject: faker.education.subject(),
          campus: faker.education.campus()
        });
      }
      
      expect(profiles).to.have.lengthOf(10);
      profiles.forEach(function(profile) {
        expect(profile.university).to.be.a('string');
        expect(profile.degree).to.be.a('string');
        expect(profile.subject).to.be.a('string');
        expect(profile.campus).to.be.a('string');
      });
    });
  });
  
  describe('Multilingual tests', function() {
    it('should generate French education data', function() {
      faker.locale = 'fr';
      var data = {
        university: faker.education.universityName(),
        degree: faker.education.degree(),
        subject: faker.education.subject(),
        campus: faker.education.campus()
      };
      
      expect(data.university).to.be.a('string');
      expect(data.degree).to.be.a('string');
      expect(data.subject).to.be.a('string');
      expect(data.campus).to.be.a('string');
    });
    
    it('should generate Arabic education data', function() {
      faker.locale = 'ar';
      var data = {
        university: faker.education.universityName(),
        degree: faker.education.degree(),
        subject: faker.education.subject(),
        campus: faker.education.campus()
      };
      
      expect(data.university).to.be.a('string');
      expect(data.degree).to.be.a('string');
      expect(data.subject).to.be.a('string');
      expect(data.campus).to.be.a('string');
    });
    
    it('should switch between locales correctly', function() {
      faker.locale = 'fr';
      var frUniversity = faker.education.universityName();
      
      faker.locale = 'ar';
      var arUniversity = faker.education.universityName();
      
      expect(frUniversity).to.be.a('string');
      expect(arUniversity).to.be.a('string');
    });
  });
});
