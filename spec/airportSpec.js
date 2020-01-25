'use strict';

describe('Airport', function() {

  var airport;
  var plane;

beforeEach(function() {  
  airport = new Airport(); 
  plane = jasmine.createSpy('plane', ['land']); 
});

it ('has no planes by default', function() {
  expect(airport.hangar).toEqual([]);

});

it('can clear plane for landing', function() {
  airport.clearForLanding(plane);
  expect(airport.hangar).toEqual([plane]);
});

it('can clear planes for takeoff', function() {
  airport.clearForLanding(plane);
  airport.clearForTakeOff(plane);
  expect(airport.hangar).toEqual([]);
});

describe('stormy weather', function() {
it('checks whether the weather is stormy or not', function() {
  expect(airport.isStormy()).toBeFalsy();
});

it('prevents a plane from taking off in stormy weather', function() {
  spyOn (airport, 'isStormy').and.returnValue(true);
  expect(function() { airport.clearForTakeOff(plane); }).toThrowError('Unable to take off due to stormy weather conditions');
});

it('prevents a plane from landing in stormy weather', function() {
  spyOn(airport, 'isStormy').and.returnValue(true);
  expect(function() { airport.clearForLanding(plane); }).toThrowError('Unable to land due to stormy weather conditions');
});

});



});
