if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var wahmee = require('../wahmee.js');
    var faker = wahmee; // Backward compatibility alias
}

describe("wahmee.js - Module Principal", function () {
    describe("Instanciation de Wahmee", function () {
        it("crée une instance par défaut avec la locale française", function () {
            var instance = new wahmee();
            assert.strictEqual(instance.locale, 'fr');
        });

        it("crée une instance avec une locale spécifique", function () {
            var instance = new wahmee('ar');
            assert.strictEqual(instance.locale, 'ar');
        });

        it("crée une instance avec la locale arabe", function () {
            var instance = new wahmee('ar');
            assert.strictEqual(instance.locale, 'ar');
            var name = instance.name.findName();
            assert.ok(typeof name === 'string');
            assert.ok(name.length > 0);
        });

        it("crée une instance avec la locale française", function () {
            var instance = new wahmee('fr');
            assert.strictEqual(instance.locale, 'fr');
            var name = instance.name.findName();
            assert.ok(typeof name === 'string');
            assert.ok(name.length > 0);
        });
    });

    describe("Changement de locale dynamique", function () {
        it("change de locale de français à arabe", function () {
            var instance = new wahmee('fr');
            assert.strictEqual(instance.locale, 'fr');
            
            instance.locale = 'ar';
            assert.strictEqual(instance.locale, 'ar');
            
            var name = instance.name.findName();
            assert.ok(typeof name === 'string');
        });

        it("change de locale d'arabe à français", function () {
            var instance = new wahmee('ar');
            assert.strictEqual(instance.locale, 'ar');
            
            instance.locale = 'fr';
            assert.strictEqual(instance.locale, 'fr');
            
            var name = instance.name.findName();
            assert.ok(typeof name === 'string');
        });
    });

    describe("Accès aux différents modules", function () {
        it("accède au module address", function () {
            var instance = new wahmee();
            assert.ok(typeof instance.address === 'object');
            assert.ok(typeof instance.address.city === 'function');
            assert.ok(typeof instance.address.zipCode === 'function');
        });

        it("accède au module name", function () {
            var instance = new wahmee();
            assert.ok(typeof instance.name === 'object');
            assert.ok(typeof instance.name.firstName === 'function');
            assert.ok(typeof instance.name.lastName === 'function');
        });

        it("accède au module internet", function () {
            var instance = new wahmee();
            assert.ok(typeof instance.internet === 'object');
            assert.ok(typeof instance.internet.email === 'function');
            assert.ok(typeof instance.internet.userName === 'function');
        });

        it("accède au module company", function () {
            var instance = new wahmee();
            assert.ok(typeof instance.company === 'object');
            assert.ok(typeof instance.company.companyName === 'function');
            assert.ok(typeof instance.company.catchPhrase === 'function');
        });

        it("accède au module commerce", function () {
            var instance = new wahmee();
            assert.ok(typeof instance.commerce === 'object');
            assert.ok(typeof instance.commerce.color === 'function');
            assert.ok(typeof instance.commerce.department === 'function');
        });

        it("accède au module finance", function () {
            var instance = new wahmee();
            assert.ok(typeof instance.finance === 'object');
            assert.ok(typeof instance.finance.account === 'function');
            assert.ok(typeof instance.finance.currencyCode === 'function');
        });

        it("accède au module date", function () {
            var instance = new wahmee();
            assert.ok(typeof instance.date === 'object');
            assert.ok(typeof instance.date.past === 'function');
            assert.ok(typeof instance.date.future === 'function');
        });

        it("accède au module helpers", function () {
            var instance = new wahmee();
            assert.ok(typeof instance.helpers === 'object');
            assert.ok(typeof instance.helpers.createCard === 'function');
            assert.ok(typeof instance.helpers.randomize === 'function');
        });

        it("accède au module image", function () {
            var instance = new wahmee();
            assert.ok(typeof instance.image === 'object');
            assert.ok(typeof instance.image.avatar === 'function');
            assert.ok(typeof instance.image.imageUrl === 'function');
        });

        it("accède au module lorem", function () {
            var instance = new wahmee();
            assert.ok(typeof instance.lorem === 'object');
            assert.ok(typeof instance.lorem.word === 'function');
            assert.ok(typeof instance.lorem.paragraph === 'function');
        });

        it("accède au module phone", function () {
            var instance = new wahmee();
            assert.ok(typeof instance.phone === 'object');
            assert.ok(typeof instance.phone.phoneNumber === 'function');
        });

        it("accède au module random", function () {
            var instance = new wahmee();
            assert.ok(typeof instance.random === 'object');
            assert.ok(typeof instance.random.number === 'function');
            assert.ok(typeof instance.random.uuid === 'function');
        });
    });

    describe("Compatibilité rétroactive avec l'ancien nom 'Faker'", function () {
        it("l'alias faker fonctionne comme wahmee", function () {
            assert.strictEqual(faker, wahmee);
        });

        it("faker génère des données comme wahmee", function () {
            var name1 = faker.name.findName();
            var name2 = wahmee.name.findName();
            assert.strictEqual(typeof name1, 'string');
            assert.strictEqual(typeof name2, 'string');
        });

        it("faker et wahmee partagent les mêmes modules", function () {
            assert.strictEqual(faker.name, wahmee.name);
            assert.strictEqual(faker.address, wahmee.address);
            assert.strictEqual(faker.internet, wahmee.internet);
        });
    });

    describe("Génération de données multilingues", function () {
        it("génère des noms en français", function () {
            wahmee.locale = 'fr';
            var name = wahmee.name.findName();
            assert.ok(typeof name === 'string');
            assert.ok(name.length > 0);
        });

        it("génère des noms en arabe", function () {
            wahmee.locale = 'ar';
            var name = wahmee.name.findName();
            assert.ok(typeof name === 'string');
            assert.ok(name.length > 0);
        });

        it("génère des adresses en français", function () {
            wahmee.locale = 'fr';
            var address = wahmee.address.streetAddress();
            assert.ok(typeof address === 'string');
            assert.ok(address.length > 0);
        });

        it("génère des adresses en arabe", function () {
            wahmee.locale = 'ar';
            var address = wahmee.address.streetAddress();
            assert.ok(typeof address === 'string');
            assert.ok(address.length > 0);
        });

        it("génère des emails en français", function () {
            wahmee.locale = 'fr';
            var email = wahmee.internet.email();
            assert.ok(typeof email === 'string');
            assert.ok(email.length > 0);
            assert.ok(email.indexOf('@') > -1);
        });

        it("génère des emails en arabe", function () {
            wahmee.locale = 'ar';
            var email = wahmee.internet.email();
            assert.ok(typeof email === 'string');
            assert.ok(email.length > 0);
            assert.ok(email.indexOf('@') > -1);
        });
    });
});
