(function () {
    "use strict";
    var assert = require("./assert.js");
    var tabs = require("./tabs.js");
    
    describe("Tabs", function() {
        
       it("has an API", function() {
        
       });
        
        it("hides an element", function() {
            // arange
            var element = addElement("div");
            // act
            tabs.initialize(element);
        
            // assert
            assert.equal(getDisplayProperty(element), "none");
            
            //reset
            removeElement(element);
        });
        
        function addElement(tagName) {
            var element = document.createElement(tagName);
            document.body.appendChild(element);
            return element;
        }
        
        function getDisplayProperty(element) {
            var styles = getComputedStyle(element);
            return styles.getPropertyValue("display");
            
        }
        
        function removeElement(element) {
            element.parentNode.removeChild(element);            
        }
        
    });
    
    
}());