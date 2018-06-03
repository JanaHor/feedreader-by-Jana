/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* DONE: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

		it('each feed in the allFeeds object has a URL defined', function() {
            allFeeds.forEach(function(feed) {
			expect(feed.url).toBeDefined();
        });
    });

		it('the URL is not empty', function() {
			allFeeds.forEach(function(feed) {
			expect(feed.url).not.toBe(null);
		});
    });
        /* DONE: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		it('each feed in the allFeeds object has a name defined', function() {
			allFeeds.forEach(function(name) {
			expect(name).toBeDefined();
		});
    });

		it('the name is not empty', function() {
			allFeeds.forEach(function(name) {
			expect(name).not.toBe(null);
		});
    });
	
	});


    /* DONE: Write a new test suite named "The menu" */
	
	describe("The menu", function() {

        /* DONE: Write a test that ensures the menu element is
         * hidden by default.
		 * HTML refers to body class="menu-hidden"
		 * CSS defines class .menu-hidden
         */
		 it ("the menu element is hidden by default", function() {
			 expect($("body").hasClass("menu-hidden")).toBe(true);
		 });
		 

         /* DONE: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
		  
		  it ("the menu changes visibility when the menu icon is clicked", function() {
			  $(".menu-icon-link").trigger("click");
			  expect($("body").hasClass("menu-hidden")).toBe(false);
			  $(".menu-icon-link").trigger("click");
			  expect($("body").hasClass("menu-hidden")).toBe(true);
		  });
		  
	});		  

	
    /* DONE: Write a new test suite named "Initial Entries" */
	
	describe("Initial Entries", function() {

        /* DONE: loadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
		  
		beforeEach(function(done) {
			loadFeed(0, function() {
				done();
			});
		});
		
		 /* DONE: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
		 */
		 
		it ("when the loadFeed function is called, there is an .entry element within the .feed container", function() {	  
			  expect($(".entry").length).toBeGreaterThan(0);
		  });
	});
	
    /* DONE: Write a new test suite named "New Feed Selection" */

	describe("New Feed Selection", function() {
		var feedOne, feedTwo;
		
		
        /* DONE: loadFeed() is asynchronous.
         */
		  
		afterEach(function(done) {
			loadFeed(0, function() {
				done();
			});
		});
		
		/* DONE: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
		it ("when a new feed is loaded the content changes", function() {	  
			  feedTwo = $(".feed").html();
			  expect(feedOne).not.toEqual(feedTwo);
		  }); 
	});
}());
