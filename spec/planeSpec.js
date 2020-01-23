'use strict';

describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    // spy called airport and it can respond to the method - clearForLanding();
    airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeOff']); // airport is a dummy object
  });

it ('can land at an airport', function() {
  plane.land(airport);
  //expect(plane.land).not.toBeUndefined
  expect(airport.clearForLanding).toHaveBeenCalledWith(plane); // expectations withg spies are in the past tense 
});

it ('can take off from an airport', function() { 
  plane.land(airport);
  plane.take_off(airport);
  expect(airport.clearForTakeOff).toHaveBeenCalled();
});


});