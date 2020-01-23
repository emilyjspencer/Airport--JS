'use strict';

function Plane() {
};

Plane.prototype.land = function(airport) {
  airport.clearForLanding(this);
};

Plane.prototype.take_off = function(airport) {
  airport.clearForTakeOff(this);

};

