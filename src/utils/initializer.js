import Map, { locations } from '../components/Map';

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

  document.body.appendChild(script);
};

const registerCallback = () => {
  const callbackFunctionName = 'initGoogleMap';

  window[callbackFunctionName] = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: locations[2],
      zoom: 5
    });

    // TODO: [Linesh][8/20/17] ugly but the map & markers need to be globally accessible somehow
    window.map = new Map(map);
  };

  return callbackFunctionName;
};