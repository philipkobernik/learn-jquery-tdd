Learn jQuery with TDD
================

Learn jQuery by addressing a series of failing tests.

### Setup

git clone the repo to your local machine

    git clone git@github.com:philipkobernik/learn-jquery-tdd.git

open the spec runner to see failing tests

    cd learn-jquery-tdd
    open specRunner.html

Hooray!

### Take a look at the specs

    open spec/basicQuerying.js
    
'describe' blocks group suites of tests.
'beforeEach' blocks are used to setup/reset objects before each spec.
'it' blocks define individual expectations.

These specs define some expecations of the Manipulator object and its methods.

The specs are failing because the methods they are calling are empty!

### Make'em pass

edit empty methods in src/manipulator.js to make tests pass

    vim src/manipulator.js

or

    mate src/manipulator.js


### Play with jQuery in the browser, for pete's sake.

The current tests manipulate a bit of html that I initialize in spec/basicQuerying.js

I've taken the liberty to append this html to the body of the spec runner html page as a convenient way to play with jQuery methods in the browser. Its nice to get instance gratification when starting out with jQuery.

From the spec runner page, open your web console and execute jQuery calls like so:

    $('div#template').find('p').hide()
    
### Finished?

If you've made all the tests pass, good for you! Fork this repo, update your fork, and we can talk about how to make this tool better.
