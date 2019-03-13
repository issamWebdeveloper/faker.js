# wahmee.js - Générateur de données factuelles en arabe et français pour le navigateur et Node.js

![Wahmee.js](wahmee-logo.png)

## Description

Cette version de wahmee.js est une version spécialisée qui génère exclusivement des données en arabe et en français. Elle est conçue pour fonctionner à la fois dans le navigateur et dans Node.js.

### الوصف
هذه النسخة من wahmee.js هي نسخة متخصصة تولد حصراً البيانات باللغة العربية والفرنسية. مصممة للعمل في المتصفح و Node.js.

## Démo

[https://cdn.rawgit.com/Marak/wahmee.js/master/examples/browser/index.html](https://cdn.rawgit.com/Marak/wahmee.js/master/examples/browser/index.html)

## Utilisation

### Navigateur
```html
    <script src = "wahmee.js" type = "text/javascript"></script>
    <script>
      // En français
      var randomName = faker.name.findName(); // Marie Dupont
      var randomEmail = faker.internet.email(); // marie.dupont@email.fr
      var randomCard = faker.helpers.createCard(); // carte de contact aléatoire
      
      // En arabe
      faker.locale = "ar";
      var randomName = faker.name.findName(); // محمد أحمد
      var randomEmail = faker.internet.email(); // mohammed.ahmed@email.com
      var randomCard = faker.helpers.createCard(); // بطاقة اتصال عشوائية
    </script>
```

### Node.js
```js
    var faker = require(.wahmee.);

    // En français
    var randomName = faker.name.findName(); // Pierre Martin
    var randomEmail = faker.internet.email(); // pierre.martin@email.fr
    var randomCard = faker.helpers.createCard(); // carte de contact aléatoire

    // En arabe
    faker.locale = "ar";
    var randomName = faker.name.findName(); // أحمد محمد
    var randomEmail = faker.internet.email(); // ahmed.mohammed@email.com
    var randomCard = faker.helpers.createCard(); // بطاقة اتصال عشوائية

    // Module Education - Données éducatives
    var university = faker.education.universityName(); // Université Paris-Saclay
    var degree = faker.education.degree(); // Master
    var subject = faker.education.subject(); // Informatique
    var campus = faker.education.campus(); // Campus de Jussieu
    
    // En arabe
    faker.locale = "ar";
    var university = faker.education.universityName(); // جامعة الملك سعود
    var degree = faker.education.degree(); // ماجستير
    var subject = faker.education.subject(); // علوم الحاسوب
    var campus = faker.education.campus(); // الحرم الجامعي الرئيسي

    // Module Medical - Données médicales
    var symptom = faker.medical.symptom(); // Mal de tête
    var medication = faker.medical.medication(); // Paracétamol
    var specialty = faker.medical.medicalSpecialty(); // Cardiologie
    var hospital = faker.medical.hospitalName(); // Hôpital Saint-Louis
    var diagnosis = faker.medical.diagnosis(); // Grippe
    
    // En arabe
    faker.locale = "ar";
    var symptom = faker.medical.symptom(); // صداع
    var medication = faker.medical.medication(); // باراسيتامول
    var specialty = faker.medical.medicalSpecialty(); // أمراض القلب
    var hospital = faker.medical.hospitalName(); // مستشفى الملك فيصل
    var diagnosis = faker.medical.diagnosis(); // إنفلونزا

    // Module Transport - Données de transport
    var airport = faker.transport.airportName(); // Aéroport de Paris-Charles de Gaulle
    var airportCode = faker.transport.airportCode(); // CDG
    var station = faker.transport.trainStation(); // Gare de Paris-Nord
    var airline = faker.transport.airline(); // Air France
    var flight = faker.transport.flightNumber(); // AF1234
    
    // En arabe
    faker.locale = "ar";
    var airport = faker.transport.airportName(); // مطار الملك خالد الدولي
    var airportCode = faker.transport.airportCode(); // RUH
    var station = faker.transport.trainStation(); // محطة الرياض المركزية
    var airline = faker.transport.airline(); // الخطوط الجوية السعودية
    var flight = faker.transport.flightNumber(); // SV1234

    // Module Legal - Données juridiques
    var contract = faker.legal.contractType(); // Contrat de travail
    var court = faker.legal.courtName(); // Tribunal de Grande Instance de Paris
    var lawyer = faker.legal.lawyerTitle(); // Avocat
    var document = faker.legal.legalDocument(); // Acte de naissance
    var caseNum = faker.legal.caseNumber(); // 2024/12345
    
    // En arabe
    faker.locale = "ar";
    var contract = faker.legal.contractType(); // عقد عمل
    var court = faker.legal.courtName(); // المحكمة العامة في الرياض
    var lawyer = faker.legal.lawyerTitle(); // محامي
    var document = faker.legal.legalDocument(); // شهادة ميلاد
    var caseNum = faker.legal.caseNumber(); // 2024/12345

    // Module Finance - Crypto-monnaies
    var litecoinAddress = faker.finance.litecoinAddress(); // LZ7yWpZx6R5fD8E5Z8f5E
    var rippleAddress = faker.finance.rippleAddress(); // rL4qWpZx6R5fD8E5Z8f5E
    var dashAddress = faker.finance.dashAddress(); // X7yWpZx6R5fD8E5Z8f5E
    var walletType = faker.finance.cryptoWalletType(); // Portefeuille chaud
    var transactionHash = faker.finance.cryptoTransactionHash(); // 0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4bfafe041d8
    
    // En arabe
    faker.locale = "ar";
    var litecoinAddress = faker.finance.litecoinAddress(); // LZ7yWpZx6R5fD8E5Z8f5E
    var rippleAddress = faker.finance.rippleAddress(); // rL4qWpZx6R5fD8E5Z8f5E
    var dashAddress = faker.finance.dashAddress(); // X7yWpZx6R5fD8E5Z8f5E
    var walletType = faker.finance.cryptoWalletType(); // محفظة ساخنة
    var transactionHash = faker.finance.cryptoTransactionHash(); // 0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4bfafe041d8

    // Module Food - Alimentation
    faker.locale = "fr";
    var dish = faker.food.dish(); // Boeuf Bourguignon
    var ingredient = faker.food.ingredient(); // Tomate
    var restaurant = faker.food.restaurantName(); // Le Petit Bistro
    var cuisine = faker.food.cuisineType(); // Française
    var fruit = faker.food.fruit(); // Pomme
    var vegetable = faker.food.vegetable(); // Carotte
    
    // En arabe
    faker.locale = "ar";
    var dish = faker.food.dish(); // لحم البقر بورغينيون
    var ingredient = faker.food.ingredient(); // طماطم
    var restaurant = faker.food.restaurantName(); // البيسترو الصغير
    var cuisine = faker.food.cuisineType(); // فرنسية
    var fruit = faker.food.fruit(); // تفاح
    var vegetable = faker.food.vegetable(); // جزر
```

## API


### Wahmee.fake()

wahmee.js contient une méthode de générateur très utile `Faker.fake` pour combiner les méthodes de l'API faker en utilisant un format de chaîne mustache.

**Exemple :**

``` js
console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
// En français: "Dupont, Marie Mme."
// En arabe: "أحمد، محمد السيد"
```

Cela interpolera la chaîne de format avec la valeur des méthodes `name.lastName()`, `name.firstName()` et `name.suffix()`

### JSDoc API Browser

[http://marak.github.io/wahmee.js/](http://marak.github.io/wahmee.js/)

### Méthodes de l'API

* address
  * zipCode
  * city
  * streetName
  * streetAddress
  * country
  * state
  * latitude
  * longitude
* commerce
  * color
  * department
  * productName
  * price
* company
  * companyName
  * companySuffix
  * catchPhrase
* date
  * past
  * future
  * between
  * recent
* finance
  * account
  * accountName
  * amount
  * currencyCode
  * creditCardNumber
* helpers
  * randomize
  * createCard
  * createTransaction
* image
  * image
  * avatar
  * imageUrl
* internet
  * email
  * userName
  * url
  * domainName
* lorem
  * word
  * words
  * sentence
  * paragraph
* name
  * firstName
  * lastName
  * findName
  * title
* phone
  * phoneNumber
* random
  * number
  * arrayElement
  * uuid
  * boolean
  * word
* education
  * universityName
  * degree
  * subject
  * campus
* medical
  * symptom
  * medication
  * medicalSpecialty
  * hospitalName
  * diagnosis
* transport
  * airportName
  * airportCode
  * trainStation
  * airline
  * flightNumber
* legal
  * contractType
  * courtName
  * lawyerTitle
  * legalDocument
  * caseNumber
* food
  * dish
  * ingredient
  * restaurantName
  * cuisineType
  * fruit
  * vegetable


## Localisation

Cette version supporte uniquement deux langues : l'arabe et le français.

### هذه النسخة تدعم لغتين فقط: العربية والفرنسية.

La langue par défaut est le français.

### اللغة الافتراضية هي الفرنسية.

Définir une nouvelle langue est simple :

```js
// Définit la langue en arabe
faker.locale = "ar";

// Définit la langue en français
faker.locale = "fr";
```

Langues disponibles :
* ar (العربية)
* fr (Français)

### Compatibilité rétroactive

Le projet a été renommé de `faker.js` à `wahmee.js` (وهمي). Pour la compatibilité rétroactive, vous pouvez toujours utiliser l'ancien nom :

```js
// Utilisation avec l'ancien nom (toujours supporté)
var faker = require('faker');

// Utilisation avec le nouveau nom
var wahmee = require('wahmee');

// Les deux fonctionnent de la même manière
faker.name.findName(); // Pierre Martin
wahmee.name.findName(); // Pierre Martin
```

### Paquets de localisation individuels

Par défaut, l'exigence de `faker` inclura toutes les données de localisation.

Dans un environnement de production, vous pouvez souhaiter inclure uniquement les données de localisation pour une langue spécifique.

```js
// Charge uniquement la langue française
var faker = require('wahmee/locale/fr');

// Charge uniquement la langue arabe
var faker = require('wahmee/locale/ar');
```

## Définir une graine aléatoire

Si vous voulez des résultats cohérents, vous pouvez définir votre propre graine :

```js
faker.seed(123);

var firstRandom = faker.random.number();

// Définir la graine à nouveau réinitialise la séquence.
faker.seed(123);

var secondRandom = faker.random.number();

console.log(firstRandom === secondRandom); // true
```

## Interface HTML Autonome

Cette version inclut une interface HTML autonome qui peut être servie sur un serveur pour générer des données aléatoires.

### هذه النسخة تتضمن واجهة HTML مستقلة يمكن تقديمها على خادم لتوليد بيانات عشوائية.

Pour utiliser l'interface HTML :

1. Copiez le fichier `index.html` dans le répertoire `examples/`
2. Servez le fichier sur votre serveur web préféré
3. Ouvrez l'interface dans votre navigateur
4. Sélectionnez les options de génération souhaitées
5. Cliquez sur "Générer" pour obtenir les données

### لاستخدام واجهة HTML:

1. انسخ ملف `index.html` في المجلد `examples/`
2. قدم الملف على خادم الويب المفضل لديك
3. افتح الواجهة في متصفحك
4. حدد خيارات التوليد المطلوبة
5. انقر على "توليد" للحصول على البيانات

Exemple avec un serveur Node.js simple :

```js
var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req, res) {
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'examples/index.html'), function(err, data) {
            if (err) {
                res.writeHead(500);
                res.end('Erreur du serveur');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end('Non trouvé');
    }
});

server.listen(3000, function() {
    console.log('Serveur en cours d\'exécution sur http://localhost:3000');
});
```

## Tests

    npm install .
    make test

Vous pouvez consulter un rapport de couverture de code généré dans coverage/lcov-report/index.html.

## Construction de wahmee.js

faker utilise [gulp](http://gulpjs.com/) pour automatiser son processus de construction. L'exécution de la commande de construction suivante générera de nouvelles constructions de navigateur, de la documentation et des exemples de code pour le projet.

```
npm run-script build
```

## Construction de JSDocs

```
npm run-script doc
```

## Calendrier de publication de version

wahmee.js est un projet populaire utilisé par de nombreuses organisations et personnes dans des environnements de production. Les versions majeures et mineures sont généralement publiées mensuellement. Les corrections de bugs sont traitées par gravité et corrigées dès que possible.

Si vous avez besoin de la version absolument la plus récente de `wahmee.js`, la branche `master` à http://github.com/marak/wahmee.js/ devrait toujours être à jour et fonctionnelle.

## Mainteneur

#### Marak Squires

wahmee.js - Copyright (c) 2017
Marak Squires
http://github.com/marak/wahmee.js/

wahmee.js a été inspiré par et a utilisé des définitions de données de :

 * https://github.com/stympy/faker/ - Copyright (c) 2007-2010 Benjamin Curtis
 * http://search.cpan.org/~jasonk/Data-Faker-0.07/ - Copyright 2004-2005 by Jason Kohles

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
