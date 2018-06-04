/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */
/* The tests contain the $() function, since some of these tests
 * may require DOM elements.
 */
$(function() {
    /* This is the first test suite - a test suite just contains
     * a related set of tests. The suite is all about the RSS
     * feeds definitions, the allFeeds variable in the application.
     */
    describe('RSS Feeds', function() {
        /* This is the first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This is the test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('each feed in the allFeeds object has a URL defined and the URL is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(null);
            });
        });

        /* This test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('each feed in the allFeeds object has a name defined and the name is not empty', function() {
            allFeeds.forEach(function(name) {
                expect(name).toBeDefined();
                expect(name).not.toBe(null);
            });
        });

    });


    /* The test suite named "The menu" */

    describe("The menu", function() {

        /* This test ensures the menu element is hidden by default.
         * HTML refers to body class="menu-hidden"
         * CSS defines class .menu-hidden
         */
        it("the menu element is hidden by default", function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });


        /* This test ensures the menu changes visibility
         * when the menu icon is clicked. The test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it("the menu changes visibility when the menu icon is clicked", function() {
            $(".menu-icon-link").trigger("click");
            expect($("body").hasClass("menu-hidden")).toBe(false);
            $(".menu-icon-link").trigger("click");
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

    });


    /* The test suite named "Initial Entries" */

    describe("Initial Entries", function() {

        /* As the loadFeed() is asynchronous the test uses
         * the Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /* This test ensures when the loadFeed function is called
         * and completes its work, there is at least a single .entry
         * element within the .feed container.
         */

        it("when the loadFeed function is called, there is an .entry element within the .feed container", function() {
            expect($(".feed .entry").length).toBeGreaterThan(0);
        });
    });

    /* The test suite named "New Feed Selection" */

    describe("New Feed Selection", function() {
        var feedOne, feedTwo;


        /* As the loadFeed() is asynchronous the test uses
         * the Jasmine's beforeEach and afterEach and asynchronous done() functions.
         */

        beforeEach(function(done) {
            loadFeed(0, function() {
                feedOne = $(".feed").html();
                loadFeed(1, function() {
                    done();
                });
            });
        });
        afterEach(function() {
            loadFeed(0);
        });

        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it("when a new feed is loaded the content changes", function() {
            feedTwo = $(".feed").html();
            expect(feedOne).not.toEqual(feedTwo);
        });
    });
}());
