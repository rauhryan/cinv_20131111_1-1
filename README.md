# Coding Interview

##Make sure you have a github account


### Prerequisite Setup

JavaScript tests are run using the [karma test runner][1] by
Google. To get started:

* Install [PhantomJS][2]
  - brew install -g phantomjs
* Install [Node][2]
  - brew install -g nodejs
* Install karma
  - npm install -g karma
* Install bower
  - npm install -g bower
* Install the local copies of the js requirement
  - cd jspec
  - bower install

##Getting Started

* Fork this repository on github
* Clone your fork of this repository into your home folder
* Open up a terminal session and run the following commands:

      ``` ruby
      cd [folder your clone copy is in]
      ./run_first
      ./start_new_excercise
      ```

## Running JavaScript Tests

* karma start jspec/karma.conf.js - This will start up the karma test server
* karma run - Runs the current set of tests

[1]:http://karma-runner.github.com/ 
[2]:http://phantomjs.org/
