/*
*
*
*       Complete the handler logic below
*       
*       
*/
var metricImperial = require('../metric-imperial');

function ConvertHandler() {

  /**
   * Extract number part from the input query
   *
   * @param input
   * @returns {any|false|number}
   */
  this.getNum = function(input) {
    // If no number is provided, 1 is returned
    if (! parseFloat(input)) {
      return 1;
    }

    var inputAmount = input.match(/(^\d+\.?\d*[\/]?\d*\.?\d*)?([a-zA-Z]+)/)[1];

    // If input amount doesn't match the expected format, return undefined
    if (!inputAmount) {
      return false;
    }

    // Evaluate the input amount and return the result
    return +eval(inputAmount).toFixed(5);
  };

  /**
   * Get unit part from the input query
   * @param input
   * @returns {boolean|*}
   */
  this.getUnit = function(input) {
    var inputUnit = input.match(/(^\d+\.?\d*[\/]?\d*\.?\d*)?([a-zA-Z]+)/)[2];

    // if invalid or no input unit return false
    if (!inputUnit) {
      return false;
    }

    // if input unit doesn't belongs to valid units list, return false
    if (Object.keys(metricImperial.validUnits).indexOf(inputUnit.toLowerCase()) === -1) {
      return false;
    }

    // return input unit
    return inputUnit.toLowerCase();
  };

  /**
   * Return metric or imperial counterpart of provided unit
   *
   * @param initUnit
   * @returns {string}
   */
  this.getReturnUnit = function(initUnit) {
    return metricImperial.convert[initUnit].to;
  };

  /**
   * Get fullname of result unit
   *
   * @param unit
   * @returns {string}
   */
  this.spellOutUnit = function(unit) {
    return metricImperial.validUnits[unit].singular;
  };

  /**
   * Convert given metric/imperial amount to its counterpart unit
   *
   * @param initNum
   * @param initUnit
   * @returns {number}
   */
  this.convert = function(initNum, initUnit) {
    var convertedNum = metricImperial.convert[initUnit].ratio * initNum;

    return +convertedNum.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var units = metricImperial.validUnits;
    var initSpellUnit = (+initNum === 1) ? units[initUnit].singular : units[initUnit].plural;
    var returnSpellUnit = (+returnNum === 1) ? units[returnUnit].singular : units[returnUnit].plural;
    return initNum + ' ' +  initSpellUnit + ' converts to ' + returnNum + ' ' + returnSpellUnit;
  };
  
}

module.exports = ConvertHandler;
