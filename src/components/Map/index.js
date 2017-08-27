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
      const { lat, lng } = marker.getPosition();
      const visibility = visibleLocations.some(location => {
        return location.lat === lat() && location.lng === lng();
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