(function () {
    "use strict";
    var classList = require("../vendor/classList.js");
    classList.shim();
    
    exports.initialize = function initialize(defaultElement, elementList, className) {
        elementList.forEach(function(element) {
            element.classList.add(className);
        });
        
        defaultElement.classList.remove(className);
    };
    
}());