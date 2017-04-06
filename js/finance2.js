(function(angular) {
  'use strict';
angular.module('finance2', [])
  .factory('currencyConverter', function() {
    console.log("Factory Called");
    var currencies = ['USD', 'EUR', 'CNY'];
    var usdToForeignRates = {
      USD: 1,
      EUR: 0.74,
      CNY: 6.09
    };
    var convert = function(amount, inCurr, outCurr) {
      console.log("convert function Called");
      return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
    };

    console.log("converter value returned");
    return {
      currencies: currencies,
      convert: convert
    };
  });
})(window.angular);