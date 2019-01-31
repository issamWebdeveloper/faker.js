if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var wahmee = require('../wahmee.js');
    var faker = wahmee; // Backward compatibility alias
}

describe("Integration Tests - Scénarios d'utilisation réels", function () {
    describe("Génération d'un profil utilisateur complet", function () {
        it("génère un profil utilisateur avec toutes les informations", function () {
            var profile = {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                fullName: faker.name.findName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                address: {
                    street: faker.address.streetAddress(),
                    city: faker.address.city(),
                    state: faker.address.state(),
                    zipCode: faker.address.zipCode(),
                    country: faker.address.country()
                },
                company: {
                    name: faker.company.companyName(),
                    catchPhrase: faker.company.catchPhrase()
                },
                job: {
                    title: faker.name.jobTitle(),
                    area: faker.name.jobArea(),
                    type: faker.name.jobType()
                },
                finance: {
                    account: faker.finance.account(),
                    accountName: faker.finance.accountName()
                }
            };

            assert.ok(profile.firstName);
            assert.ok(profile.lastName);
            assert.ok(profile.fullName);
            assert.ok(profile.email);
            assert.ok(profile.phone);
            assert.ok(profile.address);
            assert.ok(profile.company);
            assert.ok(profile.job);
            assert.ok(profile.finance);
        });

        it("génère un profil utilisateur en arabe", function () {
            faker.locale = 'ar';
            var profile = {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                fullName: faker.name.findName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                address: {
                    street: faker.address.streetAddress(),
                    city: faker.address.city(),
                    country: faker.address.country()
                }
            };

            assert.ok(profile.firstName);
            assert.ok(profile.lastName);
            assert.ok(profile.fullName);
            assert.ok(profile.email);
            assert.ok(profile.phone);
            assert.ok(profile.address);
        });

        it("génère un profil utilisateur en français", function () {
            faker.locale = 'fr';
            var profile = {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                fullName: faker.name.findName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                address: {
                    street: faker.address.streetAddress(),
                    city: faker.address.city(),
                    country: faker.address.country()
                }
            };

            assert.ok(profile.firstName);
            assert.ok(profile.lastName);
            assert.ok(profile.fullName);
            assert.ok(profile.email);
            assert.ok(profile.phone);
            assert.ok(profile.address);
        });
    });

    describe("Génération de données complètes pour une entreprise", function () {
        it("génère une entreprise avec toutes les informations", function () {
            faker.locale = 'fr';
            var company = {
                name: faker.company.companyName(),
                catchPhrase: faker.company.catchPhrase(),
                bs: faker.company.bs(),
                address: {
                    street: faker.address.streetAddress(),
                    city: faker.address.city(),
                    state: faker.address.state(),
                    zipCode: faker.address.zipCode(),
                    country: faker.address.country()
                },
                contact: {
                    name: faker.name.findName(),
                    email: faker.internet.email(),
                    phone: faker.phone.phoneNumber()
                }
            };

            assert.ok(company.name);
            assert.ok(company.catchPhrase);
            assert.ok(company.bs);
            assert.ok(company.address);
            assert.ok(company.contact);
        });
    });

    describe("Génération de données complètes pour une transaction", function () {
        it("génère une transaction avec toutes les informations", function () {
            faker.locale = 'fr';
            var transaction = faker.helpers.createTransaction();
            
            assert.ok(transaction);
            assert.ok(transaction.amount);
            assert.ok(transaction.date);
            assert.ok(transaction.business);
            assert.ok(transaction.name);
            assert.ok(transaction.type);
            assert.ok(transaction.account);
        });
    });

    describe("Génération de données en masse", function () {
        it("génère 10 profils utilisateurs", function () {
            var profiles = [];
            for (var i = 0; i < 10; i++) {
                profiles.push({
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    email: faker.internet.email(),
                    phone: faker.phone.phoneNumber()
                });
            }

            assert.strictEqual(profiles.length, 10);
            profiles.forEach(function(profile) {
                assert.ok(profile.firstName);
                assert.ok(profile.lastName);
                assert.ok(profile.email);
                assert.ok(profile.phone);
            });
        });

        it("génère 100 entreprises", function () {
            var companies = [];
            for (var i = 0; i < 100; i++) {
                companies.push({
                    name: faker.company.companyName(),
                    catchPhrase: faker.company.catchPhrase(),
                    email: faker.internet.email()
                });
            }

            assert.strictEqual(companies.length, 100);
            companies.forEach(function(company) {
                assert.ok(company.name);
                assert.ok(company.catchPhrase);
                assert.ok(company.email);
            });
        });

        it("génère 1000 transactions", function () {
            var transactions = [];
            for (var i = 0; i < 1000; i++) {
                transactions.push(faker.helpers.createTransaction());
            }

            assert.strictEqual(transactions.length, 1000);
            transactions.forEach(function(transaction) {
                assert.ok(transaction.amount);
                assert.ok(transaction.date);
                assert.ok(transaction.business);
                assert.ok(transaction.name);
                assert.ok(transaction.type);
                assert.ok(transaction.account);
            });
        });
    });

    describe("Génération multilingue", function () {
        it("génère des données en alternant entre français et arabe", function () {
            var results = [];
            for (var i = 0; i < 10; i++) {
                faker.locale = i % 2 === 0 ? 'fr' : 'ar';
                results.push({
                    locale: faker.locale,
                    name: faker.name.findName(),
                    city: faker.address.city()
                });
            }

            assert.strictEqual(results.length, 10);
            results.forEach(function(result) {
                assert.ok(['fr', 'ar'].indexOf(result.locale) !== -1);
                assert.ok(result.name);
                assert.ok(result.city);
            });
        });
    });
});
