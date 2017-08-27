/* global locations */
import ko from 'knockout';

import ListView from './components/ListView';
import initGoogleMap, { defaultLocations } from './utils/initializer';
import './index.styl';

initGoogleMap();

ko.applyBindings(
  new ListView(defaultLocations), document.getElementById('list-view')
);