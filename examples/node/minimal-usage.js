#!/usr/bin/env node

var wahmee = require('../../index');
var faker = wahmee; // Backward compatibility alias
faker.locale = "en";

//console.log(faker.lorem.sentences())

console.log(faker.name.findName())
return;
//console.log(faker.address)
console.log(faker.internet.email())
console.log(faker.date.recent())
console.log(faker.helpers.contextualCard());

faker.locale = "uk";

console.log(faker.helpers.contextualCard());