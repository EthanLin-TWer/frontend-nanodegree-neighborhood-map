/* global locations */
import ko from 'knockout';

import ListView from './ListView';
import './index.styl';

const key = 'AIzaSyBJa7HRNHLV9Ir8MS6afvn9yVfIzpBp2po';

const locations = [
  { location: 'Chengdu',  lat: 30.572, lng: 104.066 },
  { location: 'Beijing',  lat: 39.904, lng: 116.407 },
  { location: 'Xi\'an',   lat: 34.341, lng: 108.939 },
  { location: 'Shenzhen', lat: 22.543, lng: 114.057 },
  { location: 'Wuhan',    lat: 30.592, lng: 114.305 },
];

const loadScript = () => {
  const script = document.createElement('script');

  script.type = 'text/javascript';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initGoogleMap`;

  document.body.appendChild(script);
};

const registerCallback = (window) => {
  window.initGoogleMap = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: locations[2],
      zoom: 5
    });

    locations.forEach(location => {
      const marker = initMarker(location, map);
      const infoWindow = initInfoWindow(location.location);

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
  };
};

window.addEventListener('load', () => {
  registerCallback(window);
  loadScript();
});

function initMarker(position, map) {
  return new google.maps.Marker({ position, map });
}

function initInfoWindow(content) {
  return new google.maps.InfoWindow({ content });
}

ko.applyBindings(new ListView(locations), document.getElementById('list-view'));