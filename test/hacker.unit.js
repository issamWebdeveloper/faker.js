if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var wahmee = require('../index');
    var faker = wahmee; // Backward compatibility alias
}

describe("hacker.js", function() {
    describe("abbreviation()", function() {
        it("returns a random abbreviation", function() {
            var abbreviation = faker.hacker.abbreviation();
            assert.ok(typeof abbreviation === 'string');
            assert.ok(abbreviation.length > 0);
        });
    });

    describe("adjective()", function() {
        it("returns a random adjective", function() {
            var adjective = faker.hacker.adjective();
            assert.ok(typeof adjective === 'string');
            assert.ok(adjective.length > 0);
        });
    });

    describe("noun()", function() {
        it("returns a random noun", function() {
            var noun = faker.hacker.noun();
            assert.ok(typeof noun === 'string');
            assert.ok(noun.length > 0);
        });
    });

    describe("verb()", function() {
        it("returns a random verb", function() {
            var verb = faker.hacker.verb();
            assert.ok(typeof verb === 'string');
            assert.ok(verb.length > 0);
        });
    });

    describe("ingverb()", function() {
        it("returns a random ing verb", function() {
            var ingverb = faker.hacker.ingverb();
            assert.ok(typeof ingverb === 'string');
            assert.ok(ingverb.length > 0);
        });
    });

    describe("phrase()", function() {
        it("returns a random phrase", function() {
            var phrase = faker.hacker.phrase();
            assert.ok(typeof phrase === 'string');
            assert.ok(phrase.length > 0);
            assert.ok(phrase.split(' ').length >= 3);
        });
    });

    describe("Génération de données en français", function() {
        it("génère des phrases en français", function() {
            faker.locale = 'fr';
            var phrase = faker.hacker.phrase();
            assert.ok(typeof phrase === 'string');
            assert.ok(phrase.length > 0);
        });
    });

    describe("Génération de données en arabe", function() {
        it("génère des phrases en arabe", function() {
            faker.locale = 'ar';
            var phrase = faker.hacker.phrase();
            assert.ok(typeof phrase === 'string');
            assert.ok(phrase.length > 0);
        });
    });
});
