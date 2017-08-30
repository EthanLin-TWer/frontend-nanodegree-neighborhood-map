/* global locations */
import ko from 'knockout';

import ListView from './components/ListView';
import initGoogleMap from './utils/initializer';
import defaultLocations  from './utils/locations';
import './index.styl';

window.addEventListener('load', initGoogleMap);

ko.applyBindings(
  new ListView(defaultLocations), document.getElementById('list-view')
);