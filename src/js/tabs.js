(function () {
    "use strict";
    var classList = require("../vendor/classList.js");
    classList.shim();
    
    exports.initialize = function initialize(options) {
        checkOptions(options.tabs, "options.tabs");
        checkOptions(options.content, "options.content");
        checkOptions(options.defaultTab, "options.defaultTab");
        checkOptions(options.activeTabClass, "options.activeTabClass");
        checkOptions(options.hiddenContentClass, "options.hiddenContentClass");

        showTab(options.defaultTab, options);

    };
         
    function showTab(tabToShow, options) {
        var activeIndex = options.tabs.indexOf(options.defaultTab);
        var contentToShow = options.content[activeIndex];
        
        options.content.forEach(function(content) {
            content.classList.add(options.hiddenContentClass);
        });
        
        contentToShow.classList.remove(options.hiddenContentClass);
        options.defaultTab.classList.add(options.activeTabClass);
    }

    function checkOptions(option, name) {
        if (option === undefined) throw new Error("Expected " + name);
    }
    
}());