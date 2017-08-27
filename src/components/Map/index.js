import ko from 'knockout';
import autobind from 'autobind-decorator';

class Map {
  constructor(map, defaultLocations, unsplashService) {
    this.map = map;
    this.locations = defaultLocations;
    this.markers = ko.observableArray(this.initMarkers());

    this.unsplashService = unsplashService;
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
      const place = location.location;
      const marker = this.initMarker(location, this.map);
      const infoWindow = this.initInfoWindow(place);

      marker.addListener('click', () => {
        infoWindow.setContent('Loading city photos from Unsplash...');
        infoWindow.open(this.map, marker);

        this.unsplashService.searchPhotos(place).then(data => {
          const firstPhoto = data.results[0];
          const { user, links, urls } = firstPhoto;

          const imageUrl = urls.raw;
          const author = {
            name: user.name,
            profile: user.links.html
          };
          const attribution = links.html;

          infoWindow.setContent(`
            <div style="width: 400px; height: 470px;">
              <p><strong>${place}</strong></p>
              
              <img src="${imageUrl}" width="400" height="400"/>
              
              <a href="${author.profile}">${author.name}</a> |
              <a href="${attribution}">Unsplash</a>
            </div>
          `);
        });
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