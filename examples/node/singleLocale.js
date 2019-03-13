var wahmee = require('../../index');
var faker = wahmee; // Backward compatibility alias

wahmee.locale = "en";
console.log(faker.name.findName());

wahmee.locale = "uk";

console.log(faker.name.findName());