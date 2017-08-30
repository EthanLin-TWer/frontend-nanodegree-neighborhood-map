# TODOLIST

infrastructure
---

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
* [x] project structure 


Review / Feedback 1
---

* [x] [load Google Maps asynchronously][load-google-maps-async]
* [x] error handling on Google Map loading - [onerror][]
* [x] use only one info-window 
* [x] can only be one activated marker in a [limited period][marker-bouncing-timeout]
* [x] [better Google Maps loading][google-maps-api-loader] 
* [x] [center marker on selected][pan-to]
* [x] cross domain issue on Github Pages: rate limit increased to 5k/hour 
* [x] responsiveness on mobile 1: [Viewport Meta tag][viewport-meta-tag]

[load-google-maps-async]: https://discussions.udacity.com/t/handling-google-maps-in-async-and-fallback/34282
[onerror]: https://developer.mozilla.org/en/docs/Web/API/GlobalEventHandlers/onerror#element.onerror
[marker-bouncing-timeout]: https://developers.google.com/maps/documentation/javascript/examples/marker-animations-iteration
[google-maps-api-loader]: https://www.npmjs.com/package/google-maps-api-loader
[viewport-meta-tag]: https://developer.mozilla.org/en/docs/Mozilla/Mobile/Viewport_meta_tag
[pan-to]: https://developers.google.com/maps/documentation/javascript/examples/event-simple


Review / Feedback 2 
---

* [ ] responsiveness on mobile 2: style customization
* [ ] refactor
  * [ ] GoogleMapAPILoader Promise to async try / catch
  * [ ] LHS scroll views should stick to the page 
* [ ] suggestion: semantic HTML5: 
  * https://stackoverflow.com/questions/17272019/why-to-use-html5-semantic-tag-instead-of-div


submit requirements 
---

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
  * [x] app's UI should be intuitive to use
* responsiveness
  * [ ] all application components render on-screen in a responsiveness manner
    * [x] desktop
    * [ ] phone 
  * [ ] all application components are usable across modern desktop, tablet, and phone browsers
    * [x] desktop
    * [ ] tablet
    * [ ] phone 
* [x] apis
  * [x] Google Map Api
  * [x] at least one another third-party apis when a map marker or list view entry is clicked - Unsplash
  * [x] provide attribution(source indication) for the source of additional data in your UI and in your `README`
  * [x] all api data requests should be async - `<script async></script>`  
* [x] error handling 
  * [x] api errors should not affect ui: http://ruben.verborgh.org/blog/2012/12/31/asynchronous-error-handling-in-javascript/
  * [x] should handle API failure using callback techniques
    * [x] Google Map API
    * [x] Unsplash API failure
  * [x] user should not be left wondering why a component is not working, there should be some visible indication on the page with clear error message
    * [x] Google Map API
    * [x] Unsplash API failure
  * [x] application should run without error
* [x] Implementation Constraint
  * [x] KnockoutJS must be used
  * [x] Knockout should be mv*-patternly used
  * [x] should use two-way data binding in knockout and avoid manual dom manipulation
    * `ko.observable()` 
    * `ko.observableArray()` 
  * [x] Knockout should not be used to handle the Google Map API
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
  * [x] checkstyle / build-quality-in: code formatted with consistent, logical, and easy-to-read formatting as described in the [Udacity JavaScript Style Guide][]
  * [ ] tests and 90% + coverage - build-styles-in
  * [ ] everything that you will acquire from a paid product - ui, experience, simple, shortcuts...
* [ ] README
  * [x] how to start the project
  * [x] what third-party apis are used
  * [x] attributions to third party API  
  * [ ] project efforts and takeouts

---
 
[rubric]: https://review.udacity.com/#!/rubrics/17/view
[Udacity JavaScript Style Guide]: http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html
