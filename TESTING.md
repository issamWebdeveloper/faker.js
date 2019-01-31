# Guide de Tests - Wahmee.js (وهمي)

Ce document explique comment exécuter et écrire des tests pour le projet Wahmee.js.

## Table des matières

- [Installation des dépendances](#installation-des-dépendances)
- [Exécution des tests](#exécution-des-tests)
- [Structure des tests](#structure-des-tests)
- [Conventions de test](#conventions-de-test)
- [Ajout de nouveaux tests](#ajout-de-nouveaux-tests)

## Installation des dépendances

Les tests utilisent **Mocha** comme framework de test et **Chai** comme bibliothèque d'assertions.

### Installation

```bash
npm install
```

Cela installera toutes les dépendances de développement spécifiées dans `package.json`, incluant :
- mocha (^3.2.0)
- sinon (1.4.2)
- nyc (pour la couverture de code)

## Exécution des tests

### Exécuter tous les tests

```bash
npm test
```

### Exécuter les tests en mode watch

```bash
npm run test:watch
```

Cette commande exécutera les tests automatiquement à chaque fois que vous modifiez un fichier.

### Exécuter les tests avec couverture de code

```bash
npm run test:coverage
```

Cette commande générera un rapport de couverture de code dans le dossier `coverage/`.

## Structure des tests

Les tests sont organisés dans le dossier `test/` :

```
test/
├── setup.js              # Configuration globale des tests
├── mocha.opts           # Options de configuration Mocha
├── wahmee.test.js       # Tests du module principal
├── address.unit.js      # Tests du module Address
├── commerce.unit.js     # Tests du module Commerce
├── company.unit.js      # Tests du module Company
├── database.unit.js     # Tests du module Database
├── date.unit.js        # Tests du module Date
├── finance.unit.js      # Tests du module Finance
├── git.unit.js         # Tests du module Git
├── hacker.unit.js       # Tests du module Hacker
├── helpers.unit.js      # Tests du module Helpers
├── image.unit.js        # Tests du module Image
├── internet.unit.js     # Tests du module Internet
├── locales.unit.js      # Tests des locales
├── lorem.unit.js       # Tests du module Lorem
├── name.unit.js        # Tests du module Name
├── phone_number.unit.js # Tests du module Phone
├── random.unit.js      # Tests du module Random
├── system.unit.js       # Tests du module System
├── integration.test.js   # Tests d'intégration
├── performance.test.js  # Tests de performance
└── compatibilité.test.js # Tests de compatibilité rétroactive
```

## Conventions de test

### Nommage des fichiers

- Les tests unitaires pour un module spécifique utilisent le suffixe `.unit.js`
- Les tests d'intégration utilisent le suffixe `.test.js`
- Les tests de performance utilisent le suffixe `.test.js`

### Structure d'un test

```javascript
describe("Module ou fonctionnalité", function () {
    describe("Méthode ou sous-fonctionnalité", function () {
        it("devrait faire quelque chose", function () {
            // Préparation
            var result = wahmee.module.method();
            
            // Assertion
            assert.ok(result);
            assert.strictEqual(result, expected);
        });
    });
});
```

### Utilisation de Sinon

Pour les tests nécessitant un espionnage de fonctions, utilisez Sinon :

```javascript
describe("Exemple avec Sinon", function () {
    beforeEach(function () {
        // Espionner une fonction avant le test
        sinon.spy(wahmee.random, 'number');
    });

    it("devrait appeler la fonction espionnée", function () {
        wahmee.random.number();
        
        // Vérifier que la fonction a été appelée
        assert.ok(wahmee.random.number.calledOnce);
    });

    afterEach(function () {
        // Restaurer la fonction originale après le test
        wahmee.random.number.restore();
    });
});
```

### Tests multilingues

Pour tester les fonctionnalités en plusieurs langues :

```javascript
describe("Tests multilingues", function () {
    it("génère des données en français", function () {
        wahmee.locale = 'fr';
        var name = wahmee.name.findName();
        assert.ok(typeof name === 'string');
    });

    it("génère des données en arabe", function () {
        wahmee.locale = 'ar';
        var name = wahmee.name.findName();
        assert.ok(typeof name === 'string');
    });
});
```

### Tests de performance

Pour les tests de performance, utilisez `Date.now()` pour mesurer le temps d'exécution :

```javascript
describe("Performance", function () {
    it("génère 1000 profils en moins de 1 seconde", function () {
        var start = new Date();
        var count = 1000;
        
        for (var i = 0; i < count; i++) {
            wahmee.name.findName();
        }
        
        var end = new Date();
        var duration = end - start;
        
        assert.ok(duration < 1000, "Should generate 1000 profiles in less than 1 second");
    });
});
```

## Ajout de nouveaux tests

### Étapes pour ajouter un test

1. **Créer le fichier de test** dans le dossier `test/`
2. **Écrire le test** en suivant les conventions ci-dessus
3. **Exécuter le test** pour vérifier qu'il passe
4. **Ajouter le test** au système de contrôle de version (git)

### Exemple de nouveau test

Si vous voulez ajouter un test pour une nouvelle méthode `wahmee.module.newMethod()` :

```javascript
// test/module.test.js
if (typeof module !== 'undefined') {
    var assert = require('assert');
    var wahmee = require('../wahmee.js');
}

describe("Module - Nouvelle méthode", function () {
    describe("newMethod()", function () {
        it("devrait retourner une valeur valide", function () {
            var result = wahmee.module.newMethod();
            
            assert.ok(result);
            assert.strictEqual(typeof result, 'string');
        });

        it("devrait gérer des paramètres", function () {
            var result = wahmee.module.newMethod('param1', 'param2');
            
            assert.ok(result);
            assert.strictEqual(typeof result, 'string');
        });
    });
});
```

## Couverture de code

Le projet vise une couverture de code minimum de **80%**.

### Vérifier la couverture

Après avoir exécuté les tests avec `npm run test:coverage`, ouvrez le fichier `coverage/lcov-report/index.html` dans votre navigateur pour voir le rapport détaillé.

### Seuils de couverture

Les seuils de couverture sont configurés dans `package.json` :

```json
"nyc": {
    "check-coverage": true,
    "lines": 80,
    "statements": 80,
    "branches": 80,
    "functions": 80
}
```

## Dépannage

### Tests qui échouent

Si un test échoue, vérifiez :
1. Le module est correctement importé
2. La méthode existe et est accessible
3. Les paramètres sont valides
4. La locale est correctement configurée

### Tests lents

Si les tests prennent trop de temps :
1. Vérifiez qu'il n'y a pas de boucles infinies
2. Réduisez le nombre d'itérations dans les tests de performance
3. Utilisez `beforeEach` et `afterEach` pour réinitialiser l'état

## Ressources

- [Documentation Mocha](https://mochajs.org/)
- [Documentation Chai](https://www.chaijs.com/)
- [Documentation Sinon](http://sinonjs.org/)
- [Documentation NYC](https://github.com/istanbuljs/nyc)

## Support multilingue

Wahmee.js supporte principalement deux langues :
- **Français (fr)** : langue par défaut
- **Arabe (ar)** : support complet

Pour tester une langue spécifique :

```javascript
wahmee.locale = 'fr';  // ou 'ar'
var name = wahmee.name.findName();
```

## Compatibilité rétroactive

Le projet maintient la compatibilité avec l'ancien nom `faker.js`. Les tests de compatibilité sont dans `test/compatibilité.test.js`.

## Bonnes pratiques

1. **Tests isolés** : Chaque test doit être indépendant et ne pas dépendre de l'ordre d'exécution
2. **Tests rapides** : Les tests doivent s'exécuter rapidement (idéalement < 100ms par test)
3. **Assertions claires** : Utilisez des messages d'assertion clairs et descriptifs
4. **Tests complets** : Couvrez à la fois les cas nominaux et les cas limites
5. **Tests multilingues** : Testez les fonctionnalités dans toutes les langues supportées

---

**Dernière mise à jour :** 21 janvier 2019
**Version :** 1.0.0
