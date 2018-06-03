# Project Overview

In this project there is a web-based application that reads RSS feeds with implemented [Jasmine](http://jasmine.github.io/) test.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## Steps required to successfully run the application

Download repository/zip file.
Open index.html in your browser.
Results show which tests are implemented.
Green = OK / Red = failure

# Tests implemented in this Project

1. Test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. Test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. Test suite named `"The menu"`.
3.a Test that ensures the menu element is hidden by default.
3.b Test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.
4. Test suite named `"Initial Entries"`.
4.a Test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
5. Test suite named `"New Feed Selection"`.
5.a Test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
