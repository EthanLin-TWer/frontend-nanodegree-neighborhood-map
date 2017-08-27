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
* [x] styles support - stylus 
  * https://code.tutsplus.com/tutorials/sass-vs-less-vs-stylus-preprocessor-shootout--net-24320
* [x] coverage: istanbul
* [ ] project structure 


## submit requirements 

* [ ] Core functions 
  * [x] Maps and Markers
    * [x] map displays all location markers by default
    * [x] determine what locations to use 
    * [x] display map markers identifying at least 5 locations when the page is loaded
    * [x] clicking a marker:
      * [x] displays an `infoWindow` 
      * [x] displays unique information about a location in the `infoWindow`
    * [x] markers should animate when clicked(e.g. bouncing, color change, etc)
  * [x] List View 
    * [x] a list-view of location names is provided which displays all locations by default 
    * [x] clicking a location on the list:
      * [x] displays unique information about the location
      * [x] animates its' associated map marker... 
      * [x] and associated 'list item' styles 
      * [x] clicking highlight
      * [x] clicking animation
    * [ ] list functionality is responsive and runs error free(duplicated?)
  * [ ] Filter Locations 
    * [x] includes a text input or drop-down menu 
    * [x] should be able to filter the **map markers** and **list items** to locations matching the text input or selection
      * [x] real-time filter 
      * [ ] fuzzy match?(enhancer) 
    * [x] filter function runs error-free
  * [ ] app's UI should be intuitive to use
* responsiveness
  * [ ] all application components render on-screen in a responsiveness manner
    * [ ] desktop
    * [ ] phone 
  * [ ] all application components are usable across modern desktop, tablet, and phone browsers
    * [ ] desktop
    * [ ] tablet
    * [ ] phone 
* apis
  * [x] Google Map Api
  * [x] at least one another third-party apis when a map marker or list view entry is clicked - Unsplash
  * [x] provide attribution(source indication) for the source of additional data in your UI and in your `README`
  * [ ] all api data requests should be async - should I use service worker?  
* error handling 
  * [ ] api errors should not affect ui: http://ruben.verborgh.org/blog/2012/12/31/asynchronous-error-handling-in-javascript/
  * [ ] should handle API failure using callback techniques
    * [ ] Google Map API
    * [x] Unsplash API failure
  * [ ] user should not be left wondering why a component is not working, there should be some visible indication on the page with clear error message
    * [ ] Google Map API
    * [x] Unsplash API failure
  * [ ] application should run without error
* [ ] Implementation Constraint
  * [x] KnockoutJS must be used
  * [ ] Knockout should be mv*-patternly used
  * [ ] should use two-way data binding in knockout and avoid manual dom manipulation 
  * [ ] Knockout should not be used to handle the Google Map API
* Udacious requirements
  * [ ] offline database: firebase / `localStorage` 
  * [x] automation tools: webpack
  * [ ] unique functionality beyond the minimum requirements 
  * [ ] different color sets
  * [ ] pure-shortcuts
  * [ ] more api sources 
  * [ ] performance optimization - build-performance-in
    * [ ] 90+ in PageSpeed
    * [ ] 60fps
    * optimization list: https://github.com/linesh-simplicity/frontend-nanodegree-mobile-portfolio/blob/master/Gruntfile.js#L247-L250
    * https://github.com/google/web-starter-kit
    * https://webpack.github.io/docs/list-of-plugins.html
  * [ ] checkstyle - build-styles-in
    * [ ] code formatted with consistent, logical, and easy-to-read formatting as described in the [Udacity JavaScript Style Guide][]
  * [ ] tests and 90% + coverage - build-styles-in
  * [ ] everything that you will acquire from a paid product - ui, experience, simple, shortcuts...
* [ ] README
  * [ ] how to start the project
  * [ ] what third-party apis are used
  * [ ] attributions to third party API  
  * [ ] project efforts and takeouts

---
 
[rubric]: https://review.udacity.com/#!/rubrics/17/view
[Udacity JavaScript Style Guide]: http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html
