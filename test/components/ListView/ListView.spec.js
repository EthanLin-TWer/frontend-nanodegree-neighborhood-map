import assert from 'assert';

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
    });
  });
});