// video 28git 
(function () {
    "use strict";
    var assert = require("./assert.js");
    var tabs = require("./tabs.js");
    
    describe("Tabs", function() {
        
        var container;
        var IRRELEVANT = "irrelevant";
        
        beforeEach(function(){
            container = document.createElement("div");
            document.body.appendChild(container);
            
        });
        
        afterEach(function(){
            removeElement(container);
        });
        
        it("hides all content elements except default on Tabs initialization", function() {
            var tab1 = createTab();
            var defaultTab = createTab();
            var tab3 = createTab();
            
            var content1 = createTabContent();
            var defaultContent = createTabContent();    
            var content3 = createTabContent();   
            
            //tabs.initialize(defaultContent, [ content1, defaultContent, content3 ], "hideMe");
            
            tabs.initialize({
                tabs: [ tab1, defaultTab, tab3 ],
               content: [ content1, defaultContent, content3 ],
               default: defaultContent,
               activeTabClass: IRRELEVANT,
               contentHideClass: "hideClass" 
            });
            assert.equal(getElementClasses(content1), "hideClass", "content1 should be hidden");
            assert.equal(getElementClasses(defaultContent), "", "defaultContent should not be hidden"); 
            assert.equal(getElementClasses(content3), "hideClass", "content3 should be hidden");             
        });
        
        
        it("preserves existing classes when adding a class to hide an element", function() {
            // arange
            var defaultTab = createTab();
            var hiddenTab = createTab();
            
            var hiddenContent = createTabContent();
            var defaultContent = createTabContent();
            
            hiddenContent.setAttribute("class","existingClass");
            
            // act
            //tabs.initialize(hiddenContent, [ hiddenContent, defaultContent ], "hide");
            
            tabs.initialize({
                tabs: [ defaultTab, hiddenTab ],
               content: [ defaultContent, hiddenContent ],
               default: defaultContent,
               activeTabClass: IRRELEVANT,
               contentHideClass: "hideClass" 
            });
            
            var currentClasses = "existingClass";
            // assert
            assert.equal(getElementClasses(hiddenContent), currentClasses + " hideClass"  );
            
            //reset
        });
        
        it("styles the active Tab element with a class", function() {
           // define active Tab
           var defaultContent = createTabContent();
           var defaultTab = createTab();
           
           // pass active Tab and class to initalize            
            tabs.initialize({
                tabs: [ defaultTab ],
                content: [ defaultContent ],
                default: defaultContent,
                activeTabClass: "activeTab",
                contentHideClass: IRRELEVANT 
            });
            
            assert.equal(getElementClasses(defaultTab), "activeTab");
        });
        
        it("preserves existing classes when styling the active Tab", function() {
            // this is the same test basically as the preserves when 
            // adding element to hidden Tabs
        });
        
        it("does not hide the content element for the active Tab", function() {
            var tab1 = createTab();
            var defaultTab = createTab();
            var tab3 = createTab();
            
            var content1 = createTabContent();
            var defaultContent = createTabContent();    
            var content3 = createTabContent();   
            var activeTab = defaultContent;
           
            //tabs.initialize(defaultContent, [ content1, defaultContent, content3 ], "hideMe", activeTab); 
            
            tabs.initialize({
                tabs: [ tab1, defaultTab, tab3 ],
                content: [ content1, defaultContent, content3 ],
                default: defaultContent,
                activeTabClass: "activeTab",
                contentHideClass: "hideClass" 
            });            
            assert.equal(getElementClasses(content1), "hideClass");
            assert.equal(getElementClasses(defaultContent), ""); 
            assert.equal(getElementClasses(content3), "hideClass"); 
        });
        
        function getElementClasses(element) {
            return element.getAttribute("class");
        }
        
        function addElement(tagName) {
            var element = document.createElement(tagName);
            container.appendChild(element);
            return element;
        }
        
        function createTab() {
            var tab = addElement("div");
            tab.innerHTML = "tab";
            return tab;
        }
        
        function createTabContent() {
            var tabContent = addElement("div");
            tabContent.innerHTML = "tab content";
            return tabContent;
        }
        
        function removeElement(element) {
            element.parentNode.removeChild(element);            
        }
        
    });
    
    
}());