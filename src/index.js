/* global locations */
import ko from 'knockout';

import ListView from './ListView';
import './index.styl';

const locations = [
  { location: 'Chengdu',  lat: 30.572, lng: 104.066 },
  { location: 'Beijing',  lat: 39.904, lng: 116.407 },
  { location: 'Xi\'an',   lat: 34.341, lng: 108.939 },
  { location: 'Shenzhen', lat: 22.543, lng: 114.057 },
  { location: 'Wuhan',    lat: 30.592, lng: 114.305 },
];

ko.applyBindings(new ListView(locations), document.getElementById('list-view'));