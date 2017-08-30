import GoogleMapsAPILoader from 'google-maps-api-loader';

import Map from '../components/Map';
import UnsplashService from './unsplashService';
import defaultLocations from './locations';

const googleMapFailedLoadingHandler = () => {
  const container = document.getElementById('error-message-container');
  const errorMessage = document.getElementById('error-message');

  container.classList.toggle('off-by-default');
  errorMessage.innerHTML = 'Google Map failed to load. Please refresh to try again.';
};

const key = 'AIzaSyBJa7HRNHLV9Ir8MS6afvn9yVfIzpBp2po';
export default function initGoogleMap() {
  GoogleMapsAPILoader({
    libraries: ['places'],
    apiKey: key
  }).then(google => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: defaultLocations[0],
      zoom: 2
    });

    const unsplashService = new UnsplashService();
    // TODO: [Linesh][8/20/17] ugly but the map & markers need to be globally accessible somehow
    window.mapClass = new Map(map, defaultLocations, unsplashService);
    window.mapClass.updateVisibleMarkers(defaultLocations);

  }).catch(googleMapFailedLoadingHandler);
}
