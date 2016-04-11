(function () {
    "use strict";
    var assert = require("./assert.js");
    var tabs = require("./tabs.js");
    
    describe("Tabs", function() {
        
       it("has an API", function() {
        
       });
        
        it("sets a class on an element without an existing class", function() {
            // arange
            var element = addElement("div");
            
            // act
            tabs.initialize(element, "hide");
        
            var currentClasses = "existingClass";
            // assert
            assert.equal(getElementClass(element), "hide");
            
            //reset
            //removeElement(element);
        });
        
        
        it("sets a class on an element with an existing class", function() {
            // arange
            var element = addElement("div");
            element.setAttribute("class","existingClass");
            
            // act
            tabs.initialize(element, "hide");
        
            var currentClasses = "existingClass";
            // assert
            assert.equal(getElementClass(element), currentClasses + " " +"hide");
            
            //reset
            //removeElement(element);
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