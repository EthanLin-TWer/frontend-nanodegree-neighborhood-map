import ko from 'knockout';

export default class ListView {
  constructor(locations) {
    this.locations = locations;
    this.selectedLocation = ko.observable({});

    this.searching = ko.observable(false);

    this.searcher = ko.observable('');
    this.filteredLocations = ko.computed(() => {
      if (!this.searcher()) {
        this.updateVisibleMarkers(this.locations);
        return this.locations;
      }

      const filtered = this.locations.filter(location => {
        const place = location.location.toUpperCase();
        const searcher = this.searcher().toUpperCase();

        return place.includes(searcher);
      });

      this.updateVisibleMarkers(filtered);
      return filtered;
    });

    this.locationSelected = this.locationSelected.bind(this);
    this.expandOptions = this.expandOptions.bind(this);
  }

  updateVisibleMarkers(locations) {
    // Google Map not loaded and becoming globally available yet, skip;
    if (!window.mapClass) return ;

    window.mapClass.updateVisibleMarkers(locations);
  }

  expandOptions() {
    const collapse = !this.searching();
    this.searching(collapse);
  }

  locationSelected(location) {
    this.selectedLocation(location);

    const marker = window.mapClass.findMarker(location);
    if (marker) {
      google.maps.event.trigger(marker, 'click');
    }
  }
}
