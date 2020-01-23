'use strict';

function Airport() {
  this.hangar = [];

};

Airport.prototype.hangar = function() { return [this.hangar]; };

Airport.prototype.clearForLanding = function(plane) {
  this.hangar.push(plane);

};

Airport.prototype.clearForTakeOff = function(plane) {
  this.hangar.pop(plane);
}