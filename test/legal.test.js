// Test suite for the legal module
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

var wahmee = require('../index');
var faker = wahmee;

describe('Legal Module', function() {
  
  describe('contractType()', function() {
    it('should generate a random contract type', function() {
      var contract = faker.legal.contractType();
      expect(contract).to.be.a('string');
      expect(contract.length).to.be.greaterThan(0);
    });
    
    it('should generate different contract types', function() {
      var contracts = [];
      for (var i = 0; i < 50; i++) {
        contracts.push(faker.legal.contractType());
      }
      var uniqueContracts = new Set(contracts);
      expect(uniqueContracts.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var contract = faker.legal.contractType();
      expect(contract).to.be.a('string');
      expect(contract.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var contract = faker.legal.contractType();
      expect(contract).to.be.a('string');
      expect(contract.length).to.be.greaterThan(0);
    });
  });
  
  describe('courtName()', function() {
    it('should generate a random court name', function() {
      var court = faker.legal.courtName();
      expect(court).to.be.a('string');
      expect(court.length).to.be.greaterThan(0);
    });
    
    it('should generate different court names', function() {
      var courts = [];
      for (var i = 0; i < 50; i++) {
        courts.push(faker.legal.courtName());
      }
      var uniqueCourts = new Set(courts);
      expect(uniqueCourts.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var court = faker.legal.courtName();
      expect(court).to.be.a('string');
      expect(court.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var court = faker.legal.courtName();
      expect(court).to.be.a('string');
      expect(court.length).to.be.greaterThan(0);
    });
  });
  
  describe('lawyerTitle()', function() {
    it('should generate a random lawyer title', function() {
      var title = faker.legal.lawyerTitle();
      expect(title).to.be.a('string');
      expect(title.length).to.be.greaterThan(0);
    });
    
    it('should generate different lawyer titles', function() {
      var titles = [];
      for (var i = 0; i < 50; i++) {
        titles.push(faker.legal.lawyerTitle());
      }
      var uniqueTitles = new Set(titles);
      expect(uniqueTitles.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var title = faker.legal.lawyerTitle();
      expect(title).to.be.a('string');
      expect(title.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var title = faker.legal.lawyerTitle();
      expect(title).to.be.a('string');
      expect(title.length).to.be.greaterThan(0);
    });
  });
  
  describe('legalDocument()', function() {
    it('should generate a random legal document type', function() {
      var document = faker.legal.legalDocument();
      expect(document).to.be.a('string');
      expect(document.length).to.be.greaterThan(0);
    });
    
    it('should generate different legal document types', function() {
      var documents = [];
      for (var i = 0; i < 50; i++) {
        documents.push(faker.legal.legalDocument());
      }
      var uniqueDocuments = new Set(documents);
      expect(uniqueDocuments.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var document = faker.legal.legalDocument();
      expect(document).to.be.a('string');
      expect(document.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var document = faker.legal.legalDocument();
      expect(document).to.be.a('string');
      expect(document.length).to.be.greaterThan(0);
    });
  });
  
  describe('caseNumber()', function() {
    it('should generate a random case number', function() {
      var caseNum = faker.legal.caseNumber();
      expect(caseNum).to.be.a('string');
      expect(caseNum).to.match(/^\d{4}\/\d{5}$/);
    });
    
    it('should generate different case numbers', function() {
      var caseNumbers = [];
      for (var i = 0; i < 50; i++) {
        caseNumbers.push(faker.legal.caseNumber());
      }
      var uniqueCaseNumbers = new Set(caseNumbers);
      expect(uniqueCaseNumbers.size).to.be.greaterThan(1);
    });
    
    it('should follow case number format', function() {
      var caseNum = faker.legal.caseNumber();
      expect(caseNum).to.match(/^\d{4}\/\d{5}$/);
    });
  });
  
  describe('Integration tests', function() {
    it('should generate a complete legal case', function() {
      faker.locale = 'fr';
      var legalCase = {
        contractType: faker.legal.contractType(),
        courtName: faker.legal.courtName(),
        lawyerTitle: faker.legal.lawyerTitle(),
        legalDocument: faker.legal.legalDocument(),
        caseNumber: faker.legal.caseNumber()
      };
      
      expect(legalCase.contractType).to.be.a('string');
      expect(legalCase.courtName).to.be.a('string');
      expect(legalCase.lawyerTitle).to.be.a('string');
      expect(legalCase.legalDocument).to.be.a('string');
      expect(legalCase.caseNumber).to.be.a('string');
    });
    
    it('should generate multiple legal cases', function() {
      faker.locale = 'fr';
      var legalCases = [];
      for (var i = 0; i < 10; i++) {
        legalCases.push({
          contractType: faker.legal.contractType(),
          courtName: faker.legal.courtName(),
          lawyerTitle: faker.legal.lawyerTitle(),
          legalDocument: faker.legal.legalDocument(),
          caseNumber: faker.legal.caseNumber()
        });
      }
      
      expect(legalCases).to.have.lengthOf(10);
      legalCases.forEach(function(legalCase) {
        expect(legalCase.contractType).to.be.a('string');
        expect(legalCase.courtName).to.be.a('string');
        expect(legalCase.lawyerTitle).to.be.a('string');
        expect(legalCase.legalDocument).to.be.a('string');
        expect(legalCase.caseNumber).to.be.a('string');
      });
    });
  });
  
  describe('Multilingual tests', function() {
    it('should generate French legal data', function() {
      faker.locale = 'fr';
      var data = {
        contractType: faker.legal.contractType(),
        courtName: faker.legal.courtName(),
        lawyerTitle: faker.legal.lawyerTitle(),
        legalDocument: faker.legal.legalDocument(),
        caseNumber: faker.legal.caseNumber()
      };
      
      expect(data.contractType).to.be.a('string');
      expect(data.courtName).to.be.a('string');
      expect(data.lawyerTitle).to.be.a('string');
      expect(data.legalDocument).to.be.a('string');
      expect(data.caseNumber).to.be.a('string');
    });
    
    it('should generate Arabic legal data', function() {
      faker.locale = 'ar';
      var data = {
        contractType: faker.legal.contractType(),
        courtName: faker.legal.courtName(),
        lawyerTitle: faker.legal.lawyerTitle(),
        legalDocument: faker.legal.legalDocument(),
        caseNumber: faker.legal.caseNumber()
      };
      
      expect(data.contractType).to.be.a('string');
      expect(data.courtName).to.be.a('string');
      expect(data.lawyerTitle).to.be.a('string');
      expect(data.legalDocument).to.be.a('string');
      expect(data.caseNumber).to.be.a('string');
    });
    
    it('should switch between locales correctly', function() {
      faker.locale = 'fr';
      var frContract = faker.legal.contractType();
      
      faker.locale = 'ar';
      var arContract = faker.legal.contractType();
      
      expect(frContract).to.be.a('string');
      expect(arContract).to.be.a('string');
    });
  });
});
