//
/* globals jake: false, desc: false, task: false, complete: false, fail: false, directory: false */
(function(){
    "use strict";
   // done with episode 18
    var semver = require("semver");
	var jshint = require("simplebuild-jshint");
    var karma = require("simplebuild-karma");
    var shell = require("shelljs");
    
    var KARMA_CONFIG = "karma.conf.js";
    var DIST_DIR = "generated/dist";
    
    //**** General purpose tasks
    desc("Start the Karma server (run this first)");
    task("karma", function() {
        console.log("starting Karma Server:");
        karma.start({
        configFile: KARMA_CONFIG
        }, complete, fail);       
    }, {async: true});
        
    desc("Default build");
    task('default', [ "version", "lint", "tests" ], function() {
        console.log("\n\nBUILD OK");
    });
    
    desc("Run a localhost server");
    task("run", [ "build" ], function(){
       jake.exec("node node_modules/http-server/bin/http-server " + DIST_DIR, { interactive: true }, complete); 
    }, { async: true });

    desc("Erase all generated files");
    task("clean", function() {
       console.log("Erasing generated files");
       shell.rm("-rf", "generated"); 
    });
    //**** Supporting taks
        
    desc("Check Node version");
    task('version', function() {
        console.log("Checking Node version: .");
		var packageJson = require("./package.json");
		var expectedVersion = packageJson.engines.node;
        var actualVersion = process.version;
        if (semver.neq(actualVersion,expectedVersion)) {
             fail("Incorrect Node version: expected " + expectedVersion + ", but was " + actualVersion);
        } 
    });
    
    // process.env.xxxx is a command line arg passed in as x = y
    // so process.env.loose is false if passed loose=false
    desc("Run tests");
    task("tests", function() {
        console.log("Testing javascript:");
        karma.run({
            configFile: KARMA_CONFIG,
            expectedBrowsers: [
                "Firefox 45.0.0 (Ubuntu 0.0.0)",
                "Chromium 49.0.2623 (Ubuntu 0.0.0)",
                "Mobile Safari 9.0.0 (iOS 9.2.1)"
            ],
            strict: !process.env.loose
        }, complete, fail);     
    }, {async: true});
    
    desc("Linting javascript");
	task("lint", function() {
		process.stdout.write("Linting JavaScript: ");

		jshint.checkFiles({
            files: ["jakefile.js", "src/js/**/*.js" ],
			options: lintOptions(),
			globals: lintGlobals() 
		}, complete, fail);
	}, { async: true });
    
    desc("Build distribution directory");
    task("build", [ DIST_DIR ], function() {
       console.log("Building distribution directory ."); 
       shell.rm("-rf", DIST_DIR + "/*");
       shell.cp("src/content/*", DIST_DIR);
       jake.exec(
           "node node_modules/browserify/bin/cmd.js src/js/app.js -o " + DIST_DIR + "/bundle.js", 
           { interactive: true}, 
           complete);
           }, { async: true });
    
    directory("generated/dist");

    function lintOptions() {
        return {
            bitwise: true,
            eqeqeq: true,
            forin: true,
            freeze: true,
            futurehostile: true,
            latedef: "nofunc",
            noarg: true,
            nocomma: true,
            nonbsp: true,
            nonew: true,
            strict: true,
            undef: true,
            
            node: true,
            browser: true
        };
    }
    
    function lintGlobals() {
        return {
            // Mocha
            describe: false,
            it: false,
            before: false,
            after: false,
            beforeEach: false,
            afterEach: false
        };
    }
}());

