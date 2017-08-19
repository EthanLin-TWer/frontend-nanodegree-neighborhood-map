import ko from 'knockout';

export default class ListView {
  constructor(locations) {
    this.locations = locations;
    this.filteredLocations = ko.observableArray(this.locations);
  }
}
