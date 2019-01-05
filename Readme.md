# faker.js - Générateur de données factuelles en arabe et français pour le navigateur et Node.js

![Faker.js](http://imgur.com/KiinQ.png)

## Description

Cette version de faker.js est une version spécialisée qui génère exclusivement des données en arabe et en français. Elle est conçue pour fonctionner à la fois dans le navigateur et dans Node.js.

### الوصف
هذه النسخة من faker.js هي نسخة متخصصة تولد حصراً البيانات باللغة العربية والفرنسية. مصممة للعمل في المتصفح و Node.js.

## Démo

[https://cdn.rawgit.com/Marak/faker.js/master/examples/browser/index.html](https://cdn.rawgit.com/Marak/faker.js/master/examples/browser/index.html)

## Utilisation

### Navigateur
```html
    <script src = "faker.js" type = "text/javascript"></script>
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
    var faker = require('faker');

    // En français
    var randomName = faker.name.findName(); // Pierre Martin
    var randomEmail = faker.internet.email(); // pierre.martin@email.fr
    var randomCard = faker.helpers.createCard(); // carte de contact aléatoire

    // En arabe
    faker.locale = "ar";
    var randomName = faker.name.findName(); // أحمد محمد
    var randomEmail = faker.internet.email(); // ahmed.mohammed@email.com
    var randomCard = faker.helpers.createCard(); // بطاقة اتصال عشوائية
```

## API


### Faker.fake()

faker.js contient une méthode de générateur très utile `Faker.fake` pour combiner les méthodes de l'API faker en utilisant un format de chaîne mustache.

**Exemple :**

``` js
console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
// En français: "Dupont, Marie Mme."
// En arabe: "أحمد، محمد السيد"
```

Cela interpolera la chaîne de format avec la valeur des méthodes `name.lastName()`, `name.firstName()` et `name.suffix()`

### JSDoc API Browser

[http://marak.github.io/faker.js/](http://marak.github.io/faker.js/)

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

### Paquets de localisation individuels

Par défaut, l'exigence de `faker` inclura toutes les données de localisation.

Dans un environnement de production, vous pouvez souhaiter inclure uniquement les données de localisation pour une langue spécifique.

```js
// Charge uniquement la langue française
var faker = require('faker/locale/fr');

// Charge uniquement la langue arabe
var faker = require('faker/locale/ar');
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

## Construction de faker.js

faker utilise [gulp](http://gulpjs.com/) pour automatiser son processus de construction. L'exécution de la commande de construction suivante générera de nouvelles constructions de navigateur, de la documentation et des exemples de code pour le projet.

```
npm run-script build
```

## Construction de JSDocs

```
npm run-script doc
```

## Calendrier de publication de version

faker.js est un projet populaire utilisé par de nombreuses organisations et personnes dans des environnements de production. Les versions majeures et mineures sont généralement publiées mensuellement. Les corrections de bugs sont traitées par gravité et corrigées dès que possible.

Si vous avez besoin de la version absolument la plus récente de `faker.js`, la branche `master` à http://github.com/marak/faker.js/ devrait toujours être à jour et fonctionnelle.

## Mainteneur

#### Marak Squires

faker.js - Copyright (c) 2017
Marak Squires
http://github.com/marak/faker.js/

faker.js a été inspiré par et a utilisé des définitions de données de :

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
