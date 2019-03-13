// Test suite for the finance module crypto methods
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

var wahmee = require('../index');
var faker = wahmee;

describe('Finance Module - Crypto Methods', function() {
  
  describe('litecoinAddress()', function() {
    it('should generate a random Litecoin address', function() {
      var address = faker.finance.litecoinAddress();
      expect(address).to.be.a('string');
      expect(address.length).to.be.at.least(33);
      expect(address.length).to.be.at.most(34);
      expect(address).to.match(/^[LM3][1-9A-HJ-NP-Za-km-z]{26,33}$/);
    });
    
    it('should generate different Litecoin addresses', function() {
      var addresses = [];
      for (var i = 0; i < 50; i++) {
        addresses.push(faker.finance.litecoinAddress());
      }
      var uniqueAddresses = new Set(addresses);
      expect(uniqueAddresses.size).to.be.greaterThan(1);
    });
    
    it('should start with valid Litecoin prefix', function() {
      var address = faker.finance.litecoinAddress();
      expect(address[0]).to.be.oneOf(['L', 'M', '3']);
    });
  });
  
  describe('rippleAddress()', function() {
    it('should generate a random Ripple address', function() {
      var address = faker.finance.rippleAddress();
      expect(address).to.be.a('string');
      expect(address.length).to.be.at.least(25);
      expect(address.length).to.be.at.most(35);
      expect(address).to.match(/^r[1-9A-HJ-NP-Za-km-z]{24,34}$/);
    });
    
    it('should generate different Ripple addresses', function() {
      var addresses = [];
      for (var i = 0; i < 50; i++) {
        addresses.push(faker.finance.rippleAddress());
      }
      var uniqueAddresses = new Set(addresses);
      expect(uniqueAddresses.size).to.be.greaterThan(1);
    });
    
    it('should start with r', function() {
      var address = faker.finance.rippleAddress();
      expect(address[0]).to.equal('r');
    });
  });
  
  describe('dashAddress()', function() {
    it('should generate a random Dash address', function() {
      var address = faker.finance.dashAddress();
      expect(address).to.be.a('string');
      expect(address.length).to.equal(34);
      expect(address).to.match(/^X[1-9A-HJ-NP-Za-km-z]{33}$/);
    });
    
    it('should generate different Dash addresses', function() {
      var addresses = [];
      for (var i = 0; i < 50; i++) {
        addresses.push(faker.finance.dashAddress());
      }
      var uniqueAddresses = new Set(addresses);
      expect(uniqueAddresses.size).to.be.greaterThan(1);
    });
    
    it('should start with X', function() {
      var address = faker.finance.dashAddress();
      expect(address[0]).to.equal('X');
    });
  });
  
  describe('cryptoWalletType()', function() {
    it('should generate a random wallet type', function() {
      var walletType = faker.finance.cryptoWalletType();
      expect(walletType).to.be.a('string');
      expect(walletType.length).to.be.greaterThan(0);
    });
    
    it('should generate different wallet types', function() {
      var walletTypes = [];
      for (var i = 0; i < 50; i++) {
        walletTypes.push(faker.finance.cryptoWalletType());
      }
      var uniqueWalletTypes = new Set(walletTypes);
      expect(uniqueWalletTypes.size).to.be.greaterThan(1);
    });
    
    it('should work with French locale', function() {
      faker.locale = 'fr';
      var walletType = faker.finance.cryptoWalletType();
      expect(walletType).to.be.a('string');
      expect(walletType.length).to.be.greaterThan(0);
    });
    
    it('should work with Arabic locale', function() {
      faker.locale = 'ar';
      var walletType = faker.finance.cryptoWalletType();
      expect(walletType).to.be.a('string');
      expect(walletType.length).to.be.greaterThan(0);
    });
  });
  
  describe('cryptoTransactionHash()', function() {
    it('should generate a random transaction hash', function() {
      var hash = faker.finance.cryptoTransactionHash();
      expect(hash).to.be.a('string');
      expect(hash.length).to.equal(66);
      expect(hash).to.match(/^0x[0-9a-f]{64}$/);
    });
    
    it('should generate different transaction hashes', function() {
      var hashes = [];
      for (var i = 0; i < 50; i++) {
        hashes.push(faker.finance.cryptoTransactionHash());
      }
      var uniqueHashes = new Set(hashes);
      expect(uniqueHashes.size).to.be.greaterThan(1);
    });
    
    it('should start with 0x', function() {
      var hash = faker.finance.cryptoTransactionHash();
      expect(hash.substring(0, 2)).to.equal('0x');
    });
  });
  
  describe('Integration tests', function() {
    it('should generate a complete crypto transaction', function() {
      faker.locale = 'fr';
      var transaction = {
        litecoinAddress: faker.finance.litecoinAddress(),
        rippleAddress: faker.finance.rippleAddress(),
        dashAddress: faker.finance.dashAddress(),
        walletType: faker.finance.cryptoWalletType(),
        transactionHash: faker.finance.cryptoTransactionHash(),
        currency: faker.finance.currencyCode()
      };
      
      expect(transaction.litecoinAddress).to.be.a('string');
      expect(transaction.rippleAddress).to.be.a('string');
      expect(transaction.dashAddress).to.be.a('string');
      expect(transaction.walletType).to.be.a('string');
      expect(transaction.transactionHash).to.be.a('string');
      expect(transaction.currency).to.be.a('string');
    });
    
    it('should generate multiple crypto transactions', function() {
      faker.locale = 'fr';
      var transactions = [];
      for (var i = 0; i < 10; i++) {
        transactions.push({
          litecoinAddress: faker.finance.litecoinAddress(),
          rippleAddress: faker.finance.rippleAddress(),
          dashAddress: faker.finance.dashAddress(),
          walletType: faker.finance.cryptoWalletType(),
          transactionHash: faker.finance.cryptoTransactionHash(),
          currency: faker.finance.currencyCode()
        });
      }
      
      expect(transactions).to.have.lengthOf(10);
      transactions.forEach(function(transaction) {
        expect(transaction.litecoinAddress).to.be.a('string');
        expect(transaction.rippleAddress).to.be.a('string');
        expect(transaction.dashAddress).to.be.a('string');
        expect(transaction.walletType).to.be.a('string');
        expect(transaction.transactionHash).to.be.a('string');
        expect(transaction.currency).to.be.a('string');
      });
    });
  });
  
  describe('Multilingual tests', function() {
    it('should generate French crypto data', function() {
      faker.locale = 'fr';
      var data = {
        litecoinAddress: faker.finance.litecoinAddress(),
        rippleAddress: faker.finance.rippleAddress(),
        dashAddress: faker.finance.dashAddress(),
        walletType: faker.finance.cryptoWalletType(),
        transactionHash: faker.finance.cryptoTransactionHash()
      };
      
      expect(data.litecoinAddress).to.be.a('string');
      expect(data.rippleAddress).to.be.a('string');
      expect(data.dashAddress).to.be.a('string');
      expect(data.walletType).to.be.a('string');
      expect(data.transactionHash).to.be.a('string');
    });
    
    it('should generate Arabic crypto data', function() {
      faker.locale = 'ar';
      var data = {
        litecoinAddress: faker.finance.litecoinAddress(),
        rippleAddress: faker.finance.rippleAddress(),
        dashAddress: faker.finance.dashAddress(),
        walletType: faker.finance.cryptoWalletType(),
        transactionHash: faker.finance.cryptoTransactionHash()
      };
      
      expect(data.litecoinAddress).to.be.a('string');
      expect(data.rippleAddress).to.be.a('string');
      expect(data.dashAddress).to.be.a('string');
      expect(data.walletType).to.be.a('string');
      expect(data.transactionHash).to.be.a('string');
    });
    
    it('should switch between locales correctly', function() {
      faker.locale = 'fr';
      var frWallet = faker.finance.cryptoWalletType();
      
      faker.locale = 'ar';
      var arWallet = faker.finance.cryptoWalletType();
      
      expect(frWallet).to.be.a('string');
      expect(arWallet).to.be.a('string');
    });
  });
});
