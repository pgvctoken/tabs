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
        handleTabClickEvent(options.tabs, options);
    };
    
    function handleTabClickEvent(tabs, options) {
            tabs.forEach(function (tabElement) {
            tabElement.addEventListener("click", function(){
                showTab(tabElement, options);
            });
        });    
    }
    
    function showTab(tabToShow, options) {
        var activeIndex = options.tabs.indexOf(tabToShow);
        var contentToShow = options.content[activeIndex];
        
        options.content.forEach(function(content) {
            content.classList.add(options.hiddenContentClass);
        });
        options.tabs.forEach(function(tab) {
           tab.classList.remove(options.activeTabClass); 
        });
        
        if (contentToShow.classList.length > 0 ) contentToShow.classList.remove(options.hiddenContentClass);
        tabToShow.classList.add(options.activeTabClass);
    }

    function checkOptions(option, name) {
        if (option === undefined) throw new Error("Expected " + name);
    }
    
}());