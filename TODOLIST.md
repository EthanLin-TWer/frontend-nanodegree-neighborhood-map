# TODOLIST

## infrastructure

* [x] git
  * `git init`
  * `touch .gitignore` 
* [x] NPM 5
  * `npm init`
* [x] Knockout JS
  * `npm install knockout --save`
* [x] babel & preset es6 & preset es7
  * `npm install --save-dev babel-core babel-preset-es2015 babel-preset-stage-0`
  * `echo '{ "presets": [ "es2015", "stage-0" ] }' > .babelrc` 
* [x] browserify
  * `npm install --save-dev babelify watchify browserify`
  * `"build": "browserify js/*.js -o dist/bundle.js"`
  * `"build:watch": "watchify js/*.js -o dist/bundle.js -t babelify"`
* [x] Style: ESLint
  * `npm install --save-dev eslint eslint-config-udacity eslint-plugin-import`
  * `echo '{ "extends": "udacity" }' > .eslintrc.json`
  * `"lint": "eslint src test"`
* [x] webpack
  * `npm install --save-dev webpack webpack-dev-server`
  * setup webpack to work
* [x] API: axios
  * `npm install axios`
* [x] CI/CD: travis
* [x] mocha & power-assert & sinon
  * `npm install --save-dev mocha power-assert sinon`
  * [x] set power assert
  * [x] set up mocha and first test case 
* [ ] project structure 
* [ ] build performance in 
  

## submit requirements 

* core functions 
  * [ ] display map markers identifying at least 5 locations when the page is loaded
  * [ ] a list view of the set of locations defined above 
  * [ ] provide a filter option that uses an input to filter both the list view and the map markers displayed by default on load, markers and list view should update real time 
  * [ ] add at least one another third-party apis to provide information when a map marker or list view entry is clicked
  * [ ] animate a map marker when either the list item associated with it or the map marker itself is selected
  * [ ] open an infoWindow with the information retrieved using third-party described in the above above step when either a location is selected from the list view or its map marker is selected directly
  * [ ] app's UI should be intuitive to use
* responsiveness
  * [ ] the app itself should be mobile responsive
  * [ ] all application components are usable across modern desktop, tablet, and phone browsers
* apis
  * [ ] google map api
  * [ ] at least one another third-party apis
  * [ ] apis should be async 
* error handling 
  * [ ] api errors should not affect ui: http://ruben.verborgh.org/blog/2012/12/31/asynchronous-error-handling-in-javascript/
  * [ ] should handle third party library initialization error 
  * [ ] should handle network issue 
  * [ ] should handle firewall issue
  * [ ] application should run without error
* code quality
  * [ ] knockout should be mv*-patternly used
  * [ ] should use two-way data binding in knockout and avoid manual dom manipulation 
* Udacious requirements
  * [ ] offline database: firebase
  * [ ] automation tools: gulp / grunt 
  * [ ] more api sources 
  * [ ] performance optimization
  * [ ] everything that you will acquire from a paid product - ui, experience, simple, shortcuts...
* [ ] performance - build-performance-in
  * [ ] 90+ in PageSpeed
  * [ ] 60fps 
* [ ] styling check - eslint-config-udacity - build-quality-in
* [ ] README
  * [ ] how to start the project
  * [ ] what third-party apis are used
  * [ ] project efforts 

---
 
[rubric]: https://review.udacity.com/#!/rubrics/17/view