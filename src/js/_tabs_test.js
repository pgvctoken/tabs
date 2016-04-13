(function () {
    "use strict";
    var assert = require("./assert.js");
    var tabs = require("./tabs.js");
    
    describe("Tabs", function() {
        
        var container;
       
        beforeEach(function(){
            container = document.createElement("div");
            document.body.appendChild(container);
            
        });
        
        afterEach(function(){
            removeElement(container);
        });
        
        it("hides an element by setting a class", function() {
            // arange
            var element = addElement("div");
            
            // act
            tabs.initialize([ element ], "hide");
        
            var currentClasses = "existingClass";
            // assert
            assert.equal(getElementClasses(element), "hide");
            
            //reset
        });
        
        it("hides multiple elements by setting a class", function() {
            var element1 = addElement("div");
            var element2 = addElement("div");    
            var element3 = addElement("div");   
            
            tabs.initialize([ element1, element2, element3 ], "hideMe");
            
            assert.equal(getElementClasses(element1), "hideMe");
            assert.equal(getElementClasses(element2), "hideMe"); 
            assert.equal(getElementClasses(element3), "hideMe");             
        });
        
        
        it("preserves existing classes when adding a class to hide an element", function() {
            // arange
            var element = addElement("div");
            element.setAttribute("class","existingClass");
            
            // act
            tabs.initialize([ element ], "hide");
        
            var currentClasses = "existingClass";
            // assert
            assert.equal(getElementClasses(element), currentClasses + " " +"hide");
            
            //reset
        });
        
        function getElementClasses(element) {
            return element.getAttribute("class");
        }
        
        function addElement(tagName) {
            var element = document.createElement(tagName);
            container.appendChild(element);
            return element;
        }
        
        function removeElement(element) {
            element.parentNode.removeChild(element);            
        }
        
    });
    
    
}());