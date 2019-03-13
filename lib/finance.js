/**
 * @namespace faker.finance
 */
var Finance = function (faker) {
  var ibanLib = require("./iban");
  var Helpers = faker.helpers,
      self = this;

  /**
   * account
   *
   * @method faker.finance.account
   * @param {number} length
   */
  self.account = function (length) {

      length = length || 8;

      var template = '';

      for (var i = 0; i < length; i++) {
          template = template + '#';
      }
      length = null;
      return Helpers.replaceSymbolWithNumber(template);
  };

  /**
   * accountName
   *
   * @method faker.finance.accountName
   */
  self.accountName = function () {

      return [Helpers.randomize(faker.definitions.finance.account_type), 'Account'].join(' ');
  };

  /**
   * routingNumber
   *
   * @method faker.finance.routingNumber
   */
  self.routingNumber = function () {

      var routingNumber = Helpers.replaceSymbolWithNumber('########');

      // Modules 10 straight summation.
      var sum = 0;

      for (var i = 0; i < routingNumber.length; i += 3) {
        sum += Number(routingNumber[i]) * 3;
        sum += Number(routingNumber[i + 1]) * 7;
        sum += Number(routingNumber[i + 2]) || 0;
      }

      return routingNumber + (Math.ceil(sum / 10) * 10 - sum);
  }

  /**
   * mask
   *
   * @method faker.finance.mask
   * @param {number} length
   * @param {boolean} parens
   * @param {boolean} ellipsis
   */
  self.mask = function (length, parens, ellipsis) {

      //set defaults
      length = (length == 0 || !length || typeof length == 'undefined') ? 4 : length;
      parens = (parens === null) ? true : parens;
      ellipsis = (ellipsis === null) ? true : ellipsis;

      //create a template for length
      var template = '';

      for (var i = 0; i < length; i++) {
          template = template + '#';
      }

      //prefix with ellipsis
      template = (ellipsis) ? ['...', template].join('') : template;

      template = (parens) ? ['(', template, ')'].join('') : template;

      //generate random numbers
      template = Helpers.replaceSymbolWithNumber(template);

      return template;
  };

  //min and max take in minimum and maximum amounts, dec is the decimal place you want rounded to, symbol is $, €, £, etc
  //NOTE: this returns a string representation of the value, if you want a number use parseFloat and no symbol

  /**
   * amount
   *
   * @method faker.finance.amount
   * @param {number} min
   * @param {number} max
   * @param {number} dec
   * @param {string} symbol
   *
   * @return {string}
   */
  self.amount = function (min, max, dec, symbol) {

      min = min || 0;
      max = max || 1000;
      dec = dec === undefined ? 2 : dec;
      symbol = symbol || '';
      var randValue = faker.random.number({ max: max, min: min, precision: Math.pow(10, -dec) });

      return symbol + randValue.toFixed(dec);
  };

  /**
   * transactionType
   *
   * @method faker.finance.transactionType
   */
  self.transactionType = function () {
      return Helpers.randomize(faker.definitions.finance.transaction_type);
  };

  /**
   * currencyCode
   *
   * @method faker.finance.currencyCode
   */
  self.currencyCode = function () {
      return faker.random.objectElement(faker.definitions.finance.currency)['code'];
  };

  /**
   * currencyName
   *
   * @method faker.finance.currencyName
   */
  self.currencyName = function () {
      return faker.random.objectElement(faker.definitions.finance.currency, 'key');
  };

  /**
   * currencySymbol
   *
   * @method faker.finance.currencySymbol
   */
  self.currencySymbol = function () {
      var symbol;

      while (!symbol) {
          symbol = faker.random.objectElement(faker.definitions.finance.currency)['symbol'];
      }
      return symbol;
  };

  /**
   * bitcoinAddress
   *
   * @method  faker.finance.bitcoinAddress
   */
  self.bitcoinAddress = function () {
    var addressLength = faker.random.number({ min: 25, max: 34 });

    var address = faker.random.arrayElement(['1', '3']);

    for (var i = 0; i < addressLength - 1; i++)
      address += faker.random.arrayElement('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'.split(''));

    return address;
  }

  /**
   * Credit card number
   * @method faker.finance.creditCardNumber
   * @param {string} provider | scheme
  */
  self.creditCardNumber = function(provider){
    provider = provider || "";
    var format, formats;
    var localeFormat = faker.definitions.finance.credit_card;
    if (provider in localeFormat) {
      formats = localeFormat[provider]; // there chould be multiple formats
      if (typeof formats === "string") {
        format = formats;
      } else {
        format = faker.random.arrayElement(formats);
      }
    } else if (provider.match(/#/)) { // The user chose an optional scheme
      format = provider;
    } else { // Choose a random provider
      if (typeof localeFormat === 'string') {
        format = localeFormat;
      } else if( typeof localeFormat === "object") {
        // Credit cards are in a object structure
        formats = faker.random.objectElement(localeFormat, "value"); // There chould be multiple formats
        if (typeof formats === "string") {
          format = formats;
        } else {
          format = faker.random.arrayElement(formats);
        }
      }
    }
    format = format.replace(/\//g,"")
    return Helpers.replaceCreditCardSymbols(format);
  };
  /**
   * Credit card CVV
   * @method faker.finance.creditCardNumber
  */
  self.creditCardCVV = function() {
    var cvv = "";
    for (var i = 0; i < 3; i++) {
      cvv += faker.random.number({max:9}).toString();
    }
    return cvv;
  };

  /**
   * ethereumAddress
   *
   * @method  faker.finance.ethereumAddress
   */
  self.ethereumAddress = function () {
    var address = faker.random.hexaDecimal(40);

    return address;
  };

  /**
   * iban
   *
   * @method  faker.finance.iban
   */
  self.iban = function (formatted) {
      var ibanFormat = faker.random.arrayElement(ibanLib.formats);
      var s = "";
      var count = 0;
      for (var b = 0; b < ibanFormat.bban.length; b++) {
          var bban = ibanFormat.bban[b];
          var c = bban.count;
          count += bban.count;
          while (c > 0) {
              if (bban.type == "a") {
                  s += faker.random.arrayElement(ibanLib.alpha);
              } else if (bban.type == "c") {
                  if (faker.random.number(100) < 80) {
                      s += faker.random.number(9);
                  } else {
                      s += faker.random.arrayElement(ibanLib.alpha);
                  }
              } else {
                  if (c >= 3 && faker.random.number(100) < 30) {
                      if (faker.random.boolean()) {
                          s += faker.random.arrayElement(ibanLib.pattern100);
                          c -= 2;
                      } else {
                          s += faker.random.arrayElement(ibanLib.pattern10);
                          c--;
                      }
                  } else {
                      s += faker.random.number(9);
                  }
              }
              c--;
          }
          s = s.substring(0, count);
      }
      var checksum = 98 - ibanLib.mod97(ibanLib.toDigitString(s + ibanFormat.country + "00"));
      if (checksum < 10) {
          checksum = "0" + checksum;
      }
      var iban = ibanFormat.country + checksum + s;
      return formatted ? iban.match(/.{1,4}/g).join(" ") : iban;
  };

  /**
   * bic
   *
   * @method  faker.finance.bic
   */
  self.bic = function () {
      var vowels = ["A", "E", "I", "O", "U"];
      var prob = faker.random.number(100);
      return Helpers.replaceSymbols("???") +
          faker.random.arrayElement(vowels) +
          faker.random.arrayElement(ibanLib.iso3166) +
          Helpers.replaceSymbols("?") + "1" +
          (prob < 10 ?
              Helpers.replaceSymbols("?" + faker.random.arrayElement(vowels) + "?") :
          prob < 40 ?
              Helpers.replaceSymbols("###") : "");
  };
};

/**
 * litecoinAddress
 *
 * @method faker.finance.litecoinAddress
 * @description Generates a random Litecoin address following Litecoin address format.
 * Litecoin addresses typically start with 'L' or 'M' or '3' and are 33-34 characters long.
 *
 * @returns {string} A random Litecoin address.
 *
 * @example
 * // Returns a random Litecoin address
 * var address = faker.finance.litecoinAddress();
 * // Example output: "LZ7yWpZx6R5fD8E5Z8f5E9J8f5E"
 */
self.litecoinAddress = function () {
  var addressLength = faker.random.number({ min: 33, max: 34 });
  var address = faker.random.arrayElement(['L', 'M', '3']);
  
  for (var i = 0; i < addressLength - 1; i++) {
    address += faker.random.arrayElement('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'.split(''));
  }
  
  return address;
};

/**
 * rippleAddress
 *
 * @method faker.finance.rippleAddress
 * @description Generates a random Ripple address following Ripple address format.
 * Ripple addresses typically start with 'r' and are 25-35 characters long.
 *
 * @returns {string} A random Ripple address.
 *
 * @example
 * // Returns a random Ripple address
 * var address = faker.finance.rippleAddress();
 * // Example output: "rL4qWpZx6R5fD8E5Z8f5E9J8f5E"
 */
self.rippleAddress = function () {
  var addressLength = faker.random.number({ min: 25, max: 35 });
  var address = 'r';
  
  for (var i = 0; i < addressLength - 1; i++) {
    address += faker.random.arrayElement('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'.split(''));
  }
  
  return address;
};

/**
 * dashAddress
 *
 * @method faker.finance.dashAddress
 * @description Generates a random Dash address following Dash address format.
 * Dash addresses typically start with 'X' and are 34 characters long.
 *
 * @returns {string} A random Dash address.
 *
 * @example
 * // Returns a random Dash address
 * var address = faker.finance.dashAddress();
 * // Example output: "X7yWpZx6R5fD8E5Z8f5E9J8f5E"
 */
self.dashAddress = function () {
  var address = 'X';
  
  for (var i = 0; i < 33; i++) {
    address += faker.random.arrayElement('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'.split(''));
  }
  
  return address;
};

/**
 * cryptoWalletType
 *
 * @method faker.finance.cryptoWalletType
 * @description Returns a random cryptocurrency wallet type from current locale's finance definitions.
 * Wallet types include various types of cryptocurrency wallets.
 * The wallet types are localized according to selected locale.
 *
 * @returns {string} A random cryptocurrency wallet type.
 *
 * @example
 * // Returns a random wallet type in current locale
 * var walletType = faker.finance.cryptoWalletType();
 * // Example output (French): "Portefeuille chaud"
 * // Example output (Arabic): "محفظة ساخنة"
 */
self.cryptoWalletType = function () {
  return faker.random.arrayElement(faker.definitions.finance.wallet_type);
};

/**
 * cryptoTransactionHash
 *
 * @method faker.finance.cryptoTransactionHash
 * @description Generates a random cryptocurrency transaction hash following standard hash format.
 * Transaction hashes are typically 64 characters long (SHA-256) and use hexadecimal characters.
 *
 * @returns {string} A random transaction hash.
 *
 * @example
 * // Returns a random transaction hash
 * var hash = faker.finance.cryptoTransactionHash();
 * // Example output: "0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4bfafe041d8"
 */
self.cryptoTransactionHash = function () {
  var hash = '0x';
  
  for (var i = 0; i < 64; i++) {
    hash += faker.random.arrayElement('0123456789abcdef');
  }
  
  return hash;
};

module['exports'] = Finance;
