// video 32
(function () {
    "use strict";
    var assert = require("./assert.js");
    var tabs = require("./tabs.js");
    
    describe("Tabs", function() {
        
        var container;
        var IRRELEVANT = "irrelevant";
        var HIDDEN_CONTENT = "hiddenContent";
        var ACTIVE_TAB = "activeClass";
        
        beforeEach(function(){
            container = document.createElement("div");
            document.body.appendChild(container);
            
        });
        
        afterEach(function(){
            //removeElement(container);
        });
        
        it("use a class to hide all content elements except default on Tabs initialization", function() {
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
                defaultTab: defaultTab,
                activeTabClass: IRRELEVANT,
                hiddenContentClass: HIDDEN_CONTENT 
            });
            
            assertContentHidden(content1, "content1");
            assertContentHidden(content3, "content3");
            assertContentNotHidden(defaultContent, "defaultContent");        
        });
        
        it("preserves existing classes when adding a class", function() {
            // arange
            var defaultTab = createTab();
            var hiddenTab = createTab();
            
            var hiddenContent = createTabContent();
            var defaultContent = createTabContent();
            
            hiddenContent.setAttribute("class","existingClass");
            defaultTab.setAttribute("class", "existingClass");
            
            // act
            //tabs.initialize(hiddenContent, [ hiddenContent, defaultContent ], "hide");
            
            tabs.initialize({
                tabs: [ defaultTab, hiddenTab ],
                content: [ defaultContent, hiddenContent ],
                defaultTab: defaultTab,
                activeTabClass: "activeTabClass",
                hiddenContentClass: "hideClass" 
            });
            
            var currentClasses = "existingClass";
            // assert
            assert.equal(getElementClasses(hiddenContent), currentClasses + " hideClass"  );
            assert.equal(getElementClasses(defaultTab), currentClasses + " activeTabClass" );
            //reset
        });
        
        it("styles the active Tab element with a class", function() {
           // define active Tab
           var defaultContent = createTabContent();
           var defaultTab = createTab();
           var tab1 = createTab();
           var tab3 = createTab();
           
           // pass active Tab and class to initalize            
            tabs.initialize({
                tabs: [ tab1, defaultTab, tab3 ],
                content: [ createTabContent(), defaultContent, createTabContent() ],
                defaultTab: defaultTab,
                activeTabClass: ACTIVE_TAB,
                hiddenContentClass: IRRELEVANT 
            });
            
            assertTabActive(defaultTab, "default tab");
            assertTabInactive(tab1, "tab1");
            assertTabInactive(tab3, "tab3");
        });
        
        it("does not hide the content element for the active Tab", function() {
            var tab1 = createTab();
            var defaultTab = createTab();
            var tab3 = createTab();
            
            var content1 = createTabContent();
            var defaultContent = createTabContent();    
            var content3 = createTabContent();
           
            //tabs.initialize(defaultContent, [ content1, defaultContent, content3 ], "hideMe", activeTab); 
            
            tabs.initialize({
                tabs: [ tab1, defaultTab, tab3 ],
                content: [ content1, defaultContent, content3 ],
                defaultTab: defaultTab,
                activeTabClass: "activeTab",
                hiddenContentClass: HIDDEN_CONTENT
            });
            
            assertContentHidden(content1, "content1"); 
            assertContentHidden(content3, "content3"); 
            assertContentNotHidden(defaultContent, "default content");
        });
        
        function assertContentHidden(element, elementName) {
            assert.equal(getElementClasses(element), HIDDEN_CONTENT, elementName + " should be hidden");
        }
        
        function assertContentNotHidden(element, elementName){
            assert.isOk(getElementClasses(element).indexOf(HIDDEN_CONTENT) === -1, elementName + " should not be hidden");
        }
        
        function assertTabActive(tab, tabName) {
            assert.equal(getElementClasses(tab), ACTIVE_TAB);
        }
        
        function assertTabInactive(tab, tabName) {
            assert.isOk(getElementClasses(tab).indexOf(ACTIVE_TAB) === -1, tabName + " should not be active");
        }
        function getElementClasses(element) {
            if (element.getAttribute("class")) return element.getAttribute("class");
            return "";
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