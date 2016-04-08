(function () {
    "use strict";
    var math = require("./math.js");
    var assert = require("./assert.js");
    
    describe("Additon", function() {
        
       it("adds positive numbers", function() {
            assert.equal(math.add(3,7), 10);         
       });
        
    });
    
    describe("Multiplication", function() {
       it("multiplies two numbers", function() {
          assert.equal(math.multiply(3,2), 6); 
       }); 
    });
    
}());