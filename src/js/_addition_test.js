(function () {
    "use strict";
    var addition = require("./addition.js");
    var assert = require("./assert.js");
    
    describe("Additon", function() {
        
       it("adds positive numbers", function() {
            assert.equal(addition.add(3,7), 10);         
       });
        
    });
    
}());