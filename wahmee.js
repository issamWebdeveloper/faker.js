// since we are requiring the top level of wahmee, load all locales by default
var Faker = require('./lib');
var wahmee = new Faker({ locales: require('./lib/locales') });
module['exports'] = wahmee;
