# Wyzyr-ember

## Setup

1. Install NVM https://github.com/creationix/nvm
2. Install latest Node.js
2.1. nvm install 5.7.1
2.2. nvm use 5.7.1
2.3. touch ~/.bach_profile
2.4. printf "\n[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh\n" >> ~/.bach_profile
3. Install Ember
3.1. npm install -g bower
3.2. npm install -g ember-cli
4. Setup project
4.1. Clone git repository (git clone https://github.com/i-mike/wyzyr_ember)
4.2. Run command "npm install" in the project directory
4.3. Run command "bower install" in the project directory
5. Run the project
5.1. ember s
5.2. Open http://localhost:4200 in your browser


Setup WebStorm

File > Settings -> Languages & Frameworks -> JavaScript -> ECMAScript6

Mark as Excluded:
/tmp
/dist

Mark as Resource Root:
/
/bower_components
/bower_components/ember-qunit/lib
/public

Mark as Test Sources Root:
/tests

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

