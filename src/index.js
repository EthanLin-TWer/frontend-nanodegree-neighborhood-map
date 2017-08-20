/* global locations */
import ko from 'knockout';

import ListView from './components/ListView';
import { locations } from './components/Map';
import initGoogleMap from './utils/initializer';
import './index.styl';

initGoogleMap();

ko.applyBindings(new ListView(locations), document.getElementById('list-view'));