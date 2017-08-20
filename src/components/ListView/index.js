import ko from 'knockout';

export default class ListView {
  constructor(locations) {
    this.locations = locations;
    this.filteredLocations = ko.observableArray(this.locations);
    this.selectedLocation = ko.observable({});

    this.locationSelected = this.locationSelected.bind(this);
  }

  locationSelected(location) {
    this.selectedLocation(location);
  }
}
