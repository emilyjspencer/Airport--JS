'use strict';

function Airport() {
  this.hangar = [];

};

Airport.prototype.hangar = function() { return [this.hangar]; };

Airport.prototype.clearForLanding = function(plane) {
if(this.isStormy()) {
  throw new Error("Unable to land due to stormy weather conditions");
}
  this.hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  if(this.isStormy()) {
    throw new Error("Unable to take off due to stormy weather conditions");
  }
  this.hangar.pop(plane);
};

Airport.prototype.isStormy = function() {
  return false
};