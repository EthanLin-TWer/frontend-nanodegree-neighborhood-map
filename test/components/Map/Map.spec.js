import { describe, it, beforeEach } from 'mocha';
import assert from 'assert';
import sinon from 'sinon';

// TODO: [Linesh][8/27/17] introduce module mapper module
import Map from '../../../src/components/Map';

describe('Map component', () => {
  describe('filter function', () => {
    let component;

    beforeEach('init component with map and initMarker() mocked out', () => {
      const map = sinon.spy();
      const locations = [
        { location: 'Chengdu', lat: 30.572, lng: 104.066 },
        { location: 'Beijing', lat: 39.904, lng: 116.407 }
      ];

      Map.prototype.initMarkers = sinon.stub().callsFake(() => locations.map(location => ({
        getPosition: () => ({
          lat: () => location.lat,
          lng: () => location.lng
        })
      })));

      component = new Map(map, locations);
    });

    it('should filter Chengdu marker when findMarker(chengdu) is called', () => {
      const chengdu = { location: 'Chengdu', lat: 30.572, lng: 104.066 };
      const expected = { location: 'Chengdu', lat: 30.572, lng: 104.066 };

      const marker = component.findMarker(chengdu);

      assert.equal(marker.getPosition().lat(), expected.lat);
      assert.equal(marker.getPosition().lng(), expected.lng);
    });

    it('should return null when findMarker(shenzhen) is called given shenzhen is not on location list', () => {
      const shenzhen = { location: 'Shenzhen', lat: 22.543, lng: 114.057 };

      const marker = component.findMarker(shenzhen);

      assert.deepEqual(marker, null);
    });
  });
});
