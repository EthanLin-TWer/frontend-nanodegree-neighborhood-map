import locations from '../components/Map';

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

    locations.forEach(location => {
      const marker = initMarker(location, map);
      const infoWindow = initInfoWindow(location.location);

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
  };

  return callbackFunctionName;
};

const initMarker = (position, map) => new google.maps.Marker({ position, map });
const initInfoWindow = (content) => new google.maps.InfoWindow({ content });