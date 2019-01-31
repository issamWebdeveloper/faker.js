if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var wahmee = require('../wahmee.js');
    var faker = wahmee; // Backward compatibility alias
}

describe("Performance Tests - Tests de génération en masse", function () {
    describe("Génération de 1000 enregistrements", function () {
        it("génère 1000 profils utilisateurs en moins de 1 seconde", function () {
            var start = new Date();
            var profiles = [];
            for (var i = 0; i < 1000; i++) {
                profiles.push({
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    email: faker.internet.email(),
                    phone: faker.phone.phoneNumber()
                });
            }
            var end = new Date();
            var duration = end - start;
            
            assert.strictEqual(profiles.length, 1000);
            assert.ok(duration < 1000, "Should generate 1000 profiles in less than 1 second");
        });
    });

    describe("Génération de 10000 enregistrements", function () {
        it("génère 10000 profils utilisateurs en moins de 10 secondes", function () {
            var start = new Date();
            var profiles = [];
            for (var i = 0; i < 10000; i++) {
                profiles.push({
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    email: faker.internet.email(),
                    phone: faker.phone.phoneNumber()
                });
            }
            var end = new Date();
            var duration = end - start;
            
            assert.strictEqual(profiles.length, 10000);
            assert.ok(duration < 10000, "Should generate 10000 profiles in less than 10 seconds");
        });
    });

    describe("Génération de 100000 enregistrements", function () {
        it("génère 100000 profils utilisateurs en moins de 120 secondes", function () {
            var start = new Date();
            var profiles = [];
            for (var i = 0; i < 100000; i++) {
                profiles.push({
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    email: faker.internet.email(),
                    phone: faker.phone.phoneNumber()
                });
            }
            var end = new Date();
            var duration = end - start;
            
            assert.strictEqual(profiles.length, 100000);
            assert.ok(duration < 120000, "Should generate 100000 profiles in less than 120 seconds");
        });
    });

    describe("Performance par module", function () {
        it("teste la performance du module name", function () {
            var start = new Date();
            var count = 10000;
            for (var i = 0; i < count; i++) {
                faker.name.firstName();
                faker.name.lastName();
                faker.name.findName();
            }
            var end = new Date();
            var duration = end - start;
            
            assert.ok(duration < 1000, "Name module should generate 10000 names in less than 1 second");
        });

        it("teste la performance du module address", function () {
            var start = new Date();
            var count = 10000;
            for (var i = 0; i < count; i++) {
                faker.address.city();
                faker.address.streetAddress();
                faker.address.zipCode();
            }
            var end = new Date();
            var duration = end - start;
            
            assert.ok(duration < 1000, "Address module should generate 10000 addresses in less than 1 second");
        });

        it("teste la performance du module internet", function () {
            var start = new Date();
            var count = 10000;
            for (var i = 0; i < count; i++) {
                faker.internet.email();
                faker.internet.userName();
                faker.internet.url();
            }
            var end = new Date();
            var duration = end - start;
            
            assert.ok(duration < 1000, "Internet module should generate 10000 items in less than 1 second");
        });

        it("teste la performance du module company", function () {
            var start = new Date();
            var count = 10000;
            for (var i = 0; i < count; i++) {
                faker.company.companyName();
                faker.company.catchPhrase();
                faker.company.bs();
            }
            var end = new Date();
            var duration = end - start;
            
            assert.ok(duration < 1000, "Company module should generate 10000 items in less than 1 second");
        });
    });

    describe("Génération multilingue", function () {
        it("génère 5000 profils en français et 5000 en arabe", function () {
            var start = new Date();
            var profiles = [];
            
            for (var i = 0; i < 5000; i++) {
                faker.locale = 'fr';
                profiles.push({
                    locale: 'fr',
                    name: faker.name.findName(),
                    city: faker.address.city()
                });
            }
            
            for (var i = 0; i < 5000; i++) {
                faker.locale = 'ar';
                profiles.push({
                    locale: 'ar',
                    name: faker.name.findName(),
                    city: faker.address.city()
                });
            }
            
            var end = new Date();
            var duration = end - start;
            
            assert.strictEqual(profiles.length, 10000);
            assert.ok(duration < 5000, "Should generate 10000 multilingual profiles in less than 5 seconds");
        });
    });
});
