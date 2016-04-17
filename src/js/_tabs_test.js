// video 28git 
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
        
        it("hides all content elements except default on Tabs initialization", function() {
            var tab1 = addElement("div");
            var defaultTab = addElement("div");
            var tab3 = addElement("div");
            
            var element1 = addElement("div");
            var defaultElement = addElement("div");    
            var element3 = addElement("div");   
            
            //tabs.initialize(defaultElement, [ element1, defaultElement, element3 ], "hideMe");
            
            tabs.initialize({
                tabs: [ tab1, defaultTab, tab3 ],
               content: [ element1, defaultElement, element3 ],
               default: defaultElement,
               activeTabClass: "activeClass",
               contentHideClass: "hideClass" 
            });
            assert.equal(getElementClasses(element1), "hideClass", "element1 should be hidden");
            assert.equal(getElementClasses(defaultElement), "", "defaultElement should not be hidden"); 
            assert.equal(getElementClasses(element3), "hideClass", "element3 should be hidden");             
        });
        
        
        it("preserves existing classes when adding a class to hide an element", function() {
            // arange
            var defaultTab = addElement("div");
            var hiddenTab = addElement("div");
            
            var hiddenElement = addElement("div");
            var defaultElement = addElement("div");
            
            hiddenElement.setAttribute("class","existingClass");
            
            // act
            //tabs.initialize(hiddenElement, [ hiddenElement, defaultElement ], "hide");
            
            tabs.initialize({
                tabs: [ defaultTab, hiddenTab ],
               content: [ defaultElement, hiddenElement ],
               default: defaultElement,
               activeTabClass: "activeClass",
               contentHideClass: "hideClass" 
            });
            
            var currentClasses = "existingClass";
            // assert
            assert.equal(getElementClasses(hiddenElement), currentClasses + " hideClass"  );
            
            //reset
        });
        
        it("styles the active Tab element with a class", function() {
           // define active Tab
           var defaultElement = addElement("div");
           var defaultTab = addElement("div");
           
           // pass active Tab and class to initalize            
            tabs.initialize({
                tabs: [ defaultTab ],
                content: [ defaultElement ],
                default: defaultElement,
                activeTabClass: "activeTab",
                contentHideClass: "ignored" 
            });
            
            assert.equal(getElementClasses(defaultTab), "activeTab");
        });
        
        it("preserves existing classes when styling the active Tab", function() {
            // this is the same test basically as the preserves when 
            // adding element to hidden Tabs
        });
        
        it("does not hide the content element for the active tag", function() {
            var tab1 = addElement("div");
            var defaultTab = addElement("div");
            var tab3 = addElement("div");
            
            var element1 = addElement("div");
            var defaultElement = addElement("div");    
            var element3 = addElement("div");   
            var activeTab = defaultElement;
           
            //tabs.initialize(defaultElement, [ element1, defaultElement, element3 ], "hideMe", activeTab); 
            
            tabs.initialize({
                tabs: [ tab1, defaultTab, tab3 ],
               content: [ element1, defaultElement, element3 ],
               default: defaultElement,
               activeTabClass: "activeTab",
               contentHideClass: "hideClass" 
            });            
            assert.equal(getElementClasses(element1), "hideClass");
            assert.equal(getElementClasses(defaultElement), ""); 
            assert.equal(getElementClasses(element3), "hideClass"); 
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