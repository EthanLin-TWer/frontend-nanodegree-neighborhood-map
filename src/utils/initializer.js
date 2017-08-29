import Map from '../components/Map';
import UnsplashService from './unsplashService';
import defaultLocations from './locations';

export default function initGoogleMap() {
  window.addEventListener('load', () => {
    const callback = registerCallback();
    loadGoogleMapsAPI(callback);
  });
}

const key = 'AIzaSyBJa7HRNHLV9Ir8MS6afvn9yVfIzpBp2po';
const loadGoogleMapsAPI = (callback) => {
  const script = document.createElement('script');

  script.type = 'text/javascript';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=${callback}`;
  script.defer = true;

  document.body.appendChild(script);
};

const registerCallback = () => {
  const callbackFunctionName = 'initGoogleMap';

  window[callbackFunctionName] = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: defaultLocations[0],
      zoom: 2
    });

    const unsplashService = new UnsplashService();
    // TODO: [Linesh][8/20/17] ugly but the map & markers need to be globally accessible somehow
    window.mapClass = new Map(map, defaultLocations, unsplashService);
    window.mapClass.updateVisibleMarkers(defaultLocations);
  };

  return callbackFunctionName;
};