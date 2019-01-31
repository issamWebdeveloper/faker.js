if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var wahmee = require('../wahmee.js');
    var faker = require('../lib/faker'); // Backward compatibility file
}

describe("Compatibility Tests - Compatibilité rétroactive avec l'ancien nom 'Faker'", function () {
    describe("Import avec l'ancien nom 'faker'", function () {
        it("require('faker') fonctionne correctement", function () {
            assert.ok(faker);
            assert.ok(typeof faker === 'object');
        });

        it("require('faker') retourne le même objet que require('wahmee')", function () {
            var wahmee = require('../wahmee.js');
            var faker = require('../lib/faker');
            assert.strictEqual(faker, wahmee);
        });
    });

    describe("Accès aux modules avec l'ancien nom", function () {
        it("faker.name fonctionne comme wahmee.name", function () {
            var faker = require('../lib/faker');
            var wahmee = require('../wahmee.js');
            
            var name1 = faker.name.findName();
            var name2 = wahmee.name.findName();
            
            assert.ok(name1);
            assert.ok(name2);
            assert.strictEqual(typeof name1, 'string');
            assert.strictEqual(typeof name2, 'string');
        });

        it("faker.address fonctionne comme wahmee.address", function () {
            var faker = require('../lib/faker');
            var wahmee = require('../wahmee.js');
            
            var address1 = faker.address.city();
            var address2 = wahmee.address.city();
            
            assert.ok(address1);
            assert.ok(address2);
            assert.strictEqual(typeof address1, 'string');
            assert.strictEqual(typeof address2, 'string');
        });

        it("faker.internet fonctionne comme wahmee.internet", function () {
            var faker = require('../lib/faker');
            var wahmee = require('../wahmee.js');
            
            var email1 = faker.internet.email();
            var email2 = wahmee.internet.email();
            
            assert.ok(email1);
            assert.ok(email2);
            assert.strictEqual(typeof email1, 'string');
            assert.strictEqual(typeof email2, 'string');
        });

        it("faker.company fonctionne comme wahmee.company", function () {
            var faker = require('../lib/faker');
            var wahmee = require('../wahmee.js');
            
            var company1 = faker.company.companyName();
            var company2 = wahmee.company.companyName();
            
            assert.ok(company1);
            assert.ok(company2);
            assert.strictEqual(typeof company1, 'string');
            assert.strictEqual(typeof company2, 'string');
        });

        it("faker.finance fonctionne comme wahmee.finance", function () {
            var faker = require('../lib/faker');
            var wahmee = require('../wahmee.js');
            
            var account1 = faker.finance.account();
            var account2 = wahmee.finance.account();
            
            assert.ok(account1);
            assert.ok(account2);
            assert.strictEqual(typeof account1, 'string');
            assert.strictEqual(typeof account2, 'string');
        });
    });

    describe("Génération de données multilingues avec l'ancien nom", function () {
        it("génère des noms en français avec faker", function () {
            var faker = require('../lib/faker');
            faker.locale = 'fr';
            
            var name = faker.name.findName();
            assert.ok(typeof name === 'string');
            assert.ok(name.length > 0);
        });

        it("génère des noms en arabe avec faker", function () {
            var faker = require('../lib/faker');
            faker.locale = 'ar';
            
            var name = faker.name.findName();
            assert.ok(typeof name === 'string');
            assert.ok(name.length > 0);
        });

        it("génère des adresses en français avec faker", function () {
            var faker = require('../lib/faker');
            faker.locale = 'fr';
            
            var address = faker.address.streetAddress();
            assert.ok(typeof address === 'string');
            assert.ok(address.length > 0);
        });

        it("génère des adresses en arabe avec faker", function () {
            var faker = require('../lib/faker');
            faker.locale = 'ar';
            
            var address = faker.address.streetAddress();
            assert.ok(typeof address === 'string');
            assert.ok(address.length > 0);
        });

        it("génère des emails en français avec faker", function () {
            var faker = require('../lib/faker');
            faker.locale = 'fr';
            
            var email = faker.internet.email();
            assert.ok(typeof email === 'string');
            assert.ok(email.length > 0);
            assert.ok(email.indexOf('@') > -1);
        });

        it("génère des emails en arabe avec faker", function () {
            var faker = require('../lib/faker');
            faker.locale = 'ar';
            
            var email = faker.internet.email();
            assert.ok(typeof email === 'string');
            assert.ok(email.length > 0);
            assert.ok(email.indexOf('@') > -1);
        });
    });

    describe("Toutes les méthodes sont accessibles", function () {
        it("faker.fake fonctionne", function () {
            var faker = require('../lib/faker');
            var result = faker.fake('{{name.firstName}} {{name.lastName}}');
            assert.ok(typeof result === 'string');
            assert.ok(result.length > 0);
        });

        it("faker.helpers fonctionne", function () {
            var faker = require('../lib/faker');
            var card = faker.helpers.createCard();
            assert.ok(typeof card === 'object');
            assert.ok(card.name);
        });

        it("faker.random fonctionne", function () {
            var faker = require('../lib/faker');
            var number = faker.random.number();
            assert.strictEqual(typeof number, 'number');
        });
    });
});
