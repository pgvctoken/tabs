(function () {
    "use strict";

    function add(a, b) {
        return a + b;
    }
    
    // adds add to exports and assigns function add value
    exports.add = add;
}());