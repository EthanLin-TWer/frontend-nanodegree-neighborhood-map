import ko from 'knockout';
import autobind from 'autobind-decorator';

class Map {
  constructor(map, defaultLocations) {
    this.map = map;
    this.locations = defaultLocations;
    this.markers = ko.observableArray(this.initMarkers());
  }

  @autobind
  initMarkers() {
    return this.locations.map(location => {
      const marker = this.initMarker(location, this.map);
      const infoWindow = this.initInfoWindow(location.location);

      marker.addListener('click', () => {
        infoWindow.open(this.map, marker);
      });

      return marker;
    });
  }

  activateMarker(location) {
    return location;
  }

  initMarker(position, map) {
    return new google.maps.Marker({ position, map });
  }

  initInfoWindow(content) {
    return new google.maps.InfoWindow({ content });
  }
}

export default Map;