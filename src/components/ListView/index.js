import ko from 'knockout';
import autobind from 'autobind-decorator';

export default class ListView {
  constructor(locations) {
    this.locations = locations;
    this.selectedLocation = ko.observable({});

    this.searcher = ko.observable('');
    this.filteredLocations = ko.computed(() => {
      if (!this.searcher()) return this.locations;

      return this.locations.filter(location => {
        const place = location.location.toUpperCase();
        const searcher = this.searcher().toUpperCase();

        return place.includes(searcher);
      });
    });
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
