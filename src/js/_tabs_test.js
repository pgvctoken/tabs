(function () {
    "use strict";
    var assert = require("./assert.js");
    var tabs = require("./tabs.js");
    
    describe("Tabs", function() {
        
       it("has an API", function() {
        
       });
        
        it("sets a class on an element", function() {
            // arange
            var someElementClass = "";
            var element = addElement("div");
            // act
            tabs.initialize(element, "hide");
        
            // assert
            assert.equal(getElementClass(element), "hide");
            
            //reset
            removeElement(element);
        });
        
        function getElementClass(element) {
            return element.getAttribute("class");
        }
        
        function addElement(tagName) {
            var element = document.createElement(tagName);
            document.body.appendChild(element);
            return element;
        }
        
        function removeElement(element) {
            element.parentNode.removeChild(element);            
        }
        
    });
    
    
}());