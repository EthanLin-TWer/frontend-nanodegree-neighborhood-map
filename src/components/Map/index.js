import ko from 'knockout';
import autobind from 'autobind-decorator';

export const locations = [
  { location: 'Chengdu',  lat: 30.572, lng: 104.066 },
  { location: 'Beijing',  lat: 39.904, lng: 116.407 },
  { location: 'Xi\'an',   lat: 34.341, lng: 108.939 },
  { location: 'Shenzhen', lat: 22.543, lng: 114.057 },
  { location: 'Wuhan',    lat: 30.592, lng: 114.305 },
];

class Map {
  constructor(map) {
    this.initMarkers = this.initMarkers.bind(this);

    this.map = map;
    this.markers = ko.observableArray(this.initMarkers());
  }

  @autobind
  initMarkers() {
    return locations.map(location => {
      const marker = this.initMarker(location, this.map);
      const infoWindow = this.initInfoWindow(location.location);

      marker.addListener('click', () => {
        infoWindow.open(this.map, marker);
      });

      return marker;
    });
  }

  initMarker(position, map) {
    return new google.maps.Marker({ position, map });
  }

  initInfoWindow(content) {
    return new google.maps.InfoWindow({ content });
  }
}

export default Map;