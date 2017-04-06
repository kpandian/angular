(function(angular) {
  'use strict';
angular.module('invoice2', ['finance2'])
  .controller('InvoiceController', ['currencyConverter', function InvoiceController(currencyConverter) {
    console.log("invoice controller called");
    this.qty = 1;
    this.cost = 2;
    this.inCurr = 'EUR';
    this.currencies = currencyConverter.currencies;

    this.total = function total(outCurr) {
      console.log("total function called");
      return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
    };
    this.pay = function pay() {
      window.alert('Thanks!');
    };
  }]);
})(window.angular);