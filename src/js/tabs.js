(function () {
    "use strict";
    var classList = require("../vendor/classList.js");
    classList.shim();
    
    exports.initialize = function initialize(options) {
        var defaultElement = options.default;
        var elementList = options.content;
        var className = options.contentHideClass;
        var tabs = options.tabs;
        var activeTabClass = options.activeTabClass;
        
        if (defaultElement === undefined) throw new Error("Expected options.default");
        if (elementList === undefined) throw new Error("Expected options.content");
        if (className === undefined) throw new Error("Expected options.contentHideClass");
        if (tabs === undefined) throw new Error("Expected options.tabs");
        if (activeTabClass === undefined) throw new Error("Expected options.activeTabClass");
                
        elementList.forEach(function(element) {
            element.classList.add(className);
        });
        
        defaultElement.classList.remove(className);
        if (tabs !== undefined) tabs[0].classList.add(activeTabClass);
    };
    
}());