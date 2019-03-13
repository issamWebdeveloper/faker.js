// Test suite for the transport module
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

var wahmee = require('../index');
var faker = wahmee;

describe('Transport Module', function() {
  
  describe('airportName()', function() {
    it('should generate a random airport name', function() {
      var airport = faker.transport.airportName();
      expect(airport).to.be.a('string');
      expect(airport.length).to.be.greaterThan(0);
    });
    
    it('should generate different airport names', function() {
      var airports = [];
      for (var i = 0; i < 50; i++) {
        airports.push(faker.transport.airportName());
      }
      var uniqueAirports = new Set(airports);
      expect(uniqueAirports.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var airport = faker.transport.airportName();
      expect(airport).to.be.a('string');
      expect(airport.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var airport = faker.transport.airportName();
      expect(airport).to.be.a('string');
      expect(airport.length).to.be.greaterThan(0);
    });
  });
  
  describe('airportCode()', function() {
    it('should generate a random airport code', function() {
      var code = faker.transport.airportCode();
      expect(code).to.be.a('string');
      expect(code.length).to.equal(3);
      expect(code).to.match(/^[A-Z]{3}$/);
    });
    
    it('should generate different airport codes', function() {
      var codes = [];
      for (var i = 0; i < 50; i++) {
        codes.push(faker.transport.airportCode());
      }
      var uniqueCodes = new Set(codes);
      expect(uniqueCodes.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var code = faker.transport.airportCode();
      expect(code).to.be.a('string');
      expect(code.length).to.equal(3);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var code = faker.transport.airportCode();
      expect(code).to.be.a('string');
      expect(code.length).to.equal(3);
    });
  });
  
  describe('trainStation()', function() {
    it('should generate a random train station name', function() {
      var station = faker.transport.trainStation();
      expect(station).to.be.a('string');
      expect(station.length).to.be.greaterThan(0);
    });
    
    it('should generate different train station names', function() {
      var stations = [];
      for (var i = 0; i < 50; i++) {
        stations.push(faker.transport.trainStation());
      }
      var uniqueStations = new Set(stations);
      expect(uniqueStations.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var station = faker.transport.trainStation();
      expect(station).to.be.a('string');
      expect(station.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var station = faker.transport.trainStation();
      expect(station).to.be.a('string');
      expect(station.length).to.be.greaterThan(0);
    });
  });
  
  describe('airline()', function() {
    it('should generate a random airline name', function() {
      var airline = faker.transport.airline();
      expect(airline).to.be.a('string');
      expect(airline.length).to.be.greaterThan(0);
    });
    
    it('should generate different airline names', function() {
      var airlines = [];
      for (var i = 0; i < 50; i++) {
        airlines.push(faker.transport.airline());
      }
      var uniqueAirlines = new Set(airlines);
      expect(uniqueAirlines.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var airline = faker.transport.airline();
      expect(airline).to.be.a('string');
      expect(airline.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var airline = faker.transport.airline();
      expect(airline).to.be.a('string');
      expect(airline.length).to.be.greaterThan(0);
    });
  });
  
  describe('flightNumber()', function() {
    it('should generate a random flight number', function() {
      var flight = faker.transport.flightNumber();
      expect(flight).to.be.a('string');
      expect(flight.length).to.be.greaterThan(2);
    });
    
    it('should generate different flight numbers', function() {
      var flights = [];
      for (var i = 0; i < 50; i++) {
        flights.push(faker.transport.flightNumber());
      }
      var uniqueFlights = new Set(flights);
      expect(uniqueFlights.size).to.be.greaterThan(1);
    });
    
    it('should follow standard flight number format', function() {
      var flight = faker.transport.flightNumber();
      expect(flight).to.match(/^[A-Z]{2,3}\d{3,4}$/);
    });
  });
  
  describe('Integration tests', function() {
    it('should generate a complete travel itinerary', function() {
      faker.locale = 'fr';
      var itinerary = {
        departureAirport: faker.transport.airportName(),
        departureCode: faker.transport.airportCode(),
        arrivalAirport: faker.transport.airportName(),
        arrivalCode: faker.transport.airportCode(),
        airline: faker.transport.airline(),
        flightNumber: faker.transport.flightNumber(),
        trainStation: faker.transport.trainStation()
      };
      
      expect(itinerary.departureAirport).to.be.a('string');
      expect(itinerary.departureCode).to.be.a('string');
      expect(itinerary.arrivalAirport).to.be.a('string');
      expect(itinerary.arrivalCode).to.be.a('string');
      expect(itinerary.airline).to.be.a('string');
      expect(itinerary.flightNumber).to.be.a('string');
      expect(itinerary.trainStation).to.be.a('string');
    });
    
    it('should generate multiple travel itineraries', function() {
      faker.locale = 'fr';
      var itineraries = [];
      for (var i = 0; i < 10; i++) {
        itineraries.push({
          departureAirport: faker.transport.airportName(),
          departureCode: faker.transport.airportCode(),
          arrivalAirport: faker.transport.airportName(),
          arrivalCode: faker.transport.airportCode(),
          airline: faker.transport.airline(),
          flightNumber: faker.transport.flightNumber(),
          trainStation: faker.transport.trainStation()
        });
      }
      
      expect(itineraries).to.have.lengthOf(10);
      itineraries.forEach(function(itinerary) {
        expect(itinerary.departureAirport).to.be.a('string');
        expect(itinerary.departureCode).to.be.a('string');
        expect(itinerary.arrivalAirport).to.be.a('string');
        expect(itinerary.arrivalCode).to.be.a('string');
        expect(itinerary.airline).to.be.a('string');
        expect(itinerary.flightNumber).to.be.a('string');
        expect(itinerary.trainStation).to.be.a('string');
      });
    });
  });
  
  describe('Multilingual tests', function() {
    it('should generate French transport data', function() {
      faker.locale = 'fr';
      var data = {
        airport: faker.transport.airportName(),
        code: faker.transport.airportCode(),
        station: faker.transport.trainStation(),
        airline: faker.transport.airline(),
        flight: faker.transport.flightNumber()
      };
      
      expect(data.airport).to.be.a('string');
      expect(data.code).to.be.a('string');
      expect(data.station).to.be.a('string');
      expect(data.airline).to.be.a('string');
      expect(data.flight).to.be.a('string');
    });
    
    it('should generate Arabic transport data', function() {
      faker.locale = 'ar';
      var data = {
        airport: faker.transport.airportName(),
        code: faker.transport.airportCode(),
        station: faker.transport.trainStation(),
        airline: faker.transport.airline(),
        flight: faker.transport.flightNumber()
      };
      
      expect(data.airport).to.be.a('string');
      expect(data.code).to.be.a('string');
      expect(data.station).to.be.a.a('string');
      expect(data.airline).to.be.a('string');
      expect(data.flight).to.be.a('string');
    });
    
    it('should switch between locales correctly', function() {
      faker.locale = 'fr';
      var frAirport = faker.transport.airportName();
      
      faker.locale = 'ar';
      var arAirport = faker.transport.airportName();
      
      expect(frAirport).to.be.a('string');
      expect(arAirport).to.be.a('string');
    });
  });
});
