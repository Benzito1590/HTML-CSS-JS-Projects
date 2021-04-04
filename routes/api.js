/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res) {
      try {
        var input = req.query.input;
        var initNum = convertHandler.getNum(input);
        var initUnit = convertHandler.getUnit(input);

        if (!initNum && !initUnit) {
          res.status(400).json({
            error: 'invalid number and unit'
          });
          return;
        } else if (!initUnit) {
          res.status(400).json({
            error: 'invalid unit'
          });
          return;
        } else if (!initNum) {
          res.status(400).json({
            error: 'invalid number'
          });
          return;
        }

        var returnNum = convertHandler.convert(initNum, initUnit);
        var returnUnit = convertHandler.getReturnUnit(initUnit);
        var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

        res.json({
          initNum,
          initUnit,
          returnNum,
          returnUnit,
          string: toString
        });
      } catch (err) {
        res.json({
          error: 'Unexpected error. Please check your input.'
        })
      }
    });

};
