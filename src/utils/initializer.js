import Map from '../components/Map';

export const defaultLocations = [
  { location: 'Chengdu',  lat: 30.572, lng: 104.066 },
  { location: 'Beijing',  lat: 39.904, lng: 116.407 },
  { location: 'Xi\'an',   lat: 34.341, lng: 108.939 },
  { location: 'Shenzhen', lat: 22.543, lng: 114.057 },
  { location: 'Wuhan',    lat: 30.592, lng: 114.305 },
];

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
      center: defaultLocations[2],
      zoom: 5
    });

    // TODO: [Linesh][8/20/17] ugly but the map & markers need to be globally accessible somehow
    window.map = new Map(map, defaultLocations);
  };

  return callbackFunctionName;
};