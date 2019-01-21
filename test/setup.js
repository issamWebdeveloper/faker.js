// Test setup file for Mocha
// This file is executed before running any tests

// Set a default locale for tests
var wahmee = require('../wahmee.js');
wahmee.locale = 'fr';

// Global before hook to reset locale before each test suite
beforeEach(function() {
  // Reset to default locale before each test
  wahmee.locale = 'fr';
});
