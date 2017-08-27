import ko from 'knockout';
import autobind from 'autobind-decorator';

class Map {
  constructor(map, defaultLocations) {
    this.map = map;
    this.locations = defaultLocations;
    this.markers = ko.observableArray(this.initMarkers());
  }

  @autobind
  updateVisibleMarkers(visibleLocations) {
    this.markers().forEach(marker => {
      const lat = parseFloat(marker.getPosition().lat()).toFixed(2);
      const lng = parseFloat(marker.getPosition().lng()).toFixed(2);

      const visibility = visibleLocations.some(location => {
        return parseFloat(location.lat).toFixed(2) === lat
          && parseFloat(location.lng).toFixed(2) === lng;
      });

      marker.setVisible(visibility);
    });
  }

  @autobind
  findMarker(location) {
    return this.markers().find(marker => {
      return marker.getPosition().lat() === location.lat;
    });
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

  initMarker(position, map) {
    return new google.maps.Marker({ position, map });
  }

  initInfoWindow(content) {
    return new google.maps.InfoWindow({ content });
  }
}

export default Map;