import { describe, it, beforeEach } from 'mocha';
import assert from 'assert';
import sinon from 'sinon';

// TODO: [Linesh][8/27/17] introduce module mapper module
import Map from '../../../src/components/Map';

describe('Map component', () => {
  let component;

  beforeEach('init component with map and initMarker() mocked out', () => {
    const map = sinon.spy();
    const locations = [
      { location: 'Chengdu',  lat: 30.572, lng: 104.066 },
      { location: 'Beijing',  lat: 39.904, lng: 116.407 },
      { location: 'Xi\'an',   lat: 34.341, lng: 108.939 },
      { location: 'Shenzhen', lat: 22.543, lng: 114.057 },
      { location: 'Wuhan',    lat: 30.592, lng: 114.305 },
    ];
    Map.prototype.initMarkers = sinon.stub().callsFake(() => locations.map(location => ({
      getPosition: () => ({
        lat: () => location.lat,
        lng: () => location.lng
      }),
      setVisible: sinon.spy(),
    })));

    component = new Map(map, locations);
  });

  describe('filter function', () => {
    it('should filter Chengdu marker when findMarker(chengdu) is called', () => {
      const chengdu = { location: 'Chengdu', lat: 30.572, lng: 104.066 };
      const expected = { location: 'Chengdu', lat: 30.572, lng: 104.066 };

      const marker = component.findMarker(chengdu);

      assert.equal(marker.getPosition().lat(), expected.lat);
      assert.equal(marker.getPosition().lng(), expected.lng);
    });

    it('should return null when findMarker(shenzhen) is called given shenzhen is not on location list', () => {
      const somePlace = { location: 'Somewhere Else', lat: 79.32, lng: 113.23 };

      const marker = component.findMarker(somePlace);

      assert.deepEqual(marker, null);
    });
  });

  describe('update marker visibility function', () => {
    it('should update all markers to visible when locations matches exactly all the pre-defined locations', () => {
      const locations = [
        { location: 'Chengdu',  lat: 30.572, lng: 104.066 },
        { location: 'Beijing',  lat: 39.904, lng: 116.407 },
        { location: 'Xi\'an',   lat: 34.341, lng: 108.939 },
        { location: 'Shenzhen', lat: 22.543, lng: 114.057 },
        { location: 'Wuhan',    lat: 30.592, lng: 114.305 },
      ];

      component.updateVisibleMarkers(locations);

      assert(component.markers()[0].setVisible.calledWith(true));
      assert(component.markers()[1].setVisible.calledWith(true));
      assert(component.markers()[2].setVisible.calledWith(true));
      assert(component.markers()[3].setVisible.calledWith(true));
      assert(component.markers()[4].setVisible.calledWith(true));
    });

    it('should update Chengdu marker to visible and others to invisible when only update chengdu markers', () => {
      const locations = [
        { location: 'Chengdu', lat: 30.572, lng: 104.066 }
      ];

      component.updateVisibleMarkers(locations);

      assert(component.markers()[0].setVisible.calledWith(true));
      assert(component.markers()[1].setVisible.calledWith(false));
      assert(component.markers()[2].setVisible.calledWith(false));
      assert(component.markers()[3].setVisible.calledWith(false));
      assert(component.markers()[4].setVisible.calledWith(false));
    });
  });
});
