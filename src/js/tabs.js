(function () {
    "use strict";
    var classList = require("../vendor/classList.js");
    classList.shim();
    
    exports.initialize = function initialize(options) {
        var tabs = options.tabs;
        var content = options.content;
        var defaultTab = options.defaultTab;
        var activeTabClass = options.activeTabClass;
        var hiddenContentClass = options.hiddenContentClass;

        var activeIndex = findIndexOfDefaultTab(tabs, defaultTab);
        var defaultContent = content[activeIndex];
                
        if (defaultContent === undefined) throw new Error("Expected options.default");
        if (content === undefined) throw new Error("Expected options.content");
        if (hiddenContentClass === undefined) throw new Error("Expected options.contentHideClass");
        if (tabs === undefined) throw new Error("Expected options.tabs");
        if (activeTabClass === undefined) throw new Error("Expected options.activeTabClass");
                
        content.forEach(function(content) {
            content.classList.add(hiddenContentClass);
        });
        
        defaultContent.classList.remove(hiddenContentClass);
        defaultTab.classList.add(activeTabClass);
    };
    
    function findIndexOfDefaultTab(tabs, defaultTab) {
        for (var i = 0; tabs.length; i++) {
            if (tabs[i] === defaultTab) return i;
        }
        throw new Error("didn't find default in list");
    }
    
}());