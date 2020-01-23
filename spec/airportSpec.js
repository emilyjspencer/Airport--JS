'use strict';

describe('Airport', function() {

  var airport;
  var plane;

beforeEach(function() {  // before each test - create a new airport object
  airport = new Airport(); 
  plane = jasmine.createSpy('plane', ['land']); // create a dummy plane that responds to our land method 
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

});
