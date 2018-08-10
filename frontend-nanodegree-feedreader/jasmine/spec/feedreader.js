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
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
         it('does it has a url define and that the url is not empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);// body...
            });
         });
         it('does it has a name define and that the name is not empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);// body...
            });
         })
    });


    /*  a new test suite named "The menu" */

         describe('The menu', function(){
         it('does the menu element is hidden by default', function () {
            let menuelement = document.querySelector('body');
            expect(menuelement.classList.contains('menu-hidden')).toBe(true);
             // body...
         })

         /*  a test that ensures the menu changes
          * visibility when the menu icon is clicked. 
          * and does it hide when clicked again.
          */
          it('does the menu changes visibility when the menu icon is clicked.' , function () {
            let menuelement = document.querySelector('body');
            let menuIcon = document.querySelector('.menu-icon-link');
            menuIcon.click();
            expect(menuelement.classList.contains('menu-hidden')).toBe(false);

          })
         it (' does the menu changes when clicked again', function () {
            let menuelement = document.querySelector('body');
            let menuIcon = document.querySelector('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })
            
    })


    /* a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        /*  a function is called and completes its work 
         */
          beforeEach(function (done) {
                loadFeed (0, done);
            })
         it('when the loadFeed function is called and completes its work,', function () {
            let feed = document.querySelectorAll('.feed .entry');
            
            expect(feed.length > 0 ).toBe(true);
         })

    })
     /* a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(done){
         /* a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         let firstNewFeed;
         let secondFeed; 
         let feed = document.querySelector('.feed')
         beforeEach(function (done) {
            loadFeed(0, function () {
                firstNewFeed = feed.innerHTML
            loadFeed(1, function () {
                secondFeed = feed.innerHTML
                done();
            })
            })
         })
         it('when a new feed is loaded by the loadFeed function that the content actually changes', function () { 
         expect(firstNewFeed).not.toBe(secondFeed); 
         }) 

    })


}());
