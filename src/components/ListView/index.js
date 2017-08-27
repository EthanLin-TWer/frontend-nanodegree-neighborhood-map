import ko from 'knockout';
import autobind from 'autobind-decorator';

export default class ListView {
  constructor(locations) {
    this.locations = locations;
    this.filteredLocations = ko.observableArray(this.locations);
    this.selectedLocation = ko.observable({});
  }

  @autobind
  locationSelected(location) {
    this.selectedLocation(location);
    const marker = window.map.findMarker(location);

    if (marker) {
      google.maps.event.trigger(marker, 'click');
    }
  }
}
