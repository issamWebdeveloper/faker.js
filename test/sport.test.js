// Test suite for the sport module
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

var wahmee = require('../index');
var faker = wahmee;

describe('Sport Module', function() {
  
  describe('sport()', function() {
    it('should generate a random sport name', function() {
      var sport = faker.sport.sport();
      expect(sport).to.be.a('string');
      expect(sport.length).to.be.greaterThan(0);
    });
    
    it('should generate different sport names', function() {
      var sports = [];
      for (var i = 0; i < 50; i++) {
        sports.push(faker.sport.sport());
      }
      var uniqueSports = new Set(sports);
      expect(uniqueSports.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var sport = faker.sport.sport();
      expect(sport).to.be.a('string');
      expect(sport.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var sport = faker.sport.sport();
      expect(sport).to.be.a('string');
      expect(sport.length).to.be.greaterThan(0);
    });
  });
  
  describe('teamName()', function() {
    it('should generate a random team name', function() {
      var teamName = faker.sport.teamName();
      expect(teamName).to.be.a('string');
      expect(teamName.length).to.be.greaterThan(0);
    });
    
    it('should generate different team names', function() {
      var teamNames = [];
      for (var i = 0; i < 50; i++) {
        teamNames.push(faker.sport.teamName());
      }
      var uniqueTeamNames = new Set(teamNames);
      expect(uniqueTeamNames.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var teamName = faker.sport.teamName();
      expect(teamName).to.be.a('string');
      expect(teamName.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var teamName = faker.sport.teamName();
      expect(teamName).to.be.a('string');
      expect(teamName.length).to.be.greaterThan(0);
    });
  });
  
  describe('athlete()', function() {
    it('should generate a random athlete name', function() {
      var athlete = faker.sport.athlete();
      expect(athlete).to.be.a('string');
      expect(athlete.length).to.be.greaterThan(0);
    });
    
    it('should generate different athlete names', function() {
      var athletes = [];
      for (var i = 0; i < 50; i++) {
        athletes.push(faker.sport.athlete());
      }
      var uniqueAthletes = new Set(athletes);
      expect(uniqueAthletes.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var athlete = faker.sport.athlete();
      expect(athlete).to.be.a('string');
      expect(athlete.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var athlete = faker.sport.athlete();
      expect(athlete).to.be.a('string');
      expect(athlete.length).to.be.greaterThan(0);
    });
  });
  
  describe('event()', function() {
    it('should generate a random sport event', function() {
      var event = faker.sport.event();
      expect(event).to.be.a('string');
      expect(event.length).to.be.greaterThan(0);
    });
    
    it('should generate different sport events', function() {
      var events = [];
      for (var i = 0; i < 50; i++) {
        events.push(faker.sport.event());
      }
      var uniqueEvents = new Set(events);
      expect(uniqueEvents.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var event = faker.sport.event();
      expect(event).to.be.a('string');
      expect(event.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var event = faker.sport.event();
      expect(event).to.be.a('string');
      expect(event.length).to.be.greaterThan(0);
    });
  });
  
  describe('league()', function() {
    it('should generate a random league name', function() {
      var league = faker.sport.league();
      expect(league).to.be.a('string');
      expect(league.length).to.be.greaterThan(0);
    });
    
    it('should generate different league names', function() {
      var leagues = [];
      for (var i = 0; i < 50; i++) {
        leagues.push(faker.sport.league());
      }
      var uniqueLeagues = new Set(leagues);
      expect(uniqueLeagues.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var league = faker.sport.league();
      expect(league).to.be.a('string');
      expect(league.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var league = faker.sport.league();
      expect(league).to.be.a('string');
      expect(league.length).to.be.greaterThan(0);
    });
  });
  
  describe('position()', function() {
    it('should generate a random position', function() {
      var position = faker.sport.position();
      expect(position).to.be.a('string');
      expect(position.length).to.be.greaterThan(0);
    });
    
    it('should generate different positions', function() {
      var positions = [];
      for (var i = 0; i < 50; i++) {
        positions.push(faker.sport.position());
      }
      var uniquePositions = new Set(positions);
      expect(uniquePositions.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var position = faker.sport.position();
      expect(position).to.be.a('string');
      expect(position.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var position = faker.sport.position();
      expect(position).to.be.a('string');
      expect(position.length).to.be.greaterThan(0);
    });
  });
  
  describe('Integration tests', function() {
    it('should generate a complete sport profile', function() {
      faker.locale = 'fr';
      var profile = {
        sport: faker.sport.sport(),
        teamName: faker.sport.teamName(),
        athlete: faker.sport.athlete(),
        event: faker.sport.event(),
        league: faker.sport.league(),
        position: faker.sport.position()
      };
      
      expect(profile.sport).to.be.a('string');
      expect(profile.teamName).to.be.a('string');
      expect(profile.athlete).to.be.a('string');
      expect(profile.event).to.be.a('string');
      expect(profile.league).to.be.a('string');
      expect(profile.position).to.be.a('string');
    });
    
    it('should generate multiple sport profiles', function() {
      faker.locale = 'fr';
      var profiles = [];
      for (var i = 0; i < 10; i++) {
        profiles.push({
          sport: faker.sport.sport(),
          teamName: faker.sport.teamName(),
          athlete: faker.sport.athlete(),
          event: faker.sport.event(),
          league: faker.sport.league(),
          position: faker.sport.position()
        });
      }
      
      expect(profiles).to.have.lengthOf(10);
      profiles.forEach(function(profile) {
        expect(profile.sport).to.be.a('string');
        expect(profile.teamName).to.be.a('string');
        expect(profile.athlete).to.be.a('string');
        expect(profile.event).to.be.a('string');
        expect(profile.league).to.be.a('string');
        expect(profile.position).to.be.a('string');
      });
    });
  });
  
  describe('Multilingual tests', function() {
    it('should generate French sport data', function() {
      faker.locale = 'fr';
      var data = {
        sport: faker.sport.sport(),
        teamName: faker.sport.teamName(),
        athlete: faker.sport.athlete(),
        event: faker.sport.event(),
        league: faker.sport.league(),
        position: faker.sport.position()
      };
      
      expect(data.sport).to.be.a('string');
      expect(data.teamName).to.be.a('string');
      expect(data.athlete).to.be.a('string');
      expect(data.event).to.be.a('string');
      expect(data.league).to.be.a('string');
      expect(data.position).to.be.a('string');
    });
    
    it('should generate Arabic sport data', function() {
      faker.locale = 'ar';
      var data = {
        sport: faker.sport.sport(),
        teamName: faker.sport.teamName(),
        athlete: faker.sport.athlete(),
        event: faker.sport.event(),
        league: faker.sport.league(),
        position: faker.sport.position()
      };
      
      expect(data.sport).to.be.a('string');
      expect(data.teamName).to.be.a('string');
      expect(data.athlete).to.be.a('string');
      expect(data.event).to.be.a('string');
      expect(data.league).to.be.a('string');
      expect(data.position).to.be.a('string');
    });
    
    it('should switch between locales correctly', function() {
      faker.locale = 'fr';
      var frSport = faker.sport.sport();
      
      faker.locale = 'ar';
      var arSport = faker.sport.sport();
      
      expect(frSport).to.be.a('string');
      expect(arSport).to.be.a('string');
    });
  });
});