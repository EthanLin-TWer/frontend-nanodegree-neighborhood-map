import assert from 'assert';
import sinon from 'sinon';

import ListView from '../../../src/components/ListView/index';

describe('ListView component', () => {
  describe('filter function', () => {
    let component;

    beforeEach('initialize component', () => {
      const locations = [
        { location: 'Chengdu',  lat: 30.572, lng: 104.066 },
        { location: 'Beijing',  lat: 39.904, lng: 116.407 },
        { location: 'Shenzhen', lat: 22.543, lng: 114.057 },
        { location: 'Wuhan',    lat: 30.592, lng: 114.305 },
      ];

      ListView.prototype.updateVisibleMarkers = sinon.spy();

      component = new ListView(locations);
    });

    it('should return full location list when no filter conditions is applied', () => {
      const expected = [
        { location: 'Chengdu',  lat: 30.572, lng: 104.066 },
        { location: 'Beijing',  lat: 39.904, lng: 116.407 },
        { location: 'Shenzhen', lat: 22.543, lng: 114.057 },
        { location: 'Wuhan',    lat: 30.592, lng: 114.305 },
      ];

      assert.deepEqual(component.filteredLocations(), expected);
      assert.equal(ListView.prototype.updateVisibleMarkers.calledWith(expected), true);
    });

    it('should return Beijing when beijing(case insensitive) is provided as search condition', () => {
      const expected = [
        { location: 'Beijing',  lat: 39.904, lng: 116.407 },
      ];

      component.searcher('beijing');

      assert.deepEqual(component.filteredLocations(), expected);
      assert.equal(ListView.prototype.updateVisibleMarkers.calledWith(expected), true);
    });

    it('should support partial match when "en" is provided as search condition', () => {
      const expected = [
        { location: 'Chengdu',  lat: 30.572, lng: 104.066 },
        { location: 'Shenzhen', lat: 22.543, lng: 114.057 },
      ];

      component.searcher('en');

      assert.deepEqual(component.filteredLocations(), expected);
      assert.equal(ListView.prototype.updateVisibleMarkers.calledWith(expected), true);
    });
  });
});