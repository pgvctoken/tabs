// isolation module for chai - gives one spot to change the assert
// source code
(function() {
   "use strict";
   
   var assert = require("../vendor/chai-3.5.0.js").assert;
   
   module.exports = assert; 
}());