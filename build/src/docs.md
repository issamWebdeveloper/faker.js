# Wahmee.js (وهمي) - Generate massive amounts of fake data in browser and node.js

![Wahmee.js](http://imgur.com/KiinQ.png)

[![Build Status](https://travis-ci.org/Marak/wahmee.js.svg?branch=master)](https://travis-ci.org/Marak/wahmee.js)

[![npm version](https://badge.fury.io/js/wahmee.svg)](http://badge.fury.io/js/wahmee)

## Demo

[https://cdn.rawgit.com/Marak/wahmee.js/master/examples/browser/index.html](https://cdn.rawgit.com/Marak/wahmee.js/master/examples/browser/index.html)

## Hosted API Microservice

[http://wahmee.hook.io](http://wahmee.hook.io/)
 - Supports all Wahmee API Methods
 - Full-Featured Microservice
 - Hosted by [hook.io](http://hook.io)

```bash
curl http://wahmee.hook.io?property=name.findName&locale=de
```

## Usage

### Browser
```html
    <script src = "wahmee.js" type = "text/javascript"></script>
    <script>
      var randomName = wahmee.name.findName(); // Caitlyn Kerluke
      var randomEmail = wahmee.internet.email(); // Rusty@arne.info
      var randomCard = wahmee.helpers.createCard(); // random contact card containing many properties
    </script>
```
### Node.js
```js
    var wahmee = require('wahmee');

    var randomName = wahmee.name.findName(); // Rowan Nikolaus
    var randomEmail = wahmee.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = wahmee.helpers.createCard(); // random contact card containing many properties
```
## API


### Wahmee.fake()

wahmee.js contains a super useful generator method `Wahmee.fake` for combining wahmee API methods using a mustache string format.

**Example:**

{{=<% %>=}}
``` js
console.log(wahmee.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
// outputs: "Marks, Dean Sr."
```
<%={{ }}=%>

This will interpolate format string with value of methods `name.lastName()`, `name.firstName()`, and `name.suffix()`

### JSDoc API Browser

[http://marak.github.io/wahmee.js/](http://marak.github.io/wahmee.js/)

### API Methods

{{{API}}}

## Localization

As of version `v2.0.0` wahmee.js has support for multiple localities.

The default language locale is set to English.

Setting a new locale is simple:

```js
// sets locale to de
wahmee.locale = "de";
```

{{LOCALES}}

### Individual Localization Packages

As of vesion `v3.0.0` wahmee.js supports incremental loading of locales. 

By default, requiring `wahmee` will include *all* locale data.

In a production environment, you may only want to include locale data for a specific set of locales.

```js
// loads only de locale
var wahmee = require('wahmee/locale/de');
```

## Setting a randomness seed

If you want consistent results, you can set your own seed:

```js
wahmee.seed(123);

var firstRandom = wahmee.random.number();

// Setting seed again resets sequence.
wahmee.seed(123);

var secondRandom = wahmee.random.number();

console.log(firstRandom === secondRandom);
```

## Tests

    npm install .
    make test

You can view a code coverage report generated in coverage/lcov-report/index.html.

## Projects Built with wahmee.js

### Fake JSON Schema

Use wahmee generators to populate JSON Schema samples.
See: https://github.com/pateketrueke/json-schema-faker/

### CLI

Run wahmee generators from Command Line.
See: https://github.com/lestoni/faker-cli

### Mocker data generator

Minimal JSON data generator, wahmeeJs is one of the providers.
See:  https://github.com/danibram/mocker-data-generator

**Want to see your project added here? Let us know!**

### Meteor

#### Meteor Installation

```
meteor add practicalmeteor:wahmee
```

#### Meteor Usage, both client and server

```js
var randomName = wahmee.name.findName(); // Rowan Nikolaus
var randomEmail = wahmee.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = wahmee.helpers.createCard(); // random contact card containing many properties
```

## Building wahmee.js

wahmee uses [gulp](http://gulpjs.com/) to automate it's build process. Running following build command will generate new browser builds, documentation, and code examples for project.

```
npm run-script build
```

## Building JSDocs

```
npm run-script doc
```

## Version Release Schedule

wahmee.js is a popular project used by many organizations and individuals in production settings. Major and Minor version releases are generally on a monthly schedule. Bugs fixes are addressed by severity and fixed as soon as possible.

If you require absolute latest version of `wahmee.js` `master` branch @ http://github.com/marak/wahmee.js/ should always be up to date and working.

## Maintainer

#### Marak Squires

wahmee.js - Copyright (c) 2017
Marak Squires
http://github.com/marak/wahmee.js/

wahmee.js was inspired by and has used data definitions from:

 * https://github.com/stympy/faker/ - Copyright (c) 2007-2010 Benjamin Curtis
 * http://search.cpan.org/~jasonk/Data-Faker-0.07/ - Copyright 2004-2005 by Jason Kohles

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation rights to use, copy, modify, merge, publish,
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
